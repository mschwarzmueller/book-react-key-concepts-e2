import { useState } from 'react';

import Articles from '../Articles/Articles.jsx';
import InfoSidebar from '../InfoSidebar/InfoSidebar.jsx';

function News() {
  const [savedArticles, setSavedArticles] = useState([]);

  function handleBookmarkArticle(article) {
    setSavedArticles((prevSavedArticles) => [...prevSavedArticles, article]);
  }

  function handleUnbookmarkArticle(articleId) {
    setSavedArticles((prevSavedArticles) =>
      prevSavedArticles.filter((article) => article.id !== articleId)
    );
  }

  return (
    <>
      <Articles
        onBookmarkArticle={handleBookmarkArticle}
        onUnbookmarkArticle={handleUnbookmarkArticle}
        bookmarkedArticles={savedArticles}
      />
      <InfoSidebar bookmarkedArticles={savedArticles} />
    </>
  );
}

export default News;