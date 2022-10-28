import React from 'react'
import Comments from './Comments'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import App from './App'
import NewsPage from './NewsPage'
import LastStories from './LastStories'

function Navbar() {
  return (
    <Router>
      <ul className='navbar'>
      <li className='navbar-item'>
           <Link to="/newsPage">Home</Link> 
          </li>
        <li className='navbar-item'><a href='#'>News</a></li>
        <li className='navbar-item'>
           <Link to="/comments">Comments</Link> 
          </li>
        <li className='navbar-item'>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li className='navbar-item'>
        <Link to="/LastStories">Last Stories</Link>
        </li>
      </ul>
        <Routes>
        <Route path='/comments' element={<Comments />} />
        <Route path='/' element={<NewsPage />} />
        <Route path='/LastStories' element={<LastStories />} />
        {/* <Route path='/jobs' element={<Jobs />} /> */}
        {/* <Route path='/' element={<App />} /> */}

        </Routes>
    </Router>
  )
}

export default Navbar