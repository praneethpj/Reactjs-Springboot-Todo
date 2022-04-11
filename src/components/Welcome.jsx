import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { refreshTask } from "../redux/taskSlices";

const Welcome = () => {

  const history = useHistory();

  const [username, setUsername] = useState();

  let user = localStorage.getItem('usernames');
  console.log("User :" + user.length);
  const dispatch = useDispatch();

  if (user === 'undefined' || user === '' || user.trim() === "") {

    history.push("/😃");

  } else {
    console.log(user);
    dispatch(
      refreshTask({
        id: 0
      })
    )
    history.push("/💡");


  }

  const onClick = () => {
    localStorage.setItem('usernames', username);
    history.push("/💡");
  };

  return (
    <div className="welcome">
      <br></br>
      <div className="welcome-title">😃 To'da Media</div>
      <div className="search">
        <input
          type="text"
          className="task-welcome"
          placeholder="Please Enter Your Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <button className="task-button" onClick={() => onClick()}  >
          To'da
        </button>
      </div>

    </div>
  )
}

export default Welcome