import {configureStore} from '@reduxjs/toolkit' // store hamesha redux se he aata hai react redux se nahi aata hai
import authSlice from './authSlice';

const store = configureStore({  // store k aandr ek he parameter aata hai aur vo hai reducer
    reducer:{
        auth : authSlice,
    }
});

export default store;