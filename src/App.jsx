import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import JobPosting from './JobPostingForm/JobPosting.jsx';
import ScreeningQuestions from './JobPostingForm/ScreeningQuestions.jsx'

function App() {

  return (
    <main>
      <Router>
        <Routes>
          <Route exact path="/JobPosting" element={<JobPosting />}></Route>
          <Route exact path="/Screening" element={<ScreeningQuestions />}></Route>
        </Routes>
      </Router>
    </main>
    
  )
}

export default App
