import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue(v => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <ClassCounter value={value} />
        <HookCounter value={value} />
      </div >
    );
  } else {
    return (<button onClick={() => setVisible(true)}>show</button>)
  }
}

const HookCounter = ({ value }) => {

  useEffect(() => {
    console.log('use effect');
    return () => console.log('clear')
  }, null);

  return (<p>{value}</p>)
}

class ClassCounter extends Component {
  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    return <p>{this.props.value}</p>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
