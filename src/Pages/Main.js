import React from 'react';
import Topbar from './Topbar';
import Content from './Content';
import Footer from './Footer';

function Main() {
  return (
    <div id="content-wrapper" class="d-flex flex-column">
    {/* nav/ content / footer */}
    <div id="content">
      <Topbar />
      <Content />
    </div>

      <Footer />
      
    </div>
  );
}

export default Main;
