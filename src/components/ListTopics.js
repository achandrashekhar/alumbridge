import React, { Component } from "react";
import { connect } from "react-redux";

class ListTopics extends Component {
  componentDidUpdate(){
    console.log("this is being called");
    console.log(this.props.topics)
  }
  render(){
    return(
      <div className="topicList">
      <ul>
      {this.props.topics.map(item =>
        <li key={item.name}>{item.name}</li>)}
      </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        topics: state.topics
    };
};


export default connect(mapStateToProps)(ListTopics)
