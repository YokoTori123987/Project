import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import AnimeDetails from './pages/AnimeDetails';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Categories from './pages/Categories';
import Search from './pages/Search';
import AnimeWatching from './pages/AnimeWatching';
class App extends React.Component {
  render(){
    return (
      <Router>
        <Header/>
        <Home/>
        {/* <AnimeDetails/> */}
        {/* <Blog/> */}
        {/* <BlogDetails/> */}
        {/* <Categories/> */}
        {/* <AnimeWatching/> */}
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> */}
          <Footer/>
      </Router>
    );
  }
}

export default App;
