function createStateManager() {
  let state = {};
  let effects = [];
  let cleanupFunctions = [];

  function setState(key, value) {
    state[key] = value;
    runEffects();
  }

  function useEffect(effect, dependencies) {
    const hasChanged = haveDependenciesChanged(dependencies);
    if (hasChanged) {
      cleanup();
      const cleanupFunction = effect();
      if (typeof cleanupFunction === 'function') {
        cleanupFunctions.push(cleanupFunction);
      }
    }
    effects.push({ effect, dependencies });
  }

  function haveDependenciesChanged(newDependencies) {
    if (effects.length === 0) return true;

    const { dependencies: oldDependencies } = effects[effects.length - 1];
    if (newDependencies.length !== oldDependencies.length) return true;

    for (let i = 0; i < newDependencies.length; i++) {
      if (newDependencies[i] !== oldDependencies[i]) return true;
    }
    return false;
  }

  function runEffects() {
    effects.forEach(({ effect, dependencies }) => {
      const hasChanged = haveDependenciesChanged(dependencies);
      if (hasChanged) {
        cleanup();
        const cleanupFunction = effect();
        if (typeof cleanupFunction === 'function') {
          cleanupFunctions.push(cleanupFunction);
        }
      }
    });
  }

  function cleanup() {
    cleanupFunctions.forEach(cleanup => cleanup());
    cleanupFunctions = [];
  }

  return {
    setState,
    useEffect
  };
}

const stateManager = createStateManager();

// Exemplo de uso
stateManager.useEffect(() => {
  console.log('Efeito colateral executado');
  return () => console.log('Cleanup executado');
}, [stateManager.state?.someState]);

stateManager.setState('someState', 'novo valor');
