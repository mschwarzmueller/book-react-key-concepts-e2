import Articles from '../Articles/Articles.jsx';
import InfoSidebar from '../InfoSidebar/InfoSidebar.jsx';
import { BookmarkContextProvider } from '../../store/bookmark-context.jsx';

function News() {
  return (
    <BookmarkContextProvider>
      <Articles />
      <InfoSidebar />
    </BookmarkContextProvider>
  );
}

export default News;
