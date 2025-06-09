import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
export default function Newspage() {
  return (
    <>
      <h1>News </h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
