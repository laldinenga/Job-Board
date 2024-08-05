import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import JobPosting from './JobPostingForm/JobPosting.jsx';
import ScreeningQuestions from './JobPostingForm/ScreeningQuestions.jsx';
import Textfield from './JobPostingForm/Textfield.jsx';
import Another from './JobPostingForm/Another.jsx';
import Maineditor from './JobPostingForm/Maineditor.jsx';
import Trial from './JobPostingForm/Trial.jsx';


function App() {

  return (
    <main>
      <Router>
        <Routes>
          <Route exact path="/another" element={<Another />}></Route>
          <Route exact path="/jobposting" element={<JobPosting />}></Route>
          <Route exact path="/screening" element={<ScreeningQuestions />}></Route>
          <Route exact path="/textfield" element={<Textfield />}></Route>
          <Route exact path="/editor" element={<Maineditor />}></Route>
          <Route exact path="/trial" element={<Trial />}></Route>
        </Routes>
      </Router>
    </main>
    
  )
}

export default App
