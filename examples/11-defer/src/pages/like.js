export function action({ params }) {
  console.log('Triggered like action.');
  console.log(`Liking post with id ${params.id}.`);
  return null; // actions must return something
}
