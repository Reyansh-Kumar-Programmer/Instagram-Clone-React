import './App.css';
import Post from './components/Post';
import "./assets/fonts/SFPRODISPLAYREGULAR.OTF"
import React, { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "FreeCodeCamp",
      caption: "WOW it works",
      imageUrl: "https://camo.githubusercontent.com/d069971a0af4d9e393066dc77ced000cff23a1f6bbfbb9e7704a870192a926ca/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f66726565636f646563616d702f776964652d736f6369616c2d62616e6e65722e706e67"
    },
    {
      username: "RafehQazi",
      caption: "We are React Dev",
      imageUrl: "https://i.ytimg.com/vi/572pHc56Ang/maxresdefault.jpg"
    },
    {
      username: "ReyanshProProgrammer",
      caption: "Reyansh Codes the Uniswap Clone",
      imageUrl: "https://assets.website-files.com/6245dcc971d30346418991c5/6348751632bfd5142bbb090c_WhatIsUNI.jpg"
    }
  ]);

  return (
    <div className="App">
      <div className='app__header'>
        <img 
          className='app__headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt='Instgaram Logo'
        />
      </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
