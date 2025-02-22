import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import JobPosting from './JobPostingForm/JobPosting.jsx';
import QuestionPage from './JobPostingForm/QuestionPage.jsx';
import QuillEditor from './JobPostingForm/Descriptor.jsx';
import Display from './JobPostingForm/Display.jsx';

import LocationSearch from './JobPostingForm/NewTest.jsx';


function App() {

  return (
    <main>
      <Router>
          <Routes>
            <Route exact path="/jobposting" element={<JobPosting />}></Route>
            <Route exact path="/descriptor" element={<QuillEditor />}></Route>
            <Route exact path="/questionpage" element={<QuestionPage />}></Route>
            <Route exact path="/display" element={<Display />}></Route>
          
            <Route exact path="/test2" element={<LocationSearch />}></Route>
          </Routes>
      </Router>
    </main>
   
  )
}

export default App
