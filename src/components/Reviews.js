import styled from 'styled-components'
import { useState, useEffect } from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import profile from '../assets/common/profile.svg'
import { mobile } from '../responsive'
import { useTranslation } from 'react-i18next'

export default function Reviews() {
    const {t} = useTranslation()
    const [index, setIndex] = useState(0)
    useEffect(()=>{
        let slider = setInterval(()=>{
          setIndex( index + 1)
        },5000)
        return ()=> clearInterval(slider)
      },[index])
    const reviews = [
        {
            avatar: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/profile/photo/f0d95337e30527134fb0d7bb64debffd-1679340311043/c723d091-f2da-4f28-9955-f0a619e45bbe.png',
            name: 'mtickets',
            country: 'US',
            review: t('review_mtickets')
        },
        {
            avatar: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/profile/photo/b87a0b6731977097e34a222725a0bc29-1573760069834/423dbac5-1e7d-40d6-98d3-dcd5f8b3a5ed.png',
            name: 'Alfredo Zeballos',
            country: 'PE',
            review: t('review_alfredo_zeballos')
        },
        {
            name: 'l8ker8',
            country: 'US',
            review: t('review_l8ker8')
        },
        {
            name: 'Daniel Goldman',
            country: 'UY',
            review: t('review_daniel_goldman')
        },
        {
            avatar: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/profile/photo/c58225f840c685f7e82d598c7207f1b1-1641928610317/041a4e66-b7c9-4052-a332-3403d0488cad.png',
            name: 'Francisco Ortiz',
            country: 'US',
            review: t('review_francisco_ortiz')
        },
        {
            avatar: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/profile/photos/46365011/original/10550883_10202481109852567_1003634720997428221_n.jpg',
            name: 'dinethkanishka',
            country: 'AU',
            review: t('review_dinethkanishka')
        },
        {
            avatar: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/profile/photos/45162075/original/1474681226410_facebook20160924-28201-if8ysq.jpg',
            name: 'Avelino Puello',
            country: 'CA',
            review: t('review_avelino_puello')
        },
    ]
    return (
        <Main>
            <h1>{t('reviews')}</h1>
            <Container>
                {
                    reviews.map((item, idx) => {
                        let position = 'nextSlide'
                        if (idx === index) position = 'activeSlide'
                        if (index === -1){
                            setIndex(reviews.length - 1)
                        }
                        if (index === reviews.length){
                            setIndex(0)
                        }
                        return (
                            <Card type={position} key={idx}>
                                <div className='profile'>
                                    <div className='avatar'>
                                        <img src={item.avatar || profile} alt={profile}/>
                                    </div>
                                    <div className='info'><img src={`/assets/flags/${item.country}.svg`} alt=''/> {item.name} </div>
                                </div>
                                <div className='body'>
                                    <hr/>
                                    <p>{item.review}</p>
                                </div>
                            </Card>
                        )
                    })
                }
                <button className='back' onClick={()=> setIndex(index - 1)}><IoIosArrowBack/></button>
                <button className='forward' onClick={()=> setIndex(index + 1)}><IoIosArrowForward/></button>
                <div className='circles'>
                    {
                        reviews.map((e, idx) => {
                            return <div key={idx} className={`circle ${idx === index && 'selected'}`}></div>
                        })
                    }
                </div>
            </Container>

        </Main>
    )
}

const Main = styled.section`
width: 100%;
background-color: ${props => props.theme.brown};
padding: 5%;
padding-bottom: calc(5% + 45px);
h1 {
    text-align: center;
    margin-bottom: 40px;
    color: ${props => props.theme.white};
}
`

const Container = styled.div`
${mobile({
    height: '360px',
})}
width: 80%;
max-width: 1000px;
height: 300px;
justify-content: center;
margin: auto;
margin-top: 80px;
position: relative;
> button {
    position: absolute;
    background-color: ${props => props.theme.white};
    height: 30px;
    width: 30px;
    font-size: 17px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    color: ${props => props.theme.brown};
    border: none;
}
.back {
    ${mobile({
        left: '-35px'
    })}
    left: -40px;
}
.forward {
    ${mobile({
        right: '-35px'
    })}
    right: -40px;
}
.circles {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
}
.circle {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${props => props.theme.whiteDark};
    transition: background-color .3s ease;
    &.selected {
        background-color: ${props => props.theme.white};
    }
}
`

const Card = styled.div`
position: absolute;
background-color: ${props => props.theme.white};
width: 100%;
height: 100%;
border-radius: 15px;
box-shadow:  0 5px 0 1px rgba(0,0,0,0.3);
opacity: 0;
transition: all 0.3s linear;
${props => props.type === 'activeSlide' && {
  opacity: '1',
  transform: 'translateX(0)'
}
}
${props => props.type === 'nextSlide' && {
  transform: 'translateX(20px)',
}
}
${props => props.type === 'lastSlide' &&{
transform: 'translateX(-20px)',
}
} 
.profile {
    transform: translateY(-50%);
    position: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .avatar {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: 4px solid ${props => props.theme.brown};
        overflow: hidden;
        box-shadow:  0 3px 0 1px rgba(0,0,0,0.2);
        background-color: ${props => props.theme.white};
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .info {
        margin-top: 10px;
        display: flex;
        gap: 5px;
        > img {
            height: 20px;
            border-radius: 3px;
        }
    }
}
.body {
    margin: auto;
    transform: translateY(-20%);
    max-width: 80%;
    hr {
        border-top: 1px solid rgba(0,0,0,0.2);
        margin-bottom: 15px;
    }
    p {
        ${mobile({
            fontSize: '14px'
        })}
    }
}
`