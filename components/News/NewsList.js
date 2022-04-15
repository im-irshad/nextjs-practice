import NewsItem from "./NewsItem";
//import classes from "./MeetupList.module.css";

function NewsList(props) {
  return (
    <ul>
      {props.news.map((newz) => (
        <NewsItem
          key={newz.id}
          id={newz.id}
          img={newz.image}
          title={newz.title}
          source={newz.source}
        />
      ))}
    </ul>
  );
}

export default NewsList;
