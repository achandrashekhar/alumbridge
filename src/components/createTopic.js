import React, { Component } from "react";
import "./createTopic.scss";

class CreateTopic extends Component {
  render() {
    return(
      <div className="topicForm">
        <input type="text" name="instituteName" placeholder="Name of Institution"/>
        <input type="text" name="yearEstablished" placeholder="Year Established"/>
        <input type="text" name="description" placeholder="Description"/>
        <button> Submit </button>
      </div>
    )
  }
}

export default CreateTopic
