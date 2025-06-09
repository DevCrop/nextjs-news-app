import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsePage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>LatestNewssesssPage</h2>
      <NewsList news={latestNews} />
    </>
  );
}
