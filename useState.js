// O que é uma closure
function useState(value) { 
    let state = value;

    function setState(newState) {
        state = newState;
        return state;
    }
    return [state, setState];
}

const [count, setCount] = useState(12);    

console.log(count)
console.log(setCount(4))
