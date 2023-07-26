import styled from 'styled-components'
import profile_pic from '../assets/me/profile_pic.png'
import { mobile } from '../responsive'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
export default function About() {
    const {t} = useTranslation()
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '10px',
            threshold: 1, // Percentage of section visibility needed to trigger the callback
        };

        const observer = new IntersectionObserver((entries) => {
            try {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.className = 'profile swipe'
                } else {
                    entry.target.className = 'profile '
                  }
                });
                
            } catch (error) {
                console.log(error)
            }
        }, options);
        const element = document.getElementById('profile-pic')
        element && observer.observe(element)

        return () => {
            const element = document.getElementById('profile-pic')
            element && observer.unobserve(element)
        }
    }, [])
    return (
        <Main>
            <div className='introduce'>
                <h2>{t('greeting2')}</h2>
                <p>{t('about_bio')}</p>
            </div>
            <div id='profile-pic' className='profile'>
                <img  src={profile_pic} alt=''/>
            </div>
            <div className='social'>
                    <a href="https://github.com/ricardxalvarez" target='_BLANK' rel='noreferrer' aria-label="Homepage" className="footer-octicon" title="GitHub">
                        <svg aria-hidden="true" className="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill='#5C4033' fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    </a>
                    <a href="https://stackoverflow.com/users/18123771/ricardo-alvarez" target='_BLANK' rel='noreferrer' aria-label="Homepage" className="footer-octicon" title="Stackoverflow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="150" viewBox="0 0 100 150">
                        <g fill="#5C4033" fillRule="evenodd">
                            <polygon points="88 80 99 80 99 124 0 124 0 80 11 80 11 113 88 113"/>
                            <path fillRule="nonzero" d="M22.9878906,76.73 L77.0128906,88.085 L79.2838906,77.285 L25.2588906,65.925 L22.9878906,76.73 Z M30.1368906,50.861 L80.1828906,74.169 L84.8448906,64.16 L34.7978906,40.852 L30.1368906,50.861 Z M43.9848906,26.308 L86.4128906,61.639 L93.4788906,53.154 L51.0508906,17.824 L43.9848906,26.308 Z M71.3718906,0.192 L62.5118906,6.782 L95.4598906,51.082 L104.319891,44.493 L71.3718906,0.192 Z M22,102 L77,102 L77,91 L22,91 L22,102 Z"/>
                        </g>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/ricardo-alvarez-0a27471bb/" target='_BLANK' rel='noreferrer' aria-label="Homepage" className="footer-octicon" title="Linkedin">
                        <svg fill='#5C4033' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="https://www.fiverr.com/ricardxalvarez" target='_BLANK' rel='noreferrer' aria-label="Homepage" className="footer-octicon" title="Fiverr">
                        <svg xmlns="http://www.w3.org/2000/svg" height="2500" width="2500" viewBox="0 0 400 400"><circle cx="200" cy="200" fill="#5C4033" r="200"/><g fill="#fff"><path d="M364.4 162.7c0-6.6-5.2-12-11.8-12-6.4 0-11.7 5.3-11.7 12 0 6.6 5.2 12 11.7 12 6.6.1 11.8-5.3 11.8-12zm-11.8 8.7c-4.5 0-8-3.8-8-8.7 0-4.8 3.5-8.6 8-8.6 4.6 0 8.2 3.8 8.2 8.6 0 4.9-3.6 8.7-8.2 8.7z"/><path d="M355.8 163.7c.6-.2 1.9-1.1 1.9-3 0-2.3-1.5-3.7-4-3.7h-5.3v11.3h3.5v-3.8h.9l1.6 3.8h3.8l-2.1-3.9c-.2-.6-.3-.7-.3-.7zm-3-1.6h-.9v-2.7h.9c.8 0 1.2.4 1.2 1.3.1.9-.4 1.4-1.2 1.4z"/><circle cx="104.6" cy="163" r="9"/><path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7zm70 0h-29.5v13.5h5l-6.4 20c-1.2 3.3-1.5 7.3-1.5 7.3h-.4s-.3-4-1.5-7.3l-6.4-20h5v-13.5h-29.5v13.5h6.2l15.4 42h22l15.4-42h6.2zm54.6 25.5c0-15.4-9.3-26.8-25.8-26.8-17.9 0-28.9 12.7-28.9 29 0 14.8 10.7 29.1 30.5 29.1 15 0 23.9-7.8 23.9-7.8l-6.8-12.9s-7.4 5.3-15.6 5.3c-5.9 0-11.5-3.1-12.9-10.2h35.2c-.1-.1.4-3.9.4-5.7zm-35.2-4.6c1-4.3 3.6-8.2 8.9-8.2 4.1 0 7 3.8 7 8.2zm114.1-8.1h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.4-.1-15.4 6.1-17.8 13.7zm-49.3 0h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.5-.1-15.5 6.1-17.8 13.7z"/></g></svg>
                    </a>
                    <a href="https://www.upwork.com/freelancers/~01ac0e29c620fed69a" target='_BLANK' rel='noreferrer' aria-label="Homepage" className="footer-octicon" title="Upwork">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#5C4033"/><path fill="#fff" d="M357.2 296.9c-17 0-33-7.2-47.4-18.9l3.5-16.6.1-.6c3.2-17.6 13.1-47.2 43.8-47.2 23 0 41.7 18.7 41.7 41.7s-18.7 41.6-41.7 41.6zm0-125.5c-39.2 0-69.5 25.4-81.9 67.3-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0 21.7-17.6 39.3-39.3 39.3s-39.3-17.6-39.3-39.3V147.8H71v109.7c0 44.9 36.5 81.8 81.4 81.8s81.4-36.9 81.4-81.8v-18.4c8.2 17.1 18.2 34.4 30.4 49.6l-25.8 121.4h43.1l18.7-88c16.4 10.5 35.2 17.1 56.8 17.1 46.2 0 83.8-37.8 83.8-84.1.1-46.1-37.4-83.7-83.6-83.7"/></svg>
                    </a>
            </div>
        </Main>
    )
}

const Main = styled.section`
color: ${props => props.theme.white};
background-color: ${props => props.theme.brown};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5% 10%;
${mobile({
    padding: '5%',
    paddingBottom: '20%'
})}
padding-bottom: 20%;
.introduce {
    max-width: 1000px;
    text-align: center;
    p {
        margin-top: 20px;
    }
}
.profile {
    ${mobile({
        width: '250px',
        height: '250px',
        borderWidth: '3px'
    })}
    margin: 25px 0;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid ${props => props.theme.white};
    transition: transform 1s ease;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        /* transform: rotateX(180deg); */
    }
    &.swipe {
        transform: rotateY(180deg);
    }
}
.social {
    max-width: 1000px;
    background-color: ${props => props.theme.white};
    border-radius: 15px;
    box-shadow:  0 5px 0 rgba(0,0,0,0.3);
    width: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: space-evenly;
    padding: 20px 0;
    a {
        ${mobile({
            width: '45px',
            height: '45px'
        })}
        width: 50px;
        height: 50px;
        padding: 10px;
        border-radius: 50%;
        background-color: #FFFFFF;
        box-shadow: 0 0 0 2px ${props => props.theme.brown};
        transition: transform .4s ease;
        &:hover {
            transform: translateY(-3px);
        }
        svg {
            height: 100%;
            width: 100%;
        }
    }
}
`