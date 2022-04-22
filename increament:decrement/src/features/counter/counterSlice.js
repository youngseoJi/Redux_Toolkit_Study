import { createSlice } from "@reduxjs/toolkit";
// 초기값 설정
const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // 증가기능
    increment: (state) => {
      state.count += 1;
    },
    // 감소기능
    decrement: (state) => {
      state.count -= 1;
    },
    // 초기화 기능
    reset: (state) => {
      state.count = 0;
    },
    // count 숫자에 해당 액션 기능을 실행한 데이터를 전달하여 더해준다.
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
//  액션, 내보내기
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
// 리듀서, 내보내기
export default counterSlice.reducer;
