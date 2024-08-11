import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import JobPosting from './JobPostingForm/JobPosting.jsx';
import Editor from './JobPostingForm/Editor.jsx';
import Questionpage from './JobPostingForm/Questionpage.jsx';
import NewEditorAi from './JobPostingForm/NewEditorAi.jsx';
import NewApi from './JobPostingForm/NewApi.jsx';
import NewQuill from './JobPostingForm/NewQuill.jsx';
import TestPage from './JobPostingForm/TestPage.jsx';



function App() {

  return (
    <main>
      <Router>
        <Routes>
          <Route exact path="/jobposting" element={<JobPosting />}></Route>
          <Route exact path="/editor" element={<Editor />}></Route>
          <Route exact path="/questionpage" element={<Questionpage />}></Route>
          <Route exact path="/aieditor" element={<NewEditorAi />}></Route>
          <Route exact path="/newapi" element={<NewApi />}></Route>
          <Route exact path="/newquill" element={<NewQuill />}></Route>
          <Route exact path="/testpage" element={<TestPage />}></Route>
        </Routes>
      </Router>
    </main>
    
  )
}

export default App
