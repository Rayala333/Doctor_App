import { createSlice} from "@reduxjs/toolkit";
import { RootState } from './store';

interface UserType {
  name: string;
  email: string;
  isAdmin:boolean
}

const initialState= {
  user: null as UserType | null,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      // console.log(action.payload,"action")
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.User;

export default userSlice.reducer;