import './App.css';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import { Routes,Route } from 'react-router-dom';
import { useState , useEffect} from 'react';
import axios from "axios";
import Posts from './components/Posts';
import Gallery from './components/Gallery';
import Todo from './components/Todo';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://panorbit.in/api/users.json");
      setUsers(response.data.users);
      console.log({ response });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    
    <div className="App">
    <Routes>
    <Route path="/" element={<LandingPage users={users}/>} />
    <Route path="/profile/:id" element={<ProfilePage users={users}/>} />
    <Route path="/posts" element={<Posts  users={users}/>}/>
    <Route path='/gallery' element={<Gallery  users={users}/>}/>
    <Route path='/todo' element={<Todo/>}/>
  </Routes>
    </div>
  );
}

export default App;
