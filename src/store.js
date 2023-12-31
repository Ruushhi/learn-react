import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './slice/dataSlice'

export default configureStore({
  reducer: {
    myData : dataSlice
  },
})