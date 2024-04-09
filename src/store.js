// store.js
import { configureStore } from '@reduxjs/toolkit';
import {habbitReducer} from './Redux/reducers/habbitTrackerReducer';

const configStore = configureStore({
    reducer:{
        habbitReducer : habbitReducer
    }
})

export default configStore;