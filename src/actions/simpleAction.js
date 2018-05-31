import * as constants  from './constants/constants'

export const simpleAction = () => dispatch => {
 dispatch({
  type:constants.SIMPLE_ACTION ,
  payload: 'result_of_simple_action'
 })
}

export const itemsHasErrored=(bool) =>{
    return {
        type: constants.ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}

export const itemsIsLoading=(bool)=> {
    return {
        type: constants.ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export const itemsFetchDataSuccess=(items)=>{
    return {
        type: constants.ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

export const errorAfterFiveSeconds=() =>{
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
}

export const itemsFetchData=(url)=> {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
