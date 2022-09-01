import {
  Navbar
} from './components/organisms/index'

import GlobalStyle from './theme/globalStyles';

function App() {

  return (
    <>
      <GlobalStyle />
      <h1>Make or Break Concepts</h1>
      <h2>Select a game mode</h2>
      <Navbar />
    </>
  );
};

export default App;
