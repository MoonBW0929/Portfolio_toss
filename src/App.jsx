import './App.css'
import Layout from './layout/layout.jsx'
import Contact from './pages/Contact.jsx'
import Experience from './pages/Experience.jsx'
import Profile from './pages/Profile.jsx'
import Skills from './pages/skills.jsx'

function App() {

  return (
    <Layout>
      <Profile />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default App
