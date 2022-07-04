import { useState } from 'react';

import Articles from '../Articles/Articles';
import InfoSidebar from '../InfoSidebar/InfoSidebar';
import BookmarkContext from '../../store/bookmark-context';

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
    <BookmarkContext.Provider value={bookmarkCtxValue}>
      <Articles />
      <InfoSidebar />
    </BookmarkContext.Provider>
  );
}

export default News;
