import { useSelector } from "react-redux";
import { useUser } from './redux/slices/User'

export default function App() {
  const { setUserState, removeUserState, removeAllUsersState } = useUser(),
    data = useSelector(state => { return state.users });

  return (
    <>
      <button onClick={() => setUserState(prompt("Enter Username"))}>Add User</button>
      <button onClick={() => removeAllUsersState()}>Delete All User</button>
      {data.map((i, j) => { return <div key={j}><button onClick={() => removeUserState(j)}>X</button> {i}</div> })}
    </>
  );
}