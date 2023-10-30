import {configureStore} from '@reduxjs/toolkit';
import { adminReducer } from './reducers/adminReducer';
import { courseReducer } from './reducers/courseReducer';
import { profileReducer, userReducer,subscriptionReducer } from './reducers/userReducer';
import { otherReducer } from './reducers/otherReducer';


const store = configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        course:courseReducer,
        subscription: subscriptionReducer,
        admin:adminReducer,
        other:otherReducer
    },
});

export default store;

export const server = 'http://localhost:4000/api/v1';
