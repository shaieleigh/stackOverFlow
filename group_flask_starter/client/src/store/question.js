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
      const res = await fetch(`/api/questions`);

      const data = await res.json();

      dispatch(receiveQuestions(data.questions));

    };
  };

  export const fetchQuestion = (id) => {
    return async (dispatch) => {
      const res = await fetch(`/api/questions/${id}`);
      const data = await res.json();
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
