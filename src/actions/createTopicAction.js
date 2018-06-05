import * as constants  from './constants/constants'
import * as apiCall from './apiCall'
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

    apiCall.apiCall('POST',"/createtopic",topic).then(data=>{
      console.log("response is "+data)
      return data
    }).then(data=>{
        dispatch(topicCreationSuccess(data.data))
      })


  }
}
