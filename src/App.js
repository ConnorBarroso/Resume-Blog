//library imports
import React from 'react'
import { Switch, Route, Redirect } from 'react-router';

//component imports
import PostList from './components/postList-component/post-list.component';
import Header from './components/header-component/header.component';
import ArticlePage from './components/article-page-component/article-page.component';
import Footer from './components/footer-component/footer.component';
import Homepage from './components/Home-page/home-page.component';
import Workspage from './components/works-page-component/works-page.component';

// styles imports
import './App.scss';


function App() {
  
  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' exact><Redirect to='/Home/'/></Route>
        <Route path='/Home/' exact component={Homepage} />  
        <Route path='/Works/' exact component={Workspage} /> 
        <Route path='/Blog/' exact component={PostList} />
        <Route path='/article/:id'  exact component={ArticlePage}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
