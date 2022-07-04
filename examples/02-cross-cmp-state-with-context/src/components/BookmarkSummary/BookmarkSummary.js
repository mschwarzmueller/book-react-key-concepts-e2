import { useContext } from 'react';

import BookmarkContext from '../../store/bookmark-context';
import classes from './BookmarkSummary.module.css';

function BookmarkSummary() {
  const bookmarkCtx = useContext(BookmarkContext);

  const numberOfArticles = bookmarkCtx.bookmarkedArticles.length;

  return (
    <>
      <p className={classes.summary}>{numberOfArticles} articles bookmarked</p>
      <ul className={classes.list}>
        {bookmarkCtx.bookmarkedArticles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </>
  );
}

export default BookmarkSummary;
