import Classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={Classes.item}>
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
    </li>
  );
}
export default MeetupItem;
