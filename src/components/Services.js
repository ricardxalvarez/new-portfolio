import { useEffect } from 'react';
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useTranslation } from 'react-i18next';

export default function Services() {
    const {t} = useTranslation()
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0, // Percentage of section visibility needed to trigger the callback
        };

        const observer = new IntersectionObserver((entries) => {
            try {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                    entry.target.className = entry.target.className + ' user-view'
                } 
                });
                
            } catch (error) {
                console.log(error)
            }
        }, options);
        const element = document.getElementById('services-modal')
        element && observer.observe(element)

        return () => {
            const element = document.getElementById('services-modal')
            element && observer.unobserve(element)
        }
    }, [])
    return (
        <Main>
            <Modal id='services-modal'>
                <div className='column'>
                    <div className='header'>
                        <div className='icon'>
                            <svg  xmlns="http://www.w3.org/2000/svg" height="500"  version="1.1"  width="500" viewBox='0 0 500 500' ><g><g><polygon fill="#F9F6EE" points="195.568,185.811 142.681,250.173 195.568,314.534 208.077,293.962 172.44,250.173      208.077,206.384    "/><polygon fill="#F9F6EE" points="228.707,313 251.922,313 288.816,187 265.6,187    "/><polygon fill="#F9F6EE" points="303.876,185.81 291.37,206.384 327.005,250.173 291.37,293.961 303.876,314.535 356.765,250.173         "/></g></g></svg>
                        </div>
                        <h2>
                            {t('web_development')}
                        </h2>

                    </div>
                    <div className='body'>
                        <h3 className='title'>Frontend:</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>TypeScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React.js</li>
                            <li>Next.js</li>
                            <li>Vue.js</li>
                        </ul>
                    </div>
                    <div className='body'>
                        <h3 className='title'>Backend:</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>API Rest</li>
                            <li>Django</li>
                            <li>Flask</li>
                            <li>Web sockets</li>
                            <li>MongoDB / SQL Databases</li>
                            <li>AWS / GCP</li>
                            <li>{t('linux_servers')}</li>
                        </ul>
                    </div>
                    <div className='footer'>
                        {t('web_development_footer')}
                    </div>
                </div>
                <div className='column'>
                    <div className='header'>
                        <div className='icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M170 125C170 111.193 181.193 100 195 100H305C318.807 100 330 111.193 330 125V375C330 388.807 318.807 400 305 400H195C181.193 400 170 388.807 170 375V125ZM195 110C186.716 110 180 116.716 180 125V375C180 383.284 186.716 390 195 390H305C313.284 390 320 383.284 320 375V125C320 116.716 313.284 110 305 110H195Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M228.536 233.464C230.488 235.417 230.488 238.583 228.536 240.536L220.071 249L228.536 257.464C230.488 259.417 230.488 262.583 228.536 264.536C226.583 266.488 223.417 266.488 221.464 264.536L209.464 252.536C207.512 250.583 207.512 247.417 209.464 245.464L221.464 233.464C223.417 231.512 226.583 231.512 228.536 233.464Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M271.464 233.464C273.417 231.512 276.583 231.512 278.536 233.464L290.536 245.464C292.488 247.417 292.488 250.583 290.536 252.536L278.536 264.536C276.583 266.488 273.417 266.488 271.464 264.536C269.512 262.583 269.512 259.417 271.464 257.464L279.929 249L271.464 240.536C269.512 238.583 269.512 235.417 271.464 233.464Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M256.608 223.124C259.301 223.736 260.988 226.415 260.376 229.108L250.376 273.108C249.764 275.801 247.085 277.488 244.392 276.876C241.699 276.264 240.012 273.585 240.624 270.892L250.624 226.892C251.236 224.199 253.915 222.512 256.608 223.124Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M230 125C230 122.239 232.239 120 235 120H265C267.761 120 270 122.239 270 125C270 127.761 267.761 130 265 130H235C232.239 130 230 127.761 230 125Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M340 235C340 232.239 342.239 230 345 230H355C357.294 230 359.294 231.561 359.851 233.787L364.825 253.683C365.649 254.001 366.463 254.339 367.268 254.696L384.854 244.144C386.821 242.964 389.34 243.274 390.962 244.896L405.104 259.038C406.726 260.66 407.036 263.179 405.856 265.146L395.304 282.732C395.661 283.537 395.999 284.351 396.317 285.175L416.213 290.149C418.439 290.706 420 292.706 420 295V315C420 317.294 418.439 319.294 416.213 319.851L396.317 324.825C395.999 325.649 395.661 326.463 395.304 327.268L405.856 344.854C407.036 346.821 406.726 349.34 405.104 350.962L390.962 365.104C389.34 366.726 386.821 367.036 384.854 365.856L367.268 355.304C366.463 355.661 365.649 355.999 364.825 356.317L359.851 376.213C359.294 378.439 357.294 380 355 380H345C342.239 380 340 377.761 340 375C340 372.239 342.239 370 345 370H351.096L355.772 351.298C356.188 349.633 357.43 348.297 359.061 347.761C361.213 347.054 363.293 346.189 365.288 345.179C366.821 344.403 368.645 344.469 370.118 345.353L386.651 355.273L395.273 346.651L385.353 330.118C384.469 328.645 384.403 326.821 385.179 325.288C386.189 323.293 387.054 321.213 387.761 319.061C388.297 317.43 389.633 316.188 391.298 315.772L410 311.096V298.904L391.298 294.228C389.633 293.812 388.297 292.57 387.761 290.939C387.054 288.787 386.189 286.707 385.179 284.712C384.403 283.179 384.469 281.355 385.353 279.882L395.273 263.349L386.651 254.727L370.118 264.647C368.645 265.531 366.821 265.597 365.288 264.821C363.293 263.811 361.213 262.946 359.061 262.239C357.43 261.703 356.188 260.367 355.772 258.702L351.096 240H345C342.239 240 340 237.761 340 235ZM340 280C340 277.239 342.239 275 345 275C361.569 275 375 288.431 375 305C375 321.569 361.569 335 345 335C342.239 335 340 332.761 340 330C340 327.239 342.239 325 345 325C356.046 325 365 316.046 365 305C365 293.954 356.046 285 345 285C342.239 285 340 282.761 340 280Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M160 125C160 122.239 157.761 120 155 120H145C142.706 120 140.706 121.561 140.149 123.787L135.175 143.683C134.351 144.001 133.537 144.339 132.732 144.696L115.146 134.144C113.179 132.964 110.66 133.274 109.038 134.896L94.8959 149.038C93.2736 150.66 92.9636 153.179 94.144 155.146L104.696 172.732C104.339 173.537 104.001 174.351 103.683 175.175L83.7873 180.149C81.5615 180.706 80 182.706 80 185V205C80 207.294 81.5615 209.294 83.7873 209.851L103.683 214.825C104.001 215.649 104.339 216.463 104.696 217.268L94.144 234.854C92.9636 236.821 93.2736 239.34 94.8959 240.962L109.038 255.104C110.66 256.726 113.179 257.036 115.146 255.856L132.732 245.304C133.537 245.661 134.351 245.999 135.175 246.317L140.149 266.213C140.706 268.439 142.706 270 145 270H155C157.761 270 160 267.761 160 265C160 262.239 157.761 260 155 260H148.904L144.228 241.298C143.812 239.633 142.57 238.297 140.939 237.761C138.787 237.054 136.707 236.189 134.712 235.179C133.179 234.403 131.355 234.469 129.882 235.353L113.349 245.273L104.727 236.651L114.647 220.118C115.531 218.645 115.597 216.821 114.821 215.288C113.811 213.293 112.946 211.213 112.239 209.061C111.703 207.43 110.367 206.188 108.702 205.772L90 201.096V188.904L108.702 184.228C110.367 183.812 111.703 182.57 112.239 180.939C112.946 178.787 113.811 176.707 114.821 174.712C115.597 173.179 115.531 171.355 114.647 169.882L104.727 153.349L113.349 144.727L129.882 154.647C131.355 155.531 133.179 155.597 134.712 154.821C136.707 153.811 138.787 152.946 140.939 152.239C142.57 151.703 143.812 150.367 144.228 148.702L148.904 130H155C157.761 130 160 127.761 160 125ZM160 170C160 167.239 157.761 165 155 165C138.431 165 125 178.431 125 195C125 211.569 138.431 225 155 225C157.761 225 160 222.761 160 220C160 217.239 157.761 215 155 215C143.954 215 135 206.046 135 195C135 183.954 143.954 175 155 175C157.761 175 160 172.761 160 170Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M360 130C360 124.477 364.477 120 370 120H380C385.523 120 390 124.477 390 130V140C390 145.523 385.523 150 380 150H370C364.477 150 360 145.523 360 140V130ZM380 130H370V140H380V130Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M360 170C360 164.477 364.477 160 370 160H380C385.523 160 390 164.477 390 170V180C390 185.523 385.523 190 380 190H370C364.477 190 360 185.523 360 180V170ZM380 170H370V180H380V170Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M110 310C110 304.477 114.477 300 120 300H130C135.523 300 140 304.477 140 310V320C140 325.523 135.523 330 130 330H120C114.477 330 110 325.523 110 320V310ZM130 310H120V320H130V310Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M110 350C110 344.477 114.477 340 120 340H130C135.523 340 140 344.477 140 350V360C140 365.523 135.523 370 130 370H120C114.477 370 110 365.523 110 360V350ZM130 350H120V360H130V350Z" fill="white"/></svg>
                        </div>
                        <h2>
                            {t("mobile_development")}
                        </h2>

                    </div>
                    <div className='body'>
                        <h3 className='title'>{t('technologies')}:</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>TypeScript</li>
                            <li>React Native</li>
                            <li>Expo</li>
                            <li>React Native Router</li>
                            <li>Audio / Videos</li>
                            <li>Swift ({t('learning')})</li>
                        </ul>
                    </div>
                    <div className='footer'>
                        {t('mobile_development_footer')}
                    </div>
                </div>
                <div className='column'>
                    <div className='header'>
                        <div className='icon'>
                        <svg style={{padding: '20px'}} xmlns="http://www.w3.org/2000/svg" xmlnsXlink='http://www.w3.org/1999/xlink' fill="#F9F6EE" version="1.1" width="800" height="800" viewBox="0 0 188.547 188.547" xmlSpace="preserve"><g><path d="M94.589,145.478v13.019h46.765l6.235,6.235v6.235H29.118v-6.235l6.235-6.235h46.765v-13.025H15.281   C6.884,145.471,0,138.584,0,130.188V32.861c0-8.397,6.877-15.281,15.281-15.281h146.143c8.415,0,15.284,6.875,15.284,15.281V64.05   c-1.925-2.125-3.964-4.125-6.235-5.849v-25.34c0-4.987-4.056-9.045-9.049-9.045H15.281c-4.993,0-9.045,4.058-9.045,9.045v78.626   c0,4.993,4.052,9.049,9.045,9.049h90.184c8.476,12.124,22.426,19.57,37.405,19.57c2.49,0,4.957-0.268,7.398-0.676l3.508,6.053   H94.589V145.478z M176.951,74.77c10.863,18.816,4.396,42.977-14.432,53.822c-18.815,10.863-42.965,4.415-53.828-14.425   c-10.859-18.804-4.396-42.953,14.42-53.813C141.919,49.491,166.082,55.951,176.951,74.77z M171.3,78.043   c-9.073-15.707-29.222-21.099-44.926-12.054c-15.704,9.073-21.111,29.216-12.026,44.92c9.066,15.704,29.21,21.136,44.907,12.062   C174.965,113.887,180.355,93.744,171.3,78.043z M172.42,126.162l-16.94,9.792l13.056,22.566l16.94-9.792L172.42,126.162z    M187.229,151.834l-16.952,9.779c2.716,4.689,8.695,6.284,13.378,3.593S189.939,156.523,187.229,151.834z M108.058,45.64H26v6.235   h82.058V45.64z M86.795,60.366H26v6.235h60.794V60.366z M86.795,75.099H26v6.235h60.794V75.099z M26,96.063h60.794v-6.235H26   V96.063z"/></g></svg>
                        </div>
                        <h2>
                            {t('web_automation')}
                        </h2>

                    </div>
                    <div className='body'>
                        <h3 className='title'>{t('tools')}:</h3>
                        <ul>
                            <li>Python</li>
                            <li>Selenium</li>
                            <li>Web drivers</li>
                        </ul>
                    </div>
                    <div className='body'>
                        <h3 className='title'>{t('Services')}:</h3>
                        <ul>
                            <li>Web scraping</li>
                            <li>{t('automate_complex')}</li>
                        </ul>
                    </div>
                    <div className='footer'>
                        {t('web_automation_footer')}
                    </div>
                </div>
                
            </Modal>
        </Main>
    )
}

const Main = styled.section`
background-color: ${props => props.theme.white};
height: fit-content;
`

const Modal = styled.div`
${mobile({
    gridTemplateColumns: '1fr'
})}
display: grid;
grid-template-columns: repeat(3, 1fr);
width: 80%;
max-width: 1000px;
background-color: #808080;
gap: 1px;
position: relative;
margin: auto;
border-radius: 15px;
overflow: hidden;
box-shadow:  0 5px 0 1px rgba(0,0,0,0.3);
text-align: center;
transition: all .4s ease;
&.user-view {
    transform: translateY(-10vw);
    
}
&::after {
    content: '';
    position: absolute;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    z-index: 2;
    top: 0;
    left: 0;
    border: 10px solid ${props => props.theme.white};
}
.column {
    background-color: ${props => props.theme.white};
    padding: 40px 10px;
    z-index: 2;
    .header {
        .icon {
            background-color: ${props => props.theme.brown};
            border-radius: 50%;
            width: 100px;
            height: 100px;
            margin: 0 auto;
            svg {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        h2 {
            font-size: 18px;
            font-weight: 500;
            margin-top: 15px;
        }
    }
    .body {
        margin-top: 15px;
        h3 {
            font-size: 16px;
            font-weight: 500;
        }
        ul {
            margin-top: 15px;
            font-size: 14px;
            font-weight: 500;
            list-style-type: none;
            padding: 0;
            li {
                margin-top: 3px;
            }
        }
    }
    .footer {
        margin: 0 auto;
        margin-top: 15px;
        font-size: 12px;
        max-width: 80%;
    }
}
`