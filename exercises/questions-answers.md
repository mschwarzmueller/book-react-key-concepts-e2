# 1. What’s a “form action”?

A form action is a function that's bound to the `action` prop of a `<form>` element.

React knows both client and server form actions, though server actions will be covered later in the book.

The purpose of a form action is to help you handle the form submission and get easy access to the submitted input values.

# 2. How can you access user input inside of a form action?

Unlike when using `onSubmit`, the form action function will automatically receive a `FormData` object that contains all entered input values.

Important: You must set the `name` prop on all form controls (i.e., on all `<input>`, `<select>` etc. elements) to have those inputs and their values registered in the created form data object.

# 3. What’s the purpose of the useActionState() Hook and how is it used?

The `useActionState()` Hook can be used to update the UI based on form-dependent state. For example, you may use this Hook to render some error message if form input validation fails (inside the form action).

In addition, this Hook also provides a `pending` boolean value which is `true`, if the form action is currently underway, and `false` otherwise.

# 4. What’s the purpose of the useFormStatus() Hook and how is it used?

The `useFormStatus()` Hook can be used in nested components (nested within a `<form>`) to access information about that form's current submission status.

# 5. What’s the difference between useActionState() and useFormStatus()?

Unlike `useActionState()`, `useFormStatus()` must be called in a nested component. It can't be used to access information about a form submission of a `<form>` that's defined in the same component where the Hook is used.

`useFormStatus()` also isn't about managing any state, it's just about extracting information about the surrounding form and its ongoing submission.

# 6. What’s the purpose of the useOptimistic() Hook and how is it used?

The `useOptimistic()` Hook can help with providing quicker user feedback after form submissions. You can use this Hook to derive some temporary state that's active whilst a form submission is underway.
