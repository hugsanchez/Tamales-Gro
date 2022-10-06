import { configureStore } from '@reduxjs/toolkit';

const reducer = {
  userReducer: {}
};

const store = configureStore({
  reducer
});
export default store;