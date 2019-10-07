import React from 'react';
import Sidebar from './Pages/Sidebar';
import Main from './Pages/Main';
import Scrolltopbar from './Pages/Scrolltopbar'
import LogoutModal from './Pages/LogoutModal'

function App() {
  return (
    <div>
    <div id="wrapper">
      <Sidebar />
      <Main />

    </div>
      <Scrolltopbar />
      <LogoutModal />
    </div>
  );
}

export default App;
