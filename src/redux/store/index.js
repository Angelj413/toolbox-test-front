import { configureStore } from '@reduxjs/toolkit'
import filesSlice from '../slices/files.slice'

export const store = configureStore({
  reducer: {
    files: filesSlice
  }
})
