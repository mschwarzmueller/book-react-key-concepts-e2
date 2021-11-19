# 1. What is React?

React (or React.js) is a JavaScript library that simplifies building (complex) user interfaces. It's exposed through the [react](https://www.npmjs.com/package/react) package, and combined with the [react-dom](https://www.npmjs.com/package/react-dom) package, you can use it to build advanced, highly interactive an reactive web user interfaces.

React is platform-agnostic though, you can also use it with other platforms - most notably, you can build native mobile apps with React and the [react-native](https://www.npmjs.com/package/react-native) package.

# 2. Which advantage does React offer over vanilla JavaScript projects?

With "vanilla JavaScript" (i.e. JavaScript without any extra libraries or frameworks), you have to write all code instructions yourself. 

For basic web apps and user interfaces, this is typically no problem but for more advanced use-cases, it can quickly become very cumbersome and error prone to use just vanilla JavaScript (also see the next question: *Imperative vs declarative code*).

React simplifies the creation of (complex) web user interfaces by generating and executing DOM-manipulating instructions "under the hood", on your behalf. As a developer, you can focus on describing the desired target UI state(s) and the core business logic. You don't have to control all UI updates and changes manually.

# 3. What’s the difference between imperative and declarative code?

With *imperative code*, you write down all instructions step by step. If you want to listen to a button click and then change some text on the screen, you have to add the code that sets up the event listener and then also the code that selects the to-be-changed element as well as the code that does set a new text for that element.
For non-trivial user interfaces, this can lead to lots of overhead work and possible error sources.

When writing code *declaratively*, you don't write down all steps that lead to a certain result. Instead, as a developer, you describe the target (UI) state(s) and let some library (in this case: React) figure out how to get there. This allows you to skip the overhead work of selecting DOM elements and changing them manually and focus on your core business logic instead.

# 4. What is a Single-Page-Application (SPA)?

A SPA is a web app that is technically served on one page (one HTML document) only. That page loads some JavaScript code (typically combined with some library like React) that takes care about updating the page content based on different user actions.
To the user, it might seem like they are navigating different pages but technically, it's the same page's DOM getting updated behind the scenes.

You can even listen to changes in the page path to update the DOM based on path changes - this increases the "multi page feeling". When working with React, the [react-router](https://www.npmjs.com/package/react-router) package is the most popular package for listening to such path changes and updating the UI based on any changes.

# 5. How can you create new React projects and why do you need such a more complex project setup?

New React projects can be created in different ways but one of the most popular and easiest ways of setting up a new React project is to use the [create-react-app tool](https://reactjs.org/docs/create-a-new-react-app.html).

This is a tool which you can use to scaffold new React projects which already have all the packages (like `react` and `react-dom`) that are needed to build web projects with React. In addition, those projects also come with some code transformation tools and a workflow that enables the usage of special features like *JSX code* (markup code for React apps).

New projects can be created with that tool by running `npx create-react-app project-name`.

These projects also provide a development server which can be started via `npm start` to preview the React web app locally and get live updates as you make code changes.