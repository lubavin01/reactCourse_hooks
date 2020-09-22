import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue(v => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <PlanetInfo id={value} />
      </div >
    );
  } else {
    return (<button onClick={() => setVisible(true)}>show</button>)
  }
}

const PlanetInfo = ({ id }) => {
  
  const [name, setName] = useState('undef');

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}`, { method: 'GET' })
      .then(data => data.json())
      .then(dataParsed => {
         setName(dataParsed.name);
      })
      .catch(err => console.log('ERRROR:', err));
  }, [id]);


  return (<div>{`${id} - ${name}`}</div>);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
