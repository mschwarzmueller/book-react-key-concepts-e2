import { useState } from 'react';

import Articles from '../Articles/Articles.jsx';
import InfoSidebar from '../InfoSidebar/InfoSidebar.jsx';
import BookmarkContext from '../../store/bookmark-context.jsx';

function News() {
  const [savedArticles, setSavedArticles] = useState([]);

  function addArticle(article) {
    setSavedArticles((prevSavedArticles) => [...prevSavedArticles, article]);
  }

  function removeArticle(articleId) {
    setSavedArticles((prevSavedArticles) =>
      prevSavedArticles.filter((article) => article.id !== articleId)
    );
  }

  const bookmarkCtxValue = {
    bookmarkedArticles: savedArticles,
    bookmarkArticle: addArticle,
    unbookmarkArticle: removeArticle,
  };

  return (
    <BookmarkContext value={bookmarkCtxValue}>
      <Articles />
      <InfoSidebar />
    </BookmarkContext>
  );
}

export default News;
