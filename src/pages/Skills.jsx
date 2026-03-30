import '../styles/skills_styles.css'
import { Icon } from '@iconify/react';

export default function Skills() {

  const allTechs = [
    "C", "C++", "Python", "JavaScript", "Java",
    "jQuery", "React", "React-native", "Vite",
    "Flask", "FastAPI", "Node.js",
    "OracleDB", "MongoDB", "DBeaver",
    "Azure", "Pytorch",
    "Qt", "Github", "Expo",
    "Firebase", "Arduino", "Embedded"
  ];

  // Logo name dict
  const skillIcons = {
    C: 'devicon:c',
    'C++': 'devicon:cplusplus',
    Python: 'devicon:python',
    JavaScript: 'devicon:javascript',
    Java: 'devicon:java',
    React: 'devicon:react',
    'React-native': 'devicon:react',
    Vite: 'devicon:vitejs',
    Flask: 'devicon:flask',
    FastAPI: 'devicon:fastapi',
    'Node.js': 'devicon:nodejs',
    OracleDB: 'devicon:oracle',
    MongoDB: 'devicon:mongodb',
    'Azure': 'devicon:azure',
    Pytorch: 'devicon:pytorch',
    Qt: 'devicon:qt',
    Github: "devicon:github",
    Expo: "devicon:expo",
    Arduino: "devicon:arduino",
    DBeaver: "devicon:dbeaver",
    Embedded: "devicon:embeddedc",
    jQuery: "devicon:jquery",
    Firebase: "devicon:firebase"
  };
  

  return (
    <section id="skills" className="section">
      <div className="container">

        <div className="sectionTitleBox">
          <h1 className="sectionTitle">Skills</h1>
          <p className="sectionDescription">
            문제를 정의하고 해결한 프로젝트입니다.
          </p>
        </div>

        <div className="skillsBox">
          <div className='subTitle'>My Skills & Technologies</div>
          <div className="skillsGrid">
            {allTechs.map((tech) => (
              <div key={tech} className="skillItem">
                <Icon className="Icon" icon={skillIcons[tech]} />
                <span className="skillLabel">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}