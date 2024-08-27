import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import JobPosting from './JobPostingForm/JobPosting.jsx';
import QuestionPage from './JobPostingForm/QuestionPage.jsx';
import QuillEditor from './JobPostingForm/Descriptor.jsx';
import Test1 from './JobPostingForm/Test1.jsx';
import Test2 from './JobPostingForm/Test2.jsx';
import Display from './JobPostingForm/Display.jsx';


function App() {

  return (
    <main>
      <Router>
          <Routes>
            <Route exact path="/jobposting" element={<JobPosting />}></Route>
            <Route exact path="/descriptor" element={<QuillEditor />}></Route>
            <Route exact path="/questionpage" element={<QuestionPage />}></Route>
            <Route exact path="/test1" element={<Test1 />}></Route>
            <Route exact path="/test2" element={<Test2 />}></Route>
            <Route exact path="/display" element={<Display />}></Route>
          </Routes>
      </Router>
    </main>
   
  )
}

export default App
