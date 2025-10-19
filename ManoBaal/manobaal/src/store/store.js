import {configureStore} from '@reduxjs/toolkit';
import schedulesSlice from '../App/scheduleSlice.js';

export const store = configureStore({
  reducer: {  
    schedule:schedulesSlice,

   }});