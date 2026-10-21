import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

import Profile from './Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friendlist/FriendList';
import TransactionHistory from './TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />
    </>
  );
}
