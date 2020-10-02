export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";

const receiveQuestions = (questions) => {
    return {
      type: RECEIVE_QUESTIONS,
      questions,
    };
  };

const receiveQuestion = (question) => {
    return {
      type: RECEIVE_QUESTION,
      question,
    };
  };


  export const fetchQuestions = () => {
    return async (dispatch) => {
      debugger
      const res = await fetch(`/api/questions`);
      debugger

      const data = await res.json();

      dispatch(receiveQuestions(data.questions));

    };
  };

  export const fetchQuestion = (id) => {
    return async (dispatch) => {
      debugger
      const res = await fetch(`/api/questions/${id}`);
      debugger
      const data = await res.json();
      debugger
      dispatch(receiveQuestion(data.question))

    };
  }



  export default function questionReducer (state={}, action) {
    switch(action.type) {
      case RECEIVE_QUESTIONS:
        return action.questions;
      case RECEIVE_QUESTION:
        return action.question;
      default:
        return state;

    }
  }
