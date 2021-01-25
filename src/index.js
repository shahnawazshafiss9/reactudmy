import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (<div className="ui container comments">
    <ApprovalCard>
      <CommentDetails author="Shahnawaz Alam" />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetails author="Sher Singh" />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetails author="Soni Priya" />
    </ApprovalCard>
  </div>)
}
ReactDOM.render(<App />, document.querySelector('#root'));