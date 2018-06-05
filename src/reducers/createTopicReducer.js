export const topics=(state = [], action)=> {
    switch (action.type) {
        case 'TOPIC_CREATION_SUCCESS':
        return [
        ...state,
        action.topic
      ]
      case 'TOPIC_FETCHED':
      return action.topic
        default:
            return state;
    }
}

export const topicIsBeingCreated=(state = false, action)=> {
    switch (action.type) {
        case 'TOPIC_IS_BEING_CREATED':
        return action.isBeingCreated
        default:
            return state;
    }
}

export const isLoading = (state=false,action)=>{
  switch(action.type) {
    case 'TOPIC_IS_LOADING':
    return action.isLoading
    default:
    return state
  }
}
