import './App.css'
import Layout from './layout/layout.jsx'
import Experience from './pages/Experience.jsx'
import Profile from './pages/Profile.jsx'
import Skills from './pages/skills.jsx'

function App() {

  return (
    <Layout>
      <Profile />
      <Skills />
      <Experience />
    </Layout>
  )
}

export default App
