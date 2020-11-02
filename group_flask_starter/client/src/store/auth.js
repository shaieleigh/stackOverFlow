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


export const login = (email, password) => {
    return async dispatch => {
      const res = await fetch('/api/users/login', {

        method: "post",
        headers: {
          "Content-Type": "application/json",
          "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
        },
        body: JSON.stringify({ email, password })

      });

      res.data = await res.json();

      // error handling
      const { message } = res.data;

      const errorsList = document.getElementById("errors");
      if(errorsList) {
        errorsList.innerHTML = '';
      }
      if (message) {
        errorsList.style.display = "flex";
        const errorLi = document.createElement('li');
        errorLi.innerHTML = message;
        errorsList.appendChild(errorLi)
      }

      if (res.ok) {
        dispatch(setUser(res.data))
      }
      return res;
    }
}


export const logout = () => {
    return async (dispatch) => {
      const res = await fetch('/api/users', {
        method: "delete",
      });
      if (res.ok) dispatch(removeUser());
      res.data = await res.json();
      return res;
    };
};


export const signup = (email, username, password) => {
    return async (dispatch) => {
      const res = await fetch('api/users/signup', {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
        },
        body: JSON.stringify({ email, username, password })
      });
      const data = await res.json();

      //error handling

      const { message } = data;
      console.log("this is the error message", message)
      const errorsList = document.getElementById("sign-up-errors");
      errorsList.innerHTML = '';
      if (message) {
        errorsList.style.display = "flex";
        const errorLi = document.createElement('li');
        errorLi.innerHTML = message;
        errorsList.appendChild(errorLi)
      }

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
