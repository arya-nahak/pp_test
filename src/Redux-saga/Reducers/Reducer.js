const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "REQUEST":
      return { ...state, data: [], isLoading: true };
    case "SUCCESS":
      return { ...state, data: payload, isLoading: false };
    case "FAILURE":
      return { ...state, error: payload, isLoading: false };

    case "ADFREQUEST":
      return { ...state, data: [], isLoading: true };
    case "ADFSUCCESS":
      return { ...state, data: payload, isLoading: false };
    case "ADFFAILURE":
      return { ...state, error: payload, isLoading: false };

    default:
      return state;
  }
};
