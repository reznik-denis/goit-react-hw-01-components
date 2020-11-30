import './App.css';

import Profile from './Components/Profile/Profile';
import user from './Components/Profile/user.json';

import Conteiner from './Components/Statistics/Container';
import StatisticList from './Components/Statistics/StatisticList';
import stats from './Components/Statistics/statistical-data.json';

import FriendList from './Components/FriendList/FriendList';
import friends from './Components/FriendList/friends.json';

export default function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Conteiner title="upload stats">
        <StatisticList stats={stats}></StatisticList>
      </Conteiner>
      <FriendList friends={ friends }/>
    </div>
  );
};
