import { createStore, combineReducers, applyMiddleware} from 'redux';
import articleReducer from './reducers/articleReducer';
import thunk from 'redux-thunk';
 
const rootReducer = combineReducers({
  articles: articleReducer,
});
 
export const store = createStore(rootReducer,{},applyMiddleware(thunk));