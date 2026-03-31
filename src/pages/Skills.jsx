import '../styles/skills_styles.css'
import { Icon } from '@iconify/react';

export default function Skills() {

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
    DBeaver: "devicon:dbeaver",
    Embedded: "devicon:embeddedc",
    jQuery: "devicon:jquery",
    Firebase: "devicon:firebase"
  };

  const skillGroups = [
    {
      title: "Language",
      description: "기본기와 문제 해결에 활용한 언어입니다.",
      skills: ["C", "C++", "Python", "JavaScript", "Java"]
    },
    {
      title: "Frontend",
      description: "사용자 화면과 인터랙션 구현에 사용했습니다.",
      skills: ["jQuery", "React", "React-native"]
    },
    {
      title: "Backend",
      description: "서버, API, 데이터 연동에 활용했습니다.",
      skills: ["Flask", "FastAPI", "Node.js", "Firebase"]
    },
    {
      title: "Database / Cloud / AI",
      description: "데이터 저장, 관리, 클라우드 및 AI 관련 기술입니다.",
      skills: ["OracleDB", "MongoDB", "DBeaver", "Azure", "Pytorch"]
    },
    {
      title: "Tools / Others",
      description: "개발 과정에서 함께 사용한 도구 및 기타 기술입니다.",
      skills: ["Qt", "Github", "Expo", "Vite", "Embedded"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container contentInner">

        <div className="sectionTitleBox">
          <h1 className="sectionTitle">Skills</h1>
          <p className="sectionDescription">
            문제를 정의하고 해결하는 과정에서 사용한 기술들입니다.
          </p>
        </div>

        <div className="skillsSummary">
          <div className="skillsSummaryCard">
            <strong>{skillGroups.length}</strong>
            <span>Skill Groups</span>
          </div>
          <div className="skillsSummaryCard">
            <strong>
              {skillGroups.reduce((acc, cur) => acc + cur.skills.length, 0)}
            </strong>
            <span>Technologies</span>
          </div>
        </div>

        <div className="skillsLayout">
          {skillGroups.map((group) => (
            <div key={group.title} className="skillsBox">
              <div className='subTitle'>{group.title}</div>
              <p className="skillsGroupDescription">{group.description}</p>

              <div className="skillsGrid">
                {group.skills.map((tech) => (
                  <div key={tech} className="skillItem">
                    <Icon className="Icon" icon={skillIcons[tech]} />
                    <span className="skillLabel">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}