import React from 'react';
import { render } from 'react-dom';
import './index.html';

const App = () => {
  const password = '';
  const usermane = '';

  const requestOption = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      grant_type: 'password',
      username: usermane,
      password: password,
    },
    //body: JSON.stringify({ title: 'REACT POST Request Example' }),
  };

  fetch('https://www.beescale.cloud/Token', requestOption)
    .then((resp) => resp.json())
    .then((json) => console.log(json));

  return (
    <>
      <header>
        <h1>BeeScale API</h1>
      </header>
      <main>
        <p>test v console.log</p>
      </main>
    </>
  );
};
render(<App />, document.querySelector('#app'));
