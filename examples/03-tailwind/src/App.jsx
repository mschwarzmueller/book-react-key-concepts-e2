function Item({ children }) {
  return <li className='p-1 my-2 bg-stone-100'>{children}</li>;
}

function App() {
  return (
    <main className="bg-gray-200 text-gray-900 h-screen p-12 text-center">
      <h1 className="font-bold text-4xl">Tailwind CSS is amazing!</h1>
      <p className="text-gray-600">
        It may take a while to get used to it. But it's great for people who
        don't want to write custom CSS code.
      </p>
      <section className="mt-10 border border-gray-600 max-w-3xl mx-auto p-4 rounded-md bg-gray-300">
        <h2 className="font-bold text-xl">Tailwind CSS Advantages</h2>
        <ul className="mt-4">
          <Item>No CSS knowledge required</Item>
          <Item>Compose styles by combining "small" CSS classes</Item>
          <Item>
            Never leave your JSX code - no need to fiddle around in extra CSS
            files
          </Item>
          <Item>Quickly test and apply changes</Item>
        </ul>
      </section>
    </main>
  );
}

export default App;
