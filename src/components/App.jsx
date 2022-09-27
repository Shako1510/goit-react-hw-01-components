import Profile from './profile/Profile'
import users from './database/users.json'
import StatisticsSection from './statisticsSection/StatisticsSection'
import data from './database/data.json'
import FriendList from "./friendList/FriendList";
import friends from "./database/friends.json";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import transactions from "./database/transactions.json";


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

      <StatisticsSection title="Upload stats" stats={data} />

      <FriendList friends={friends} />;

      <TransactionHistory items={transactions} />;
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
