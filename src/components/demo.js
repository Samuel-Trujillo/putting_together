import React, {Component} from 'react';

class Demo extends Component{
    constructor(props){
        super(props)

        this.state ={
            age : this.props.age
        }
    }

    ageUp = () =>{
        this.setState({
            age: this.state.age + 1
        })
    }
    render(){
        return(
            <div>
                <div className ="head">
                    <p>{this.props.lastName}</p>
                    <p>{this.props.firstName}</p>
                </div>
                {this.state.age}
                {this.props.hairColor}
                <button onClick = {this.ageUp}>Happy Birthday!</button>
            </div>
        )
    }

}

export default Demo;