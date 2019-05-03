import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment';
import ApprovalCard from './approvalCard';
//in the course, you use faker.js for generating fake data

const comments = [
  {author:'Juanjosé Tenorio',date:'Today at 5:00 pm',imgSource:'https://www.w3schools.com/howto/img_avatar.png',commentText:'Excellent reply.'},
  {author:'Daphne Bird',date:'Today at 5:00 pm',imgSource:'https://www.w3schools.com/howto/img_avatar.png',commentText:"I don't know about it."},
  {author:'Goku Jones',date:'Today at 5:00 pm',imgSource:'https://www.w3schools.com/howto/img_avatar.png',commentText:'Call me Kakarot'}
]

const App = ()=>{
  return (
    <div className="ui cards" style={{padding:10}}>
        {
          comments.map(comment=>
            <ApprovalCard>
              <Comment author={comment.author} date={comment.date} imgSource={comment.imgSource} commentText={comment.commentText}/>
            </ApprovalCard>
          )
        }
    </div>);
}

ReactDOM.render(<App />,document.querySelector('#root'));
