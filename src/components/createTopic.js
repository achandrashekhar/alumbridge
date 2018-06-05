import React, { Component } from "react";
import { connect } from "react-redux";
import "./createTopic.css";
import * as topicActions from '../actions/createTopicAction'
import ListTopics from './ListTopics'
import Loader from './Loader'
class CreateTopic extends Component {

  state = {
    name: '',
    yearEstablished:'',
    description :''
  }

  setName(e){
    this.setState({name:e.target.value})
  }

  setYearEstablished(e){
    this.setState({yearEstablished:parseInt(e.target.value)})
  }

  setDescription(e){
    this.setState({description:e.target.value})
  }

  submitTopicContent(event){
    let topic = {}
    topic.name = this.state.name
    topic.yearEstablished  = this.state.yearEstablished
    topic.description = this.state.description
    console.log(topic);
    this.props.submitTopic(topic)
  }

  render() {
    return(
      <div>
        <div className="topicForm">
          <input type="text" onChange={e => {
              this.setName(e)
            }} placeholder="Name of Institution" />
          <input type="text" onChange={e => {
              this.setYearEstablished(e)
            }} placeholder="Year Established"/>
          <input type="text" onChange={e => {
              this.setDescription(e)
            }} placeholder="Description"/>
          <button onClick={e => {this.submitTopicContent(e)}}> Submit </button>
        </div>
        <div>
          {this.props.isLoading===true?<Loader />:<ListTopics />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        topics: state.topics,
        isBeingCreated: state.isBeingCreated,
        isLoading : state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitTopic: (topic) => dispatch(topicActions.submitTopic(topic))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(CreateTopic)
