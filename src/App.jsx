import { Route, Routes } from 'react-router-dom'
import './App.css'
import Intro from './components/Intro'
import Home from './components/Home'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Intro key={"intro"}/>}/>
      <Route path='/home' element={<Home key={"home"}/>}/>
    </Routes>
    </>
  )
}

export default App
