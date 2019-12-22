import {useState, useEffect} from 'react'

function useCount(){

    const [count, setCount] = useState(0)

    function incrementar(){
        setCount(count + 1)
    }

    function decrementar(){
        setCount(count -1)
    }

    useEffect(() =>{
        console.log(count)
    },[count])

    return{
        count,
        incrementar,
        decrementar
    }

}

export default useCount