import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {

    // setTimeout(() => setVisible(false), 1500);

    return (
      <div>
        <button onClick={() => setValue(v => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        {/* <ClassCounter value={value} /> */}
        {/* <HookCounter value={value} /> */}
        <Notification />
      </div >
    );
  } else {
    return (<button onClick={() => setVisible(true)}>show</button>)
  }
}

const HookCounter = ({ value }) => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log('mount');
    setMounted(true);

    return () => console.log('unmount');
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }
    console.log('update')
  }, [value]);

  return (<p>{value}</p>)
}

const Notification = () => {

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timeout)
  }, []);

  return <div>{visible && 'Hello'}</div>
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
