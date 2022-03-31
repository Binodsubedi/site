import { combineReducers } from 'redux';

const PostsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POST':
      return action.payload;
      break;

    default:
      return state;
  }
};

export default combineReducers({
  posts: PostsReducer,
});
