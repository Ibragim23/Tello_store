import { configureStore } from '@reduxjs/toolkit'

import cartReducer, { getTotals } from '../cart/cartReducer'

export const store = configureStore({
  reducer: {
    cartItem: cartReducer,
  },
})

store.dispatch(getTotals());