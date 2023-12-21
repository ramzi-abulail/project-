import logo from './logo.svg';
import './App.css';
import Profile from './JSX/Profile';
import Activity from './JSX/Activity';
import Skills from './JSX/Skills';
import Education from './JSX/Education';

function App() {
  return (
   <div className='bg-gray-100'>
    <Profile/>
    <Activity/>
    <Skills/>
    <Education/>
   </div>
  );
}

export default App;
