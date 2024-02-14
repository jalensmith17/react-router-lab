import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Nav from './components/Nav/Nav'



export default function App(){
    return (
        <div className='App'>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    )
}