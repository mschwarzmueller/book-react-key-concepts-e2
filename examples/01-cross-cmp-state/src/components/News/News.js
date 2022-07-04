import { useState } from 'react';

import Articles from '../Articles/Articles';
import InfoSidebar from '../InfoSidebar/InfoSidebar';

function News() {
  const [savedArticles, setSavedArticles] = useState([]);

  function bookmarkArticleHandler(article) {
    setSavedArticles((prevSavedArticles) => [...prevSavedArticles, article]);
  }

  function unbookmarkArticleHandler(articleId) {
    setSavedArticles((prevSavedArticles) =>
      prevSavedArticles.filter((article) => article.id !== articleId)
    );
  }

  return (
    <>
      <Articles
        onBookmarkArticle={bookmarkArticleHandler}
        onUnbookmarkArticle={unbookmarkArticleHandler}
        bookmarkedArticles={savedArticles}
      />
      <InfoSidebar bookmarkedArticles={savedArticles} />
    </>
  );
}

export default News;