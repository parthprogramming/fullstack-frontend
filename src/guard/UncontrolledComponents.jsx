import {useEffect,useRef} from 'react'

const UnControlledComponent = () => {
    const iRef = useRef()
    useEffect(()=>{
        iRef.current.focus();
    },[])

    return (
        <input ref={iRef}></input>
    )
}

export default UnControlledComponent;