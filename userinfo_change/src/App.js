import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import { addUser, deleteUser, updateUser } from "./features/Users";
function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              // 새로운 사람을 추가하려면? userList 마지막 유저 다음에 오도록 해당 유저 id +1 번째로 추가한다.
              addUser({ id: userList[userList.length - 1].id + 1, name: name, username: username })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <input
                type="text"
                placeholder="New Username..."
                onChange={(e) => {
                  setNewUsername(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  // 업데이트 할 user id 와 새로운 유저네임을 인자로 전달
                  dispatch(updateUser({ id: user.id, username: newUsername }));
                }}
              >
                {" "}
                Update Username{" "}
              </button>
              <button
                onClick={() => {
                  // 삭제 할 user.id
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                {" "}
                Delete User{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
