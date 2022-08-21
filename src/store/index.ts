import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { storiesReducer } from './stories';

const appReducer = combineReducers({
    stories: storiesReducer,
});

const middlewares = applyMiddleware(thunkMiddleware);

export type RootState = ReturnType<typeof appReducer>;

const rootReducer = (state: RootState | undefined, action: any) => {
    return appReducer(state, action);
};

const store = createStore(rootReducer, middlewares);

export default store;