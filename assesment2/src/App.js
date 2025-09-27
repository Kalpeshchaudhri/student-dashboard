import logo from './logo.svg';
import './App.css';
import   '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import   '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navbar.jsx';
import Header from '../src/components/Header.jsx'
import Announcement from '../src/components/Announcement.jsx'
import StudentCard from '../src/components/StudentCard.jsx'
import StudentList from '../src/components/StudentList.jsx'
import Footer from '../src/components/Footer.jsx'


function App() {
  return (
  <>
  <Navbar/>
  <Header/>
  <Announcement/>
  <StudentCard/>
  <StudentList/>
  <Footer/>

  </>
  );
}

export default App;
