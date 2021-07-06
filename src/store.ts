import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './states/location/locationSlice'

export default configureStore({
  reducer: {
    location: locationReducer,
  },
})