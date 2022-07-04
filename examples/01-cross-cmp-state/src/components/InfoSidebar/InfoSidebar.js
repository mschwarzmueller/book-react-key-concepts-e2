import BookmarkInformation from '../BookmarkSummary/BookmarkInformation';
import classes from './InfoSidebar.module.css';

function InfoSidebar({ bookmarkedArticles }) {
  return (
    <aside className={classes.sidebar}>
      <BookmarkInformation bookmarkedArticles={bookmarkedArticles} />
    </aside>
  );
}

export default InfoSidebar;
