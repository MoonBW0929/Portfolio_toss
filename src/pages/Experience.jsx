import './page_styles.css'
import { useEffect, useState } from 'react'

// react icons
import { IoIosLink } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

export default function Experience() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      title: "웹 포트폴리오",
      date: "2026",
      tech: ["React", "Vite"],
      images: ["/assets/project1/project1_1.png", "/assets/project1/project1_2.png"],
      summary: "React 기술을 활용하여 포트폴리오를 보기 쉽게 정리하고, Vite를 사용해 편리한 개발 환경을 구축",
      background: [
        "과거 프로젝트들을 진행했을 때는 기획 후 시작한다는 것이 시간에 쫓기다가 개발을 진행하며 같이 정리하는 경우가 많았는데, 이번에는 프로젝트 기획을 시작으로 진행하였고 기획 내용대로 개발을 진행하는 편리함을 느꼈습니다. 하지만 개발 중 상세한 내용에서 고민한 부분이 많았기에 좀 더 자세하게 기획하는 게 낫지 않았을까 하는 아쉬움이 남았습니다.",
        "해당 프로젝트는 가장 익숙하고 보여줄 게 많다고 생각한 React를 활용하였습니다. 다른 JavaScript 기반의 기술보다 외적인 측면의 변화를 간단하게 사용할 수 있어 단순한 포트폴리오 정리이지만 제 나름대로 꾸밈을 쉽게 넣을 수 있었습니다.",
        "그리고 이번에 처음으로 Vite를 사용해 보았는데, 로컬에서 개발 서버로 활용해 즉각적인 변화를 확인할 수 있어 편리했고 최종 배포할 파일 또한 Vite를 통해 편리하게 생성할 수 있었습니다."
      ].join("\n\n"),
      link: ["https://example1.com"]
    },
    {
      title: "공공기물 파손 신고 플랫폼",
      date: "2025",
      tech: ["React-native", "FastAPI", "OracleDB", "Azure AI"],
      images: ["https://via.placeholder.com/300"],
      summary: "Description for Project 2. A simple website built with vanilla JavaScript and HTML.",
      link: []
    },
    {
      title: "React 프로젝트",
      date: "2025",
      tech: ["React"],
      images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
      summary: "Project 3 summary. Backend development with Python and Django framework.",
      link: ["https://github.com/example"]
    },
    {
      title: "JQeury 프로젝트",
      date: "2025",
      tech: ["JQeury", "Node.js"],
      images: ["https://via.placeholder.com/300"],
      summary: "Description for Project 4. Server-side application using Node.js and Express.",
      link: ["https://example.com", "https://another.com"]
    },
    {
      title: "알코올 센서 생산 UI",
      date: "2024",
      tech: ["Qt", "C++", "Embedded"],
      images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"],
      summary: "Project 5 summary. Frontend app with Vue.js and SCSS for styling.",
      link: []
    },
    {
      title: "기타 생산 UI",
      date: "2023",
      tech: ["Qt", "C++", "Embedded"],
      images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"],
      summary: "Project 5 summary. Frontend app with Vue.js and SCSS for styling.",
      link: []
    },
    {
      title: "환경 센서 Firmware",
      date: "2020 ~ 2024",
      tech: ["C", "Embedded"],
      images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"],
      summary: "환경 센서 펌웨어 개발",
      background: [
        "여러 환경 센서(먼지, CO2, 알코올 등등)의 펌웨어를 개발했습니다.",
        "관련 주요 업무",
        "- 신규 환경 센서 펌웨어 개발",
        "- 기존 센서 펌웨어 문제 해결 및 안정선 개선",
        "- 센서 테스트 및 리포트 작성"
      ].join("\n"),
      link: []
    }
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  // body scroll bar controll (hide)
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("scroll-bar-hide");
    }

    return () => {
      document.body.classList.remove("scroll-bar-hide");
    };
  }, [selectedProject]);

  return (
    <section id="experience" className="section">
      <div className="container sectionInner">
        <h1 className="sectionTitle">Experience</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-box">
              <div className="project-img-container">
                <img src={project.images[0]} alt={project.title} className="project-img" />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <p className="project-tech">{project.tech.join(', ')}</p>
              <button className="detail-btn" onClick={() => openModal(project)}>자세히 보기</button>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>×</button>

              {/* Image */}
              <div className="modal-image-wrapper">
                <button className="nav-btn prev-btn" onClick={prevImage} disabled={selectedProject.images.length <= 1}>‹</button>
                <div
                  className="modal-image-track"
                  style={{
                    transform: `translateX(-${currentImageIndex * 100}%)`
                  }}
                >
                  {selectedProject.images.map((img, i) => (
                    <img key={i} src={img} className="modal-img" />
                  ))}
                </div>
                <button className="nav-btn next-btn" onClick={nextImage} disabled={selectedProject.images.length <= 1}>›</button>
              </div>

              <h2 className="modal-title">{selectedProject.title}</h2>
              <p>{selectedProject.date} / {selectedProject.tech.join(',')}</p>

              {/* Summary */}
              <div className='modal-subTitle'>
                <FaPencilAlt />
                <h3>Summary</h3>
              </div>
              <p className="modal-summary">{selectedProject.summary}</p>

              {/* Background */}
              <div className='modal-subTitle'>
                <FaRegLightbulb />
                <h3>Background</h3>
              </div>
              <p className='modal-background' style={{ whiteSpace: "pre-line" }}>{selectedProject.background}</p>
              
              {/* Link */}
              <div className="modal-link">
                {selectedProject.link != null ? (
                  <>
                    <div className='modal-subTitle'>
                      <IoIosLink />
                      <h3>Link</h3>
                    </div>
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">{selectedProject.link}</a>
                  </>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}