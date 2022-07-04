import classes from './BookmarkSummary.module.css';

function BookmarkSummary({ bookmarkedArticles }) {
  const numberOfArticles = bookmarkedArticles.length;

  return (
    <>
      <p className={classes.summary}>{numberOfArticles} articles bookmarked</p>
      <ul className={classes.list}>
        {bookmarkedArticles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </>
  );
}

export default BookmarkSummary;
