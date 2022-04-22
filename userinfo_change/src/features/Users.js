import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";
export const userSlice = createSlice({
  // 이름설정
  name: "users",
  // 초기 값 설정
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      // 사용자를 추가하기 위한 코드 작성
    },
  },
});
