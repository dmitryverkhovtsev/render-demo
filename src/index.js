import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const environment = process.env.NODE_ENV;
  const build = process.env.BUILD_ID;

  return (
    <main>
      <h1>Hello World</h1>
      <p>NODE_ENV: {environment}</p>
      <p>BUILD_ID: {build}</p>
    </main>
  );
};

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(<App />);
