import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import './App.css'
import JobPosting from './JobPostingForm/JobPosting.jsx'

function App() {

  return (
    <Router>
      <JobPosting />
    </Router>
    
  )
}

export default App
