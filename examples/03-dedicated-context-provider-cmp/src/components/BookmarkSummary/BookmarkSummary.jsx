import { use } from 'react';

import BookmarkContext from '../../store/bookmark-context.jsx';
import classes from './BookmarkSummary.module.css';

function BookmarkSummary() {
  const bookmarkCtx = use(BookmarkContext);

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
