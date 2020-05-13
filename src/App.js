import React from 'react';

const api = {
  key: 'a21a6a0e9b101da01fb031c23348b7f3',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search ..." />
        </div>
      </main>
    </div>
  );
}

export default App;
