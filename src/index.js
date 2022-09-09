import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import App from 'components/App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// ReactDOM.render(App, document.querySelector("#root"));



// ReactDOM.render(
//   <Painting username={user.name} tag={user.tag} location={user.location}
//     stats={user.stats} />,
//   document.querySelector('#root')
// )


// <Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />