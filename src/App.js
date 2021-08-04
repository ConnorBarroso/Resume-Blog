import React, {useState, useEffect} from 'react'
import { client } from './contentful/client';
import PostList from './components/postList-component/post-list.component';
import './App.css';

function App() {
  const [posts, setPosts]=useState( [] )

  useEffect(()=> {
    client.getEntries()
    .then((Response)=>{
      setPosts(Response.items)
      console.log(Response)
      
    })
  },[])
  console.log(posts)
  return (
    <div className="App">
      <div className='postList-con'><PostList posts={posts}/></div>
    </div>
  );
}

export default App;
