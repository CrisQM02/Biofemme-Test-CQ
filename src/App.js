import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./home/page";
import MyAppBar from './widgets/my_app_bar';
import SearchSection from './widgets/search_field/search_section';
import MyFooter from './widgets/my_footer';
import ProductPage from './product/page';
import ScrollToTop from './widgets/scroll_to_top';


function App() {
  return (
    <div className="App">
      <Router>
        <MyAppBar/>
        <SearchSection/>
        <ScrollToTop />
        <Routes>
          <Route path ='/' element = {<Home />}/>
          <Route path ='/producto/:identifier/' element = {<ProductPage/>}/>
        </Routes>
        <MyFooter/>
      </Router>
    </div>
  );
}

export default App;
