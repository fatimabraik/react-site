import { useSelector } from "react-redux";
import "../css/MessageStyle.css"
function Message() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <div className="message">
        <h1>
          Hello {user.name} your appointment is confirmed for {user.text} at {user.DATE} we will contacting you soon
        </h1>
      </div>
    </>
  );
}

export default Message;

