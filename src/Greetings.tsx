interface Protype{
    name:string
}

const greetings = (props:Protype) =>{
    console.log(props.name)
    return <h1>Hello {props.name}</h1>;
}

export default greetings;