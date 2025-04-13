import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slice.js'
export default configureStore({
  reducer: {
    counter: counterReducer
  }
})