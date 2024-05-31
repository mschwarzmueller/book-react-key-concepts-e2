import { use } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

import dummyArticles from '../../data/dummy-articles.js';
import BookmarkContext from '../../store/bookmark-context.jsx';
import classes from './Articles.module.css';

function Articles() {
  const bookmarkCtx = use(BookmarkContext);

  return (
    <ul className={classes.list}>
      {dummyArticles.map((article) => {
        // will be true, if this article item is also included in the bookmarkedArticles array
        const isBookmarked = bookmarkCtx.bookmarkedArticles.some(
          (bArticle) => bArticle.id === article.id
        );

        // default button action => bookmark article, because not bookmarked yet
        let buttonAction = () => bookmarkCtx.bookmarkArticle(article);
        // default button icon: Empty bookmark icon, because not bookmarked
        let buttonIcon = <FaRegBookmark />;

        if (isBookmarked) {
          buttonAction = () => bookmarkCtx.unbookmarkArticle(article.id);
          buttonIcon = <FaBookmark />;
        }

        return (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button onClick={buttonAction}>{buttonIcon}</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Articles;
