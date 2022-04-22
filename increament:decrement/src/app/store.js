// 단일 저장소 (전역)

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
// 카운터를 저장함
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
