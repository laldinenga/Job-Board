import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import JobPosting from './JobPostingForm/JobPosting.jsx';
import Editor from './JobPostingForm/Editor.jsx';
import QuestionPage from './JobPostingForm/QuestionPage.jsx';


function App() {

  return (
    <main>
      <Router>
        <Routes>
          <Route exact path="/jobposting" element={<JobPosting />}></Route>
          <Route exact path="/editor" element={<Editor />}></Route>
          <Route exact path="/questionpage" element={<QuestionPage />}></Route>
        </Routes>
      </Router>
    </main>
    
  )
}

export default App
