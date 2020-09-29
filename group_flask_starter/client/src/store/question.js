export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

const receivePosts = (questions) => {
    return {
      type: RECEIVE_QUESTIONS,
      questions,
    };
  };


  export const fetchQuestions = () => {
    return async (dispatch) => {
      const res = await fetch(`/api/questions`);
      debugger
      const data = await res.json();
      debugger
      console.log(data.questions)
      dispatch(receivePosts(data.questions));

    };
  };


  export default function questionReducer (state={}, action) {
    switch(action.type) {
      case RECEIVE_QUESTIONS:
        return action.questions;
      default:
        return state;

    }
  }