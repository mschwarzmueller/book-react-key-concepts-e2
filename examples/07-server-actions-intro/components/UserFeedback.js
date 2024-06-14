export default function UserFeedback() {
  async function saveFeedback(formData) {
    'use server';
    const feedback = formData.get('feedback');
    console.log(feedback);
  }

  return (
    <form action={saveFeedback}>
      <p>
        <label htmlFor="feedback">Your feedback</label>
        <textarea id="feedback" name="feedback" rows={3} />
      </p>
      <p>
        <button>Submit</button>
      </p>
    </form>
  );
}
