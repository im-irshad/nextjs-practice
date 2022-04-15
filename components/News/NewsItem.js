//import Card from "../ui/Card";
//import classes from "./MeetupItem.module.css";
import Image from "next/image";

function NewsItem(props) {
  return (
    <li className>
      <div>
        <div>
          <image src={props.image} alt={props.title} width={400} height={500} />
        </div>
        <div className>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div>
          <button>Show Details</button>
        </div>
      </div>
    </li>
  );
}

export default NewsItem;
