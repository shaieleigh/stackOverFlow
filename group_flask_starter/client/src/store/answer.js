export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";

const receiveAnswers = (answers) => {
    return {
      type: RECEIVE_ANSWERS,
      answers,
    };
  };



  export const fetchAnswers = (id) => {
    return async (dispatch) => {
      const res = await fetch(`/api/answers/${id}`);
      const data = await res.json();
      dispatch(receiveAnswers(data.answers))

    };
  }



  export default function answerReducer (state={}, action) {
    switch(action.type) {
      case RECEIVE_ANSWERS:
        return action.answers;
      default:
        return state;

    }
  }
