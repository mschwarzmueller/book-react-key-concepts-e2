import BookmarkSummary from './BookmarkSummary.jsx';

function BookmarkInformation({ bookmarkedArticles }) {
  return (
    <section>
      <header>
        <h2>Your Bookmarks</h2>
      </header>
      <BookmarkSummary bookmarkedArticles={bookmarkedArticles} />
    </section>
  );
}

export default BookmarkInformation;
