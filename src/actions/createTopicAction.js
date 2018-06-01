import * as constants  from './constants/constants'

export const topicCreationSuccess = (topic) =>{
  return {
      type: constants.TOPIC_CREATION_SUCCESS,
      topic
  };
}

export const topicIsBeingCreated = (isBeingCreated) => {
  return {
    type: constants.TOPIC_IS_BEING_CREATED,
    isBeingCreated
  }
}

export const submitTopic = (topic)=>{
  return (dispatch) => {
    dispatch(topicIsBeingCreated(true))
    // do api call here - axios.POST
    // For now, mock created topic returned from api call with id attached to other info
    let createdTopic = {"id":1,
      "name" : topic.name,
      "year": topic.year,
      "description": topic.description
    }
    dispatch(topicCreationSuccess(createdTopic))
  }
}
