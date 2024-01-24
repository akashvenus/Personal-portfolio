import './Home.css';
import Header from "./components/Header.jsx";
import Akash from "./assets/akash-02.png";
import Outsystems from "./assets/outsystems.png"
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RedeemIcon from '@mui/icons-material/Redeem';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {useState , useRef} from "react";
import ProjectCard from './components/ProjectCard';
import weather from "./assets/weather.png"
import market from "./assets/market.png";
import yoga from "./assets/yoga.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArticleIcon from '@mui/icons-material/Article';
import Tooltip from '@mui/material/Tooltip';
import Resume from "./assets/Resume_Web-dev.pdf"

function App() {

  const [about,SetAbout] = useState("");
  const [counterOn,setCounterOn] = useState(false);
  const tabContainer = useRef();

  const images = [
    {
      id: 1,
      content:"Weather app",
      image: weather,
      link: "https://cozyweatherapp.netlify.app/",
      desc: "A simple weather application using React that fetches weather from openweather api and stores data in local storage"
    },
    {
      id: 2,
      content:"E-market",
      image: market,
      link: "https://e-confectionary-market.netlify.app/",
      desc: "Front end project using React router for page navigation and google auth for handling login and signup functionality"
    },
    {
      id: 3,
      content:"Yoga landing page",
      image: yoga,
      link: "https://yoganese.netlify.app/",
      desc: "Client project SPA using React"
    }
  ];

  function activeTab(tabID,currentEle){
    if(about === tabID){
      currentEle.classList.remove("active");
      SetAbout("");
      return;
    }
    const children = Array.from(tabContainer.current.children);
    children.forEach(child => child.classList.remove("active"));
    currentEle.classList.add("active");
    SetAbout(tabID);
  }

  return (
    <>
      <Header/>
      <section className="hero" id="home">
          <div className="container relative pdb-0">
            <div className='section_content first_section'>
              <div className='main_title'>
                <div className='big_case'>
                  <p className='big'>Hi there,</p>
                  <p className='big'>I'm Akash Venugopal</p>
                </div>
                <p className='small m-top'>A front end developer who works on beautiful designs</p>
              </div>
              <div className='exp flexi'>
                  <p className='years'>1</p>
                  <div className='year_text'>
                      <p className='year1_txt'>Year</p>
                      <p className='year2_txt'>Experience</p>
                  </div>
              </div>
              <div className='certification flexi'>
                <img src={Outsystems} alt='outsystems'/>
                <p className='certi_text'>Certified Outsystems Developer</p>
              </div>
              <div className='img_container'>
                <img src={Akash}/>
              </div>
            </div>
          </div>
      </section>
      <section className='about' id="about">
        <div className='container relative'>
          <div className='section_content'>
            <h2 className='section_title'>About me</h2>
            <div className='content_holder'>
              <div className='tab_container' ref={tabContainer}>
                <div className='tab' onClick={e => activeTab(e.currentTarget.firstElementChild.id,e.currentTarget)}>
                    <div className='icon_holder' id="person">
                      <PersonIcon className='tab_icon'/>
                    </div>
                    <p className='tab_title'>Myself</p>
                </div>
                <div className='tab' onClick={e => activeTab(e.currentTarget.firstElementChild.id,e.currentTarget)}>
                  <div className='icon_holder' id="present">
                    <RedeemIcon className='tab_icon'/>
                  </div>
                    <p className='tab_title'>Present Goals</p>
                </div>
                <div className='tab' onClick={e => activeTab(e.currentTarget.firstElementChild.id,e.currentTarget)}>
                  <div className='icon_holder' id="future">
                    <AccessTimeIcon className='tab_icon'/>
                  </div>
                    <p className='tab_title'>Future Goals</p>
                </div>
              </div>
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}> 
                <div className='desc_container'>
                  {
                    about === "" && (
                      <div className='desc_holder'>
                        <p className='desc'>Click on one of the tabs to learn more about me</p>
                      </div>  
                    )
                  }
                  {
                    about === "person" && (
                      <div className='desc_holder'>
                        <p className='desc'>Hello, I am a front end developer who loves to work on single page and full on websites. I am also certified in Outsystems as a Reactive Web Developer.</p>
                        <div className='proj_client'>
                          <div className='proj'>
                            <p className='little'>No of Projs Completed</p>
                            <p className='large'>{counterOn && <CountUp start={0} end={7} duration={1} delay={0}/>}</p>
                          </div>
                          <div>
                            <p className='little'>Happy clients</p>
                            <p className='large'>{counterOn && <CountUp start={0} end={2} duration={1} delay={0}/>}</p>
                          </div>
                        </div>
                      </div>  
                    )
                  }
                  {
                    about === "present" && (
                      <div className='desc_holder'>
                        <p className='desc'>I am currently a graduate student at UOttawa and am pursuing my studies in Computer Engineering focusing on AI. I am also working on front end projects for my clients.</p>
                      </div>  
                    )
                  }
                  {
                    about === "future" && (
                      <div className='desc_holder'>
                        <p className='desc'>I plan to integrate my knowledge learned from my post graduate to the web and plan on building scalable AI web based solutions.</p>
                      </div>  
                    )
                  }
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </section>
      <section className='experience' id="exp">
          <div className="container relative">
              <div className='section_content'>
                  <h2 className='section_title'>Work Experience</h2>
                  <div className='timeline_container'>
                    <Timeline>
                      <TimelineItem>
                        <TimelineOppositeContent sx={{textAlign : "left",m: 'auto 0'}}>
                          <h3 className='timeline_left_head'>CodeSkool</h3>
                          <h5 className='timeline_left_date'>Dec 2019 - Mar 2020</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineConnector/>
                          <TimelineDot sx={{backgroundColor: "#286f6c"}}/>
                          <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                          <h3 className='timeline_right_head'>Web developer Intern</h3>
                          <p className='timeline_right_content'>Worked on building reactive web applications using HTML, CSS and JS</p>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineOppositeContent sx={{textAlign : "left",m: 'auto 0'}}>
                          <h3 className='timeline_left_head'>Conneqt Digital</h3>
                          <h5 className='timeline_left_date'>Oct 2021 - Oct 2022</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineConnector/>
                          <TimelineDot sx={{backgroundColor: "#ee633f"}}/>
                          <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                          <h3 className='timeline_right_head next'>Digital Associate</h3>
                          <p className='timeline_right_content'>Built reactive fullstack web applications for banking clients using Outsystems</p>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineConnector/>
                          <TimelineDot sx={{backgroundColor: "#eec048"}}/>
                          <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                          <h3 className='timeline_right_head next'>More to come</h3>
                          <p className='timeline_right_content'>Can't wait to learn and explore working with others</p>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                  </div>
              </div>
          </div>
      </section>
      <section className="portfolio" id="portfolio">
        <div className='container relative'>
            <div className='section_content'>
                <h2 className='section_title'>Latest Projects</h2>
                <div className='project_cards'>
                    {
                      images.map((obj) => <ProjectCard key={obj.id} obj={obj}/>)
                    }
                </div>
            </div>
        </div>
      </section>
      <section className='contact' id='contact'>
        <div className='container relative'>
           <div className="section_content">
              <h2 className='section_title'>Come on let's work together</h2>
              <div className='split_section'>
                <div className='start_by'>
                    <h3 className='say_hi'>Start by <span className='special_txt'>saying hi</span></h3>
                    <div className='social_icons'>
                      <div className='left_line'></div>
                      <div className='icons_social'>
                        <Tooltip className='tt' title="Instagram">
                          <a className='icon_link' href='https://www.instagram.com/a_kash03/' target='_blank'><InstagramIcon/></a>
                        </Tooltip>
                        <Tooltip className='tt' title="Facebook">
                          <a className='icon_link' href='https://www.facebook.com/akash.venu.5' target='_blank'><FacebookIcon/></a>
                        </Tooltip>
                        <Tooltip className='tt' title="Resume">
                          <a className='icon_link' href={Resume} target='_blank'><ArticleIcon/></a>
                        </Tooltip>
                      </div>
                      <div className="right_line"></div>
                    </div>
                </div>
                <ul className='contact_links'>
                    <a className='link_contact' href='https://www.linkedin.com/in/akash-v-aaaaa2159/'  target="_blank"><li className='contact_link_item'>
                      <div className='link_icon'>
                        <LinkedInIcon className='icon' sx={{width: 25, height: 25, color:"#286f6c"}}/>
                      </div>
                      <div className='link_text'>LinkedIn profile</div>
                    </li></a>
                    <a className='link_contact' href='https://github.com/akashvenus'  target="_blank"><li className='contact_link_item'>
                      <div className='link_icon'>
                        <GitHubIcon className='icon' sx={{width: 25, height: 25, color:"#286f6c"}}/>
                      </div>
                      <div className='link_text'>Github profile</div>
                    </li></a>
                    <a className='link_contact' href='mailto:akashvenu15@gmail.com'  target="_blank"><li className='contact_link_item'>
                      <div className='link_icon'>
                        <EmailIcon className='icon' sx={{width: 25, height: 25, color:"#286f6c"}}/>
                      </div>
                      <div className='link_text'>akashvenu15@gmail.com</div>
                    </li></a>
                </ul>
              </div>
           </div>
        </div>
      </section>
    </>
  )
}

export default App
