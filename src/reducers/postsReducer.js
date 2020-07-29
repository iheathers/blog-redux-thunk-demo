export default (state = [], action) => {
    
    switch (action.type) {
        case 'FETCH_POSTS':
            console.log("fetch posts:", state)
            return action.payload;
    
        default:
            console.log("default:", state)
            return state;
           
    }
}