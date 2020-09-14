import React, {useState} from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";
import pagesData from "./mocks/pages.json"

function App() {
    const [currentPage, switchCurrentPage] = useState(0)

    const onSelectPageHandler = (index) => {
        switchCurrentPage(index)
    }

    return (
      <div>
        <Header
            pages = {pagesData}
            onChangePage = {onSelectPageHandler}
            />
          <Content
            page = {pagesData[currentPage]}
            />
        <Footer/>
      </div>
  )
}

export default App;
