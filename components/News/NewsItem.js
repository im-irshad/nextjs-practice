import Card from "../ui/Card";
import classes from "./NewsItem.module.css";

function NewsItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt={props.title}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default NewsItem;
