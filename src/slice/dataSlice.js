import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    username: 'ajsdkaskdhkjadhkajshdkahdskjahdjkashdkjadhskjhawkjdhkjasdhkj',
  },
  reducers: {
    setUsername: (state) => {
      state.username = 'Rushi'
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUsername } = dataSlice.actions

export default dataSlice.reducer