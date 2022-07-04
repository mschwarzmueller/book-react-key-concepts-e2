import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

import dummyArticles from '../../data/dummy-articles';
import classes from './Articles.module.css';

function Articles({
  bookmarkedArticles,
  onBookmarkArticle,
  onUnbookmarkArticle,
}) {
  return (
    <ul className={classes.list}>
      {dummyArticles.map((article) => {
        // will be true, if this article item is also included in the bookmarkedArticles array
        const isBookmarked = bookmarkedArticles.some(
          (bArticle) => bArticle.id === article.id
        );

        // default button action => bookmark article, because not bookmarked yet
        let buttonAction = () => onBookmarkArticle(article);
        // default button icon: Empty bookmark icon, because not bookmarked
        let buttonIcon = <FaRegBookmark />;

        if (isBookmarked) {
          buttonAction = () => onUnbookmarkArticle(article.id);
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
