import Card from "../UI/Card";
import Classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={Classes.item}>
      <Card>
        <div className={Classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={Classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={Classes.actions}>
          <button>add to favorites</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
