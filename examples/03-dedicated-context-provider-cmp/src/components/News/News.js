import Articles from '../Articles/Articles';
import InfoSidebar from '../InfoSidebar/InfoSidebar';
import { BookmarkContextProvider } from '../../store/bookmark-context';

function News() {
  return (
    <BookmarkContextProvider>
      <Articles />
      <InfoSidebar />
    </BookmarkContextProvider>
  );
}

export default News;
