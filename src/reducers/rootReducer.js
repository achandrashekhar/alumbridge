import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import {items, itemsIsLoading, itemsHasErrored} from './itemReducer'
import {topicIsBeingCreated, topics, isLoading} from './createTopicReducer'

export default combineReducers({
 items,
 itemsIsLoading,
 itemsHasErrored,
 simpleReducer,
 topicIsBeingCreated,
 topics,
 isLoading
});
