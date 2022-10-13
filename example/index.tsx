import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box } from '../src';

const App = () => {
  return (
    <div>
      haaa
      <Box space={"smaller"}>hello</Box>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
