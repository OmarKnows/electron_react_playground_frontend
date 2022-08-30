import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from 'screens/HomeScreen';
import LoginScreen from 'screens/LoginScreen';
import RegisterScreen from 'screens/RegisterScreen';
import SearchScreen from 'screens/SearchScreen';
import LogScreen from 'screens/LogScreen';
import DocScreen from 'screens/DocScreen';
import Header from 'components/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/log" element={<LogScreen />} />
        <Route path="/doc" element={<DocScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
