import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    userData: [],
  },
  reducer: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});
export const {
  setFirstName,
  setEmail,
  setGender,
  setCountry,
  setCity,
  setAddress,
  setBloodGroup,
  setProfileImage,
  setPhoneNumber,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
