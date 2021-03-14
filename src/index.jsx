import React from 'react';
import { render } from 'react-dom';
import './index.html';

const App = () => {
  const password = 'Beescale2020*';
  const username = 'Tom';

  const requestOption = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    mode: 'no-cors',
    body: `grant_type=password&username=${username}&password=${password}`,
  };

  fetch(`https://www.beescale.cloud/Token`, requestOption)
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

//
