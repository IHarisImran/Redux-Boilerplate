import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, removeAllUser } from "./store/handlers/User";

export default function App() {
  // Add Data
  const dispatch = useDispatch();
  async function addNewUser() { dispatch(addUser(prompt("Enter Data"))) }
  // Remove Data
  async function deleteUser(id) { dispatch(removeUser(id)) }
  // Remove Data
  async function deleteAllUsers() { dispatch(removeAllUser()) }
  // Get Data
  const data = useSelector(state => { return state.users });

  return (
    <>
      <button onClick={addNewUser}>Add User</button>
      <button onClick={deleteAllUsers}>Delete All User</button>
      {data.map((i, j) => { return <div key={j}><button onClick={() => deleteUser(j)}>X</button> {i}</div> })}
    </>
  );
}