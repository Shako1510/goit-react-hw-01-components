import Profile from './profile/Profile'
import users from './database/users.json'
import Statistics from './statistics/Statistics'
import data from './database/data.json'


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

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

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
