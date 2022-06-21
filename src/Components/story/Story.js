import React from 'react'
import "./story.css";
import story from "../../assets/storygif.gif";

const Story = () => {
  return (
    <div className='story'>
        <div className='story_img'>
            <img src={story} alt='story'/>
        </div>
        <div className='story_content'>
            story
        </div>
    </div>
  )
}

export default Story;

