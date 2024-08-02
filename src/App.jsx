import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import JobPosting from './JobPostingForm/JobPosting.jsx';
import ScreeningQuestions from './JobPostingForm/ScreeningQuestions.jsx';
import Textfield from './JobPostingForm/Textfield.jsx';
import Test from './JobPostingForm/Test.jsx';
import Textshowing from './JobPostingForm/Textshowing.jsx';

function App() {

  return (
    <main>
      <Router>
        <Routes>
          <Route exact path="/jobposting" element={<JobPosting />}></Route>
          <Route exact path="/screening" element={<ScreeningQuestions />}></Route>
          <Route exact path="/textfield" element={<Textfield />}></Route>
          <Route exact path="/test" element={<Test/>}></Route>
          <Route exact path="/test1" element={<Textshowing />}></Route>
        </Routes>
      </Router>
    </main>
    
  )
}

export default App
