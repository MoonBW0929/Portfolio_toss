import './page_styles.css'
import { useState } from 'react'

// react icons
import { IoIosLink } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title: '공공기물 파손 신고 플랫폼',
    period: '2025',
    oneLiner:
      '시민 간 신고 정보를 공유하여 공공기물 파손으로 인한 안전사고를 사전에 예방하는 모바일 서비스',
    role: [
      '전체적인 UI 디자인',
      '화면 구조 설계',
      '사용자 신고 흐름 설계',
    ],
    tech: ['React Native', "Expo", 'FastAPI', 'OracleDB', 'Azure'],
    images: [
      {
        src: '/assets/project1/project1_1.png',
        title: '01. 신규 신고 등록',
        caption:
          '사진, 위치, 상세 내용을 입력해 파손된 공공기물을 직접 등록할 수 있도록 설계했습니다.',
      },
      {
        src: '/assets/project1/project1_2.png',
        title: '02. 신고 정보 공유 및 지도 조회',
        caption:
          '새로운 신고가 등록되면 알림으로 공유하고, 지도에서 주변 파손 위치와 상세 신고 내역을 바로 확인할 수 있도록 구성했습니다.',
      },
      {
        src: '/assets/project1/project1_3.png',
        title: '03. 참여 이력 및 순위 확인',
        caption:
          '사용자는 본인의 신고 내역과 처리 상태를 다시 확인할 수 있고, 순위표를 통해 참여 결과를 직관적으로 확인할 수 있도록 했습니다.',
      },
    ],
    problem:
      '기존 공공기물 신고 시스템은 신고 이후 정보가 공유되지 않아, 이미 파손된 시설을 다른 시민이 인지하지 못하고 이용하면서 2차 안전사고로 이어질 수 있는 문제가 있다고 판단했습니다.',
    approach:
      '신고를 단순히 접수로 끝내지 않고, 사용자 간 정보를 공유하는 구조로 확장했습니다. 지도와 알림을 통해 주변 파손 정보를 실시간으로 확인할 수 있도록 하고, 순위표 및 보상 요소를 도입하여 시민 참여를 유도했습니다.',
    implementation: [
      'React Native 기반 모바일 화면 구성',
      '사용자 신고 등록 시 주변 사용자에게 알림 전송 기능 구현',
      '지도 기반으로 주변 신고 내역을 조회할 수 있는 인터페이스 설계',
      '사용자 참여 횟수를 반영한 순위표 시스템 구현',
    ],
    result:
      '신고를 “접수”에서 끝내는 것이 아니라 “공유”와 “예방”까지 확장하면서, 사용자 참여를 유도하는 구조 설계의 중요성을 경험했습니다. 또한 단순 기능 구현보다 서비스의 목적에 맞는 흐름을 설계하는 것이 더 중요하다는 것을 배웠습니다.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/bamby33/MS_Project_Ainuri',
      },
    ],      
    notionLink: '',
  },
  {
    title: '생산 UI 개선 프로젝트',
    period: '2023 - 2024',
    oneLiner:
      '센서 생산 과정에서 작업자가 데이터를 더 빠르고 정확하게 확인할 수 있도록 생산용 UI를 설계하고 구현한 실무 프로젝트',
    role: [
      '기존 프로토타입 기반 UI 전체 재구성',
      '작업 흐름에 맞는 화면 우선순위 설계',
      '생산용 화면 구현',
    ],
    tech: ['Qt', 'C++', 'Embedded'],
    images: ['/assets/project5/project5_main.png'],
    problem:
      '생산 현장에서는 반복 입력과 상태 확인, 측정 결과 검토가 자주 일어나기 때문에 화면이 복잡하면 작업 효율과 정확도가 모두 떨어질 수 있었습니다.',
    approach:
      '작업자가 자주 확인하는 정보와 즉시 수행해야 하는 동작을 중심으로 화면 우선순위를 다시 정리하고, 한 화면 안에서 빠르게 판단할 수 있는 구조를 만드는 데 집중했습니다.',
    implementation: [
      '기존 프로토타입을 바탕으로 실제 작업 흐름에 맞게 UI 재구성',
      '생산 단계별 핵심 정보가 분산되지 않도록 레이아웃 정리',
      '반복적으로 사용하는 입력과 확인 동선을 단순화',
      '실사용 환경에서 빠른 판단이 가능하도록 화면 구성 개선',
    ],
    result:
      '실무에서는 화려한 화면보다 빠른 판단과 정확한 입력이 더 중요하다는 점을 경험했고, 사용자 맥락에 맞는 UI 설계의 중요성을 체감했습니다.',
    links: [],
    notionLink: '',
  },
]

function ProjectSection({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="project-section">
      <div className="project-hero">

        <div className='project-image-total-box'>
          <div className="project-image-caption-box">
            <p className="project-image-caption-title">
              {project.images[currentImageIndex].title}
            </p>
            <p className="project-image-caption-text">
              {project.images[currentImageIndex].caption}
            </p>
          </div>

          <div className="project-image-box">
            <img 
              src={project.images[currentImageIndex]["src"]}
              alt={project.title} 
              className="project-image" 
            />
            {project.images.length > 1 && (
              <>
                <button className="carousel-button prev" onClick={prevImage}>
                  <FaChevronLeft />
                </button>
                <button className="carousel-button next" onClick={nextImage}>
                  <FaChevronRight />
                </button>
                <div className="carousel-indicators">
                  {project.images.map((_, index) => (
                    <span 
                      key={index} 
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    ></span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="project-summary-box">
          <p className="project-period">{project.period}</p>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-one-liner">{project.oneLiner}</p>

          <div className="project-tech-list">
            {project.tech.map((item) => (
              <span key={item} className="project-tech-tag">
                {item}
              </span>
            ))}
          </div>

          <div className="project-role-box">
            <h3>Role</h3>
            <ul>
              {project.role.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="project-detail-grid">
        <article className="project-detail-card">
          <div className="project-detail-title">
            <FaRegLightbulb />
            <h3>Problem</h3>
          </div>
          <p>{project.problem}</p>
        </article>

        <article className="project-detail-card">
          <div className="project-detail-title">
            <FaPencilAlt />
            <h3>Approach</h3>
          </div>
          <p>{project.approach}</p>
        </article>

        <article className="project-detail-card project-detail-card-wide">
          <div className="project-detail-title">
            <FaPencilAlt />
            <h3>Implementation</h3>
          </div>
          <ul>
            {project.implementation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="project-detail-card">
          <div className="project-detail-title">
            <FaRegLightbulb />
            <h3>Result</h3>
          </div>
          <p>{project.result}</p>
        </article>
      </div>

      <div className="project-link-row">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="project-link-button"
          >
            <IoIosLink />
            <span>{link.label}</span>
          </a>
        ))}

        {project.notionLink && (
          <a
            href={project.notionLink}
            target="_blank"
            rel="noreferrer"
            className="project-link-button secondary"
          >
            <IoIosLink />
            <span>Design Note</span>
          </a>
        )}
      </div>
    </section>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="page-title-box">
        <h1>핵심 프로젝트</h1>
        <p className="page-description">
          프로젝트 수를 늘리기보다, 문제를 어떻게 정의하고 사용자 경험으로
          풀어냈는지 보여주는 데 집중했습니다.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectSection key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}