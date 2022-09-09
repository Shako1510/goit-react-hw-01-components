import Profile from './Profile'
import users from './users.json'

console.log(users)

export const App = () => {
  return (
    <div>
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        followers={users.stats.followers}
        views={users.stats.views}
        likes={users.stats.likes}
      />
    </div >
  );
};

// export default function App() {
//   return (
//     <div>
//       <Profile
//         username={users.username}
//         tag={users.tag}
//         location={users.location}
//         avatar={users.avatar}
//         stats={users.stats}
//       />
//     </div >
//   );
// };

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,

//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
