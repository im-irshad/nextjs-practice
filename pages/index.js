import NewsList from "../components/News/NewsList";
const NEWS = [
  {
    id: "n1",
    title: "World Cup winner retires from international game",
    image:
      "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/1609A/production/_124166209_shrubsole_getty.jpg",
    source: "BBC",
  },
  {
    id: "n2",
    title: "South Africa wrap up comfortable series win",
    image:
      "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/9F9D/production/_124116804_gettyimages-1239913538.jpg",
    source: "BBC",
  },
  {
    id: "n1",
    title: "Andrew McDonald named coach of Australias mens cricket team",
    image:
      "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/2FFC/production/_124148221_mcdonald_getty.jpg",
    source: "BBC",
  },
];

function HomePage() {
  return <NewsList news={NEWS} />;
}
export default HomePage;
