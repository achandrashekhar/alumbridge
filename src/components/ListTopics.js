import React, { Component } from "react";
import { connect } from "react-redux";
import * as topicActions from '../actions/createTopicAction'


class ListTopics extends Component {
  constructor(props){
    super(props)
    this.props.topicIsLoading(true)
    this.props.fetchTopic()
  }
  componentDidMount(){


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

const mapDispatchToProps = (dispatch) =>{
  return {
      fetchTopic: () => dispatch(topicActions.fetchTopic()),
      topicIsLoading:(isLoading)=>dispatch(topicActions.topicIsLoading(isLoading))
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(ListTopics)
