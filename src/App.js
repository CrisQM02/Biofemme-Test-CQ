import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./home/page";
import MyAppBar from './widgets/my_app_bar';
import SearchSection from './widgets/search_field/search_section';
import MyFooter from './widgets/my_footer';
import ProductPage from './product/page';


function App() {
  return (
    <div className="App">
      <MyAppBar/>
      <SearchSection/>
      <Router>
        <Routes>
          <Route path ='/' element = {<Home />}/>
          <Route path ='/producto/:identifier/' element = {<ProductPage/>}/>
        </Routes>
      </Router>
      <MyFooter/>
    </div>
  );
}

export default App;
