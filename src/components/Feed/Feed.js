import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
export default function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic='https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg'
                message='Wow this works'
                timestamp='This is the timestamp'
                username='Aldrin'
                image='https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg'
            />
            <Post
                profilePic='https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg'
                message='Wow this works'
                timestamp='This is the timestamp'
                username='Aldrin'
                image='https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg'
            />


        </div>
    )
}
