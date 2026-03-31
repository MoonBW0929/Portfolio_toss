import './App.css'
import Layout from './layout/Layout.jsx'
import Profile from './pages/Profile.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'

function App() {

  return (
    <Layout>
      <Profile />
      <Skills />
      <Projects />
    </Layout>
  )
}

export default App
