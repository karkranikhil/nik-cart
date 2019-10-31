import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'

// const HomePage=props=> {
//   return (
//     <div>
//       <Link to="/topics">Topic</Link>
//       <button onClick={()=>props.history.push('/topics')}>Topics</button>
//       <h1>Home Page</h1>
//     </div>
//   );
// }
// const TopicList=props=> {
//   return (
//     <div>
//       <h1>Topic List</h1>
//       <Link to={`${props.match.url}/13`}>To Topic 13 </Link>
//     </div>
//   );
// }
// const Topics=props=> {
//   return (
//     <div>
//       <h1>Topics Page</h1>
//     </div>
//   );
// }
const HatsPage=props=> {
  console.log(props)
  return (
    <div>
      <h1>Topics Page</h1>
    </div>
  );
}
 

const App=()=> {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/hats" component={HatsPage}/>
      {/* <Route exact path="/topics/:topicId" component={TopicList}/> */}
    </div>
  );
}

export default App;
