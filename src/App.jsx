import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import JobPosting from './JobPostingForm/JobPosting.jsx';
import QuestionPage from './JobPostingForm/QuestionPage.jsx';
import QuillEditor from './JobPostingForm/Descriptor.jsx';
import ChildComponent from './JobPostingForm/Test.jsx';
import QuillEditors from './JobPostingForm/NewDescriptor.jsx';
import { FormProvider } from './JobPostingForm/FormContext.jsx';
import ErrorBoundary from './JobPostingForm/ErrorBoundary'; 

function App() {

  return (
    <main>

      <Router>
        <FormProvider>
        <ErrorBoundary>
          <Routes>
            <Route exact path="/jobposting" element={<JobPosting />}></Route>
            <Route exact path="/descriptor" element={<QuillEditor />}></Route>
            <Route exact path="/questionpage" element={<QuestionPage />}></Route>
            <Route exact path="/test" element={<ChildComponent />}></Route>
            <Route exact path="/test1" element={<QuillEditors />}></Route>
          </Routes>
          </ErrorBoundary>
        </FormProvider>
      </Router>
    </main>
    
  )
}

export default App
