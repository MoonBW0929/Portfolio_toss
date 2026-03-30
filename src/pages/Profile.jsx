import '../styles/profile_styles.css'

// react icons
import { FaUserCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

import { useEffect, useState } from 'react';

export default function Profile() {

  const words = [
    "사용자 행동을 이끄는",
    "데이터를 사용자 경험으로 연결하는",
    "흐름을 설계하는"
  ];
  const [index, setindex] = useState(0);

  // word change effect
  useEffect(() => {
    const timer = setInterval(() => {
      setindex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section id="profile" className="section">
      <div className="container">

        <div className='introBox'>
          <h1>안녕하세요,</h1>
          <div className='introWordBox'>{words[index]}</div>
          <h1>개발자 문병욱입니다</h1>
        </div>

        <div className="sectionTitleBox">
          <h1 className="sectionTitle">Profile</h1>
        </div>


        <div id='profileGrid'>

          <section id='pic'>
            <div id='img_pic'>
              <img src="/assets/profile_picture.jpg" alt="Profile Picture" />
            </div>
          </section>

          <section id='info'>
            <div className='subTitle'>인적사항</div>
            <div id='infoGrid'>
              <div className='infoGridItem'>
                <FaUserCircle className='icon'/>
                <span className='infoText'>문병욱</span>
              </div>
              <div className='infoGridItem'>
                <MdDateRange className='icon'/>
                <span className='infoText'>2001년 09월 29일</span>
              </div>
              <div className='infoGridItem'>
                <FaLocationDot className='icon'/>
                <span className='infoText'>서울특별시 강동구</span>
              </div>
              <div className='infoGridItem'>
                <IoCall className='icon'/>
                <span className='infoText'>010-6711-1606</span>
              </div>
              <div className='infoGridItem'>
                <IoIosMail className='icon'/>
                <span className='infoText'>ansquddnr4545@gmail.com</span>
              </div>
            </div>
          </section>

          <section>
            <div className='subTitle'>학력</div>
            <div className='subContent'>
              <div className='infoText'>한국공학대학교 졸업 (컴퓨터전자공학)</div>
            </div>
          </section>

          <section>
            <div className='subTitle'>자격증</div>
            <div className='subContent'>
              <div className='infoText'>정보처리기사</div>
              <div className='infoText'>데이터분석준전문가 (ADsP)</div>
              <div className='infoText'>AI-900 (Azure AI Fundamentals)</div>
            </div>
          </section>

        </div>
      </div>
    </section>
  )
}