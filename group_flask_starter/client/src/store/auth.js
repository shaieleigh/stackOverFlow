import Cookies from 'js-cookie';

const SET_USER = 'authentication/SET_USER';
const REMOVE_USER = 'authentication/REMOVE_USER';


export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const signup = (email, fullName, username, password) => {
    return async (dispatch) => {
      const res = await fetch('api/users', {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
        },
        body: JSON.stringify({ email, fullName, username, password })
      });
      const data = await res.json();
      dispatch(setUser(data));
      res.data = data;
      return res;
    }
  }


export default function authReducer(state={}, action) {
    switch(action.type) {
      case SET_USER:
        return action.user;
      case REMOVE_USER:
        return {};
      default:
        return state;
    }
  }
