import { createContext } from 'react';

const BookmarkContext = createContext({
  bookmarkedArticles: [],
  bookmarkArticle: () => {},
  unbookmarkArticle: () => {}
});

export default BookmarkContext; 
