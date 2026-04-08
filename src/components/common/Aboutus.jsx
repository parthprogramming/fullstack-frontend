import { Component } from "react";

class AboutUs extends Component {    // Extends makes the AboutUs class a component which can be rendered 

    constructor(props){
        super(props)
        console.log(props)
        this.state = {count : 0}
    }

    
    handleClick = () =>{
        let i = 1
        this.setState({count:1 + i})
        i++;
    }

    render() {
        return<>This is from class component <button onClick={this.handleClick}>Class</button> {this.state.count}</>
    }
}

export default AboutUs;
