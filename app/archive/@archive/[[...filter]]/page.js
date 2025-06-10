import Link from "next/link";
import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;

  //archive/xxxxx
  const selectedYear = filter?.[0];

  //archive/xxxx/xx
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  // 만약 연도가 있고 월이 없을경우.
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  //만약 연 · 월 다 있을 경우
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No News Found For the Select period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  //연도는 있고 가능한 year중에 내가 선택한 year가 있는경우.
  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("invaild filter.");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              console.log(href);

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
