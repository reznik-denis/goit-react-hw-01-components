import './App.css';
import Profile from './Components/Profile/Profile';
import user from './Components/Profile/user.json';


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
    </div>
  );
};
