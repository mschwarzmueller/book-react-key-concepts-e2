import { createContext } from 'react';

const BookmarkContext = createContext({
  bookmarkedArticles: [],
  bookmarkArticle: () => {},
  unbookmarkArticle: () => {},
});

export function BookmarkContextProvider({ children }) {
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
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkContext;
