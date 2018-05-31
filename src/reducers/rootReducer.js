import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import {items, itemsIsLoading, itemsHasErrored} from './itemReducer'

export default combineReducers({
 items,
 itemsIsLoading,
 itemsHasErrored,
 simpleReducer
});
