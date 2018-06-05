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

export const topicIsLoading = (isLoading) => {
  return {
    type: constants.TOPIC_IS_LOADING,
    isLoading
  }
}

export const topicIsBeingFetched = (isBeingFetched) => {
  return {
    type: constants.TOPIC_IS_BEING_FETCHED,
    isBeingFetched
  }
}

export const fetchedTopics = (topic) =>{
  return {
      type: constants.TOPIC_FETCHED,
      topic
  };
}

export const submitTopic = (topic)=>{
  return (dispatch) => {
    dispatch(topicIsBeingCreated(true))
    // do api call here - axios.POST
    // For now, mock created topic returned from api call with id attached to other info
    console.log("before API call ",topic);
    apiCall.apiCall('POST',"/createtopic",topic).then(data=>{
      console.log("response is "+data)
      return data
    }).then(data=>{
        dispatch(topicCreationSuccess(data.data))
      })


  }
}

export const fetchTopic = ()=>{
  console.log('inside topicAction.fetchTopic()')
  return (dispatch) =>{
    console.log('dispatching the apicall')
     apiCall.apiCall('GET',"/topics").then(data=>{
       console.log("what is the server sending me ",data);
       dispatch(fetchedTopics(data.data))
     }).then(
        
        dispatch(topicIsLoading(false))
     )

  }
}
