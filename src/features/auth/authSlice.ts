import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import authService from './Services/auth.service';
import { Jwt } from './Models/token';
import { RootState } from '../../app/store';
import { LoginUser } from './Models/loginUser';

const storedJwt: string | null = localStorage.getItem('jwt');
const jwt: Jwt = !!storedJwt ? JSON.parse(storedJwt) : null;

// TODO: move higher
interface AsyncState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface AuthState extends AsyncState {
  jwt?: Jwt;
  isAuthenticated?: boolean;
  message: string;
}

const initialState: AuthState = {
  jwt: jwt,
  isAuthenticated: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ''
};


export const login = createAsyncThunk(
  'auth/login',
  async (user: LoginUser, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return thunkAPI.rejectWithValue('Unable to login, please double-check your credintials');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.jwt = action.payload.jwt;
        state.isAuthenticated = true;
        state.isError = false;
      })
      .addCase(login.rejected, (state, action: any) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.isAuthenticated = false;
        state.jwt = null
      })
      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        
        state.jwt = null;
        state.isAuthenticated = false;
      });
  },
});

export const { reset } = authSlice.actions;

export const selectedUser = (state: RootState) => {
  return state.auth;
};

export default authSlice.reducer;