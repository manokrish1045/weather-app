

import Home from "./Home.js";
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />

        {/* <Route path="/" element={<Home />} /> */}
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
        <Route path='/home' element={<Home/>} />

      </Routes>

    </div>
  )
}

export default App;



{/* <div>
  <Container>
    <Col className="text-center">
      <h1>React Authentication Tutorial</h1>

      <section id="navigation">
        <a href="/">Home</a>
        <a href="/home">Register</a>
      </section>
    </Col>
    <Routes>

      <Route path="/" element={<Account />} />
      <Route path="/home" element={<Home />} />

    </Routes>
  </Container>
</div> */}