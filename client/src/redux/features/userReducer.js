import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authSerive"

// To save user in local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}
// user register
export const register = createAsyncThunk('user/register', async(user,thunkApi)=>{
   try{
    return await authService.register(user)
   }
   catch(error){
    const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
    return thunkApi.rejectWithValue(message)
   }
})


// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})




export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
      },
    },
   extraReducers:(builder)=>{
    builder
    .addCase(register.pending,(state)=>{
      state.isLoading = true;
    })
    .addCase(register.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload
    })
    .addCase(register.rejected,(state,action)=>{
      state.isLoading = false;
      state.isLoading = true;
      state.message = action.payload;
      state.user = null
    })
    .addCase(login.pending,(state)=>{
      state.isLoading = true;
    })
    .addCase(login.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload
    })
    .addCase(login.rejected,(state,action)=>{
      state.isLoading = false;
      state.isLoading = true;
      state.message = action.payload;
      state.user = null
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = null
    })
   },
  })
  
  export const { reset } = userSlice.actions
  export default userSlice.reducer