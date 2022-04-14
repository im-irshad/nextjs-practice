import Link from "next/link";
function NewsPage() {
  return (
    <>
      <h1>Newspage</h1>
      <ul>
        <li>lorem isdfasd</li>
        <li>
          <Link href="/news/latest News">lorem isdfasssssd</Link>
        </li>
        <li>lorem isdfasd</li>
      </ul>
    </>
  );
}
export default NewsPage;
