// Code SimpleComponent Here
import React, { Component } from 'react';


class SimpleComponent extends Component {
    constructor(props){
        super();

    this.state = {
        mood: "happy"
      }
    }


handleClick = (e) => {
    if(this.state.mood === "happy"){
    this.setState({
        mood: "sad"
    })
}else{
    this.setState({
        mood:"happy"
    })
}
}

    render() { 
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
          );
    }
}
 
export default SimpleComponent;