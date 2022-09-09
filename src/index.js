import React from 'react';

import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// {/* < div class="profile" >
//   <div class="description">
//     <img
//       src="{user.avatar}"
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">{user.username}</p>
//     <p class="tag">{user.tag}</p>
//     <p class="location">{user.location}</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">{user.stats.followers}</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">{user.stats.views}</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">{user.stats.likes}</span>
//     </li>
//   </ul>
// </div >
//  */}
