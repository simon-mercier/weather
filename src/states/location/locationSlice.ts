import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ICoordinates from '../../interfaces/coordinates'
import ILocationInfo from '../../interfaces/locationInfo'

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
        value: {coordinates : { longitude: -73.561668, latitude: 45.508888 } as ICoordinates,  } as ILocationInfo,
  },
  reducers: {
    setLongitude: (state, longitude : PayloadAction<number>) => {
      state.value.coordinates.longitude = longitude.payload
    },
    setLatitude: (state, latitude : PayloadAction<number>) => {
      state.value.coordinates.latitude = latitude.payload
    },
    setLocation: (state, location: PayloadAction<ILocationInfo>) => {
      state.value = location.payload
    },
  },
})

export const { setLongitude, setLatitude, setLocation } = locationSlice.actions

export default locationSlice.reducer