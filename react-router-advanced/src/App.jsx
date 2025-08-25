import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      return (
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
                 <Route path="/profile/*" element={<Profile />} />
                 <Route path="/blog/:postId" element={<BlogPost />} />
                  <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
                  <Route path="/login" element={<Login />} />
                   <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
           </Router>
  );

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
