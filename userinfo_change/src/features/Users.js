import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";
export const userSlice = createSlice({
  // 이름설정
  name: "users",
  // 초기 값 설정
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      // 사용자를 추가
      state.value.push(action.payload); // action.data
    },
    deleteUser: (state, action) => {
      // 사용자를 삭제, (filter로 삭제안할 유저를 걸러 담아주면된다.)
      // 삭제하려는 user.id(action.payload.id)를 제외한 user.id 만 데이터에 담아준다.
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
      // 사용자 정보 변경
      // 업데이트할 user.id 와 새롭게 바꿀 username을 전달받아 변경한다.
      state.value.map((user) => {
        if (user.id === action.payload.username) {
          user.username = action.payload.username;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
