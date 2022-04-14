import NewsItem from "./NewsItem";
import classes from "./MeetupList.module.css";

function NewsList(props) {
  return (
    <ul className={classes.list}>
      {props.news.map((newz) => (
        <NewsItem
          key={newz.id}
          id={newz.id}
          image={newz.image}
          title={newz.title}
          source={newz.source}
        />
      ))}
    </ul>
  );
}

export default NewsList;
