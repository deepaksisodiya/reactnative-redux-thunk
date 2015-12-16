/**
 * Created by deepaksisodiya on 16/12/15.
 */


const initialState = {
  name: "deepak",
  city: "pune"
};

export function profile(state, action) {
  if (typeof state === 'undefined') {
    return initialState;

  } else if (action.type === 'GET_PROFILE') {

    return action.data

  } else {
    return initialState
  }
}

export function getProfile() {
  return dispatch => {
    return fetch(
      'http://localhost:1337', {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('api response: ', responseData);
        dispatch({type: 'GET_PROFILE', data: responseData});
      })
      .catch(error => {
        console.log(error);
      })
  };

}