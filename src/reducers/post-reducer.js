const initialPostState = {
    id: null,
    title: '',
    content: '',
};

export const postReducer = (state = initialPostState, action) => {
    switch (action.type) {
        case 'SET_POST':
            return { ...state, ...action.payload };
        case 'LOGOUT':
            return initialPostState;
        default:
            return state;
    }
};
