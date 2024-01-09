import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import './App.css';

import NavBar from "./component/common/NavBar.js";
import StudentsView from './component/student/StudentsView';
import Home from "./Home.js";
import AddStudent from "./component/student/AddStudent.js";
import EditStudent from "./component/student/EditStudent.js";
import StudentPofile from "./component/student/StudentProfile.js";


function App() {
  return (
    <main className="container mt-5">
   
    
    
    <Router>
    <NavBar></NavBar>
    
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/view-students" element={<StudentsView/>}></Route>
        <Route exact path="/add-students" element={<AddStudent/>}></Route>
        <Route exact path="/edit-student/:id" element={<EditStudent/>}></Route>
        <Route exact path="/student-profile/:id" element={<StudentPofile/>}></Route>
      </Routes>
    </Router>

     
    </main>
  );
}

export default App;
