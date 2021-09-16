import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

    constructor(){
      super();
      this.state = {
        text: ''
      }
    }


    handleChange = (event) => {
      this.setState({
        text: event.target.value,
      });
    };

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.dispatch({ type: "ADD_TODO", payload: this.state });
    };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="add todo" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
        </form>
   
      </div>
    )
  }
}


export default connect()(CreateTodo);