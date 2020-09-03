import React from 'react';

import SplitPane from './components/SplitPane'

import './assets/css/styles.css'


function App() {
  return (
    <div className="App">
      <SplitPane>
        <SplitPane.Top />
        <SplitPane.Bottom />
      </SplitPane>
    </div>
  );
}

export default App;
