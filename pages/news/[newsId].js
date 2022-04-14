import { useRouter } from "next/router";
function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  return <div>{newsId}</div>;
}

export default DetailPage;
