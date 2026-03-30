import '../styles/projects_styles.css'
import { useState } from 'react'

// react icons
import { IoIosLink } from "react-icons/io";
import { MdOutlineReportProblem } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
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
    problem: [
      '기존 공공기물 신고 시스템은 신고 접수 이후 정보가 사용자에게 공유되지 않아, 이미 파손된 시설을 다른 시민이 인지하지 못한 채 이용하면서 2차 안전사고로 이어질 수 있는 구조적 문제가 있었습니다.\n',
      '단순히 신고를 처리하는 시스템이 아니라,',
      '위험 정보를 빠르게 전달하고 사용자 행동을 변화시키는 구조가 필요하다고 판단했습니다.'
    ].join('\n'),
    approach: [
      '신고를 단순히 접수로 끝내지 않고, 사용자 간 정보를 공유하는 구조로 확장했습니다.',
      [
        '지도 기반으로 주변 파손 정보를 시각적으로 확인할 수 있도록 구성',
        '사용자 위치를 기반으로 위험 정보를 전달하는 알림 시스템 설계',
        '순위표 및 보상 요소를 도입하여 사용자 참여를 유도'
      ],
      '이를 통해 신고 → 공유 → 예방으로 이어지는 서비스 흐름을 설계했습니다.'
    ],
    implementation: [
      'React Native 기반 모바일 화면 구성',
      '신고 데이터 등록, 조회, 사용자 노출까지의 데이터 흐름 설계',
      '지도 기반으로 주변 신고 내역을 조회할 수 있는 인터페이스 설계',
      '사용자 참여 횟수를 반영한 순위표 시스템 구현',
    ],
    deepDive: {
      title: '알림 시스템 설계',
      sections: [
        {
          subtitle: '문제 상황',
          content: [
            '사용자가 파손된 공공기물을 신고하더라도 해당 정보가 다른 사용자에게 즉시 전달되지 않아, 이미 파손된 시설을 인지하지 못한 채 이용하면서 2차 안전사고로 이어질 수 있는 문제가 있었습니다.',
          ],
        },
        {
          subtitle: '문제 원인',
          content: [
            '기존 시스템은 신고를 “접수”하는 기능에 집중되어 있었고, 사용자에게 필요한 정보를 적절한 시점에 전달하는 구조가 부족했습니다.',
            '또한 알림을 통해 서비스를 진입하더라도, 사용자가 해당 정보를 바로 확인하지 못하면 알림의 효과가 크게 떨어지는 문제가 있었습니다.',
          ],
        },
        {
          subtitle: '해결 방법',
          content: [
            '위치 기반 알림 구조 설계: 사용자 위치 기준으로 일정 거리 내 사용자에게만 알림 전달',
            '알림 이후 사용자 흐름 설계: 알림 클릭 시 지도 화면으로 이동 후 해당 신고 중심으로 화면 구성',
            '상세 정보 연결 구조 구현: 사진, 위치, 등록 시간 등 즉시 확인 가능하도록 구성',
            'Firebase Cloud Messaging을 활용한 알림 시스템 구현',
          ],
        },
      ],
    },
    result: [
      '사용자에게 필요한 정보만 선택적으로 전달하고,',
      '알림 이후에도 즉시 해당 정보를 확인할 수 있는 흐름을 구성함으로써 단순 알림 기능이 아닌 행동으로 이어지는 정보 전달 구조를 설계했습니다.\n',
      '이를 통해 사용자가 주변 위험 정보를 빠르게 인지하고 대응할 수 있는 사용자 경험을 제공할 수 있었습니다.'
    ].join('\n'),
    learned: [
      '알림 기능은 단순히 정보를 전달하는 것이 아니라,',
      '알림 이후 사용자가 어떤 흐름으로 행동하게 되는지까지 함께 설계해야 한다는 것을 깨달았습니다.\n',
      '특히 “알림 → 정보 확인 → 상황 인지”까지 이어지는 전체 흐름이 자연스럽게 연결되어야 비로소 사용자 경험이 완성된다는 점을 경험했습니다.'
    ].join('\n'),
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/bamby33/MS_Project_Ainuri',
      },
    ],      
    notionLink: '',
  },
  {
    title: '센서 출하 UI 개발',
    period: '2024',
    oneLiner:
      '센서 출하 과정에서 발생한 불량 추적 문제를 해결하기 위한 데이터 관리 UI',
    role: [
      '기존 프로토타입 기반 UI 전체 재구성',
      '작업 흐름에 맞는 화면 우선순위 설계',
      '생산용 화면 구현',
    ],
    tech: ['Qt', 'C++'],
    images: [
      {
        src: '/assets/project2/project2_1.png',
        title: '01. 생산 출하 UI',
        caption: '불필요한 요소는 제외하고 단순한 인터페이스를 구성하였습니다.',
      },
    ],
    problem:[
      '초기 생산 과정에서 납품된 센서 중 일부에서 감도 불량 이슈가 발생했으나,',
      '해당 센서의 생산 이력과 검사 데이터를 추적하기 어려워 문제 원인을 파악하는 데 시간이 소요되는 문제가 있었습니다.\n',
      '특히 어떤 센서가 언제, 어떤 기준으로 합격 판정을 받았는지 확인할 수 있는 구조가 부족하여 문제 발생 시 대응이 어려운 상황이었습니다.',
    ].join('\n'),
    approach: [
      '센서의 생산 및 검사 데이터를 추적할 수 있도록,',
      '데이터 기록과 조회를 중심으로 한 UI 구조를 설계했습니다.',
      [
        '센서 식별 번호와 검사 데이터를 매칭하여 저장',
        '출하 전 불량 여부를 확인할 수 있는 검사 기능 구성',
        '작업자가 출하 시 필요한 정보를 빠르게 확인할 수 있도록 UI 단순화'
      ]
    ],
    implementation: [
      '센서 데이터 추적 구조 설계',
      '직관적인 상태 표현 방식 적용',
    ],
    result: [
      '센서의 생산 및 검사 이력을 추적할 수 있는 구조를 구축함으로써,',
      '문제 발생 시 원인 파악이 가능해졌으며 데이터 기반으로 품질을 관리할 수 있는 환경을 만들었습니다.\n',
      '또한 센서 데이터를 직관적으로 확인할 수 있도록 UI를 개선하여 작업자의 판단 속도와 정확도를 향상시킬 수 있었습니다.'
    ].join('\n'),
    learned: [
      'UI는 단순히 데이터를 보여주는 것이 아니라,',
      '사용자가 빠르게 판단하고 올바른 행동을 할 수 있도록 돕는 도구라는 것을 경험했습니다.',
      '특히 여러 데이터를 동시에 다루는 환경에서는 정보를 어떻게 구조화하고 표현하느냐가 사용자 경험에 큰 영향을 준다는 것을 깨달았습니다.'
    ].join('\n'),
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

        {/* Project image */}
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

        {/* Summary */}
        <div className="project-summary-box">
          <p className="project-period">{project.period}</p>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-one-liner">{project.oneLiner}</p>

          {/* tech list */}
          <div className="project-tech-list">
            {project.tech.map((item) => (
              <span key={item} className="project-tech-tag">
                {item}
              </span>
            ))}
          </div>

          {/* role box */}
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

      {/* Detail */}
      <div className="project-detail-grid">

        {/* problem */}
        <article className="project-detail-card">
          <div className="project-detail-title">
            <MdOutlineReportProblem />
            <h3>Problem</h3>
          </div>
          <p style={{ whiteSpace: "pre-line" }}>{project.problem}</p>
        </article>

        {/* aproach */}
        <article className="project-detail-card">
          <div className="project-detail-title">
            <FaPencilAlt />
            <h3>Approach</h3>
          </div>
          <div>
            {project.approach.map((item, idx) => {
              if(Array.isArray(item)){
                return (
                  <ul key={idx}>
                    {item.map((subItem, subIdx) => (
                      <li key={subIdx}>{subItem}</li>
                    ))}
                  </ul>
                );
              }

              return <p key={idx}>{item}</p>;
            })}
          </div>
        </article>

        {/* implementation */}
        <article className="project-detail-card project-detail-card-wide">
          <div className="project-detail-title">
            <FaRegLightbulb />
            <h3>Implementation</h3>
          </div>
          <ul>
            {project.implementation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      {/* deep dive */}
      {project.deepDive && (
        <section className="project-deepdive">
          <h2 className="deepdive-title">
            Deep Dive - {project.deepDive.title}
          </h2>

          <div className="deepdive-content">
            {project.deepDive.sections.map((section) => (
              <div key={section.subtitle} className="deepdive-section">
                <h3 className="deepdive-subtitle">{section.subtitle}</h3>

                <ul>
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* result */}
      <article className="project-detail-card project-result-card">
        <div className="project-detail-title">
          <h3>Result</h3>
        </div>
        <p style={{ whiteSpace: "pre-line" }}>{project.result}</p>
      </article>

      {/* learned */}
      <article className="project-detail-card project-learned-card">
        <div className="project-detail-title">
          <h3>Learned</h3>
        </div>
        <p style={{ whiteSpace: "pre-line" }}>{project.learned}</p>
      </article>

      {/* Link */}
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

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container contentInner">

        <div className="sectionTitleBox">
          <h1 className='sectionTitle'>Selected Projects</h1>
          <p className="sectionDescription">
            문제를 정의하고 해결한 프로젝트입니다.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <ProjectSection key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}