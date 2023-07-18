import React, { useState } from 'react';
import fetchData from './services/api';
import Card from './components/Card';
import initialData from './helpers/initialData';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city).then((response) => {
      setData(response);
    });
  };
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none"
          value={city}
          onChange={({ target }) => setCity(target.value)}
        />
        <button
          type="submit"
          className="bg-blue-700 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
