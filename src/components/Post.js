import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'

function Post() {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar
          className='post__avatar'
          alt="ReyanshKumar"
          src="/static/images/avatar/1.jpg"
        />
        <h3 className='username'>Username</h3>
      </div>

      <img className='post__image' src='https://www.vanilla-noir.com/static/bc08342f6d2157e9b267996403be42c7/acebf/react-3.png' alt='post__bg' />
      
      <h4 className='post__text'><strong>ReyanshProProgrammer:</strong> WOW day three of live sessions</h4>
    </div>
  )
}

export default Post