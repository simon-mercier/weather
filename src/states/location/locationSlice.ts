import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Coordinates from '../../interfaces/coordinates'

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
        value: { longitude : 45.5017, latitude : 73.5673 } as Coordinates,
  },
  reducers: {
    setLongitude: (state, longitude : PayloadAction<number>) => {
      state.value.longitude = longitude.payload
    },
    setLatitude: (state, latitude : PayloadAction<number>) => {
      state.value.latitude = latitude.payload
    },
    setCoordinate: (state, coordinate: PayloadAction<Coordinates>) => {
      state.value = coordinate.payload
    },
  },
})

export const { setLongitude, setLatitude, setCoordinate } = locationSlice.actions

export default locationSlice.reducer