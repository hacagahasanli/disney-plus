const initialState = {
    elements: [],
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ELEMENTS_SUCCESS":
            return {
                ...state,
                elements: action.payload,
                error: null,
            };
        case "FETCH_ELEMENTS_ERROR":
        case "POST_ELEMENT_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        case "POST_ELEMENT_SUCCESS":
            return {
                ...state,
                elements: [action.payload, ...state.elements],
                error: null,
            };
        default:
            return state;
    }
};

export default reducer;