import React, {useState} from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";
import pagesData from "./mocks/pages.json"

function App() {
    const [currentPageID, setPageID] = useState(0)

    return (
      <div>
        <Header
            pages = {pagesData}
            />
          <Content
            page = {pagesData[currentPageID]}
            />
        <Footer/>
      </div>
  )
}

export default App;
