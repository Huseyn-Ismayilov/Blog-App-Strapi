import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import './App.css'
// Pages
import Home from './pages/Home/Home'
import Blogs from './pages/Blogs/Blogs'
import BlogsDetails from './pages/BlogDetails/BlogDetails'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
// Layout
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'

function App() {

    return (
        <Router>
            <Header
            // isMode={isMode}
            // theme={theme}
            />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/blogs' element={<Blogs />}></Route>
                <Route path='/blogs/:id' element={<BlogsDetails />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
