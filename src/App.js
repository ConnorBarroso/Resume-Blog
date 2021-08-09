import React, {useState} from 'react'
import { Switch, Route } from 'react-router';

import PostList from './components/postList-component/post-list.component';
import Header from './components/header-component/header.component';
import ArticlePage from './components/article-page-component/article-page.component';

import './App.css';

function App() {
  const [header, setHeader] = useState(true)
  console.log(header)

  const closeHeader = () =>{
    setHeader(false)
  }

  const showHeader = ()=>{
    setHeader(true)
  }
  
  
  return (
    <div className="App">
      { header ? ( <Header closeHeader = {closeHeader}/>) : (<button onClick={showHeader}>Show Header</button>)}
      
      <Switch>
        <Route path='/blog' component={PostList} />
        <Route path='/article/:id'  exact component={ArticlePage}/>
      </Switch>

    </div>
  );
}

export default App;
