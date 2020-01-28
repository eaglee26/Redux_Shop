initialState = {
    books: []
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;
    }
};

export default booksReducer;