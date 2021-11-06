import { configureStore } from '@reduxjs/toolkit'
import reducers from 'pages/reducers'

export const store = configureStore({
  reducer: reducers
})

export type RootStore = ReturnType<typeof store.getState>