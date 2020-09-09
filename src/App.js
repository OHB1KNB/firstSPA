import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";

function App() {

  return (
      <div>
        <Header
            // pages = {pagesData}
            />
        <Content
            // page = {currentPageData} берётся из pagesData
            />
        <Footer/>
      </div>
  )
}

export default App;
