import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? 'Submitting' : 'Send'} Feedback</button>
  );
}

export default SubmitButton;
