import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import Arrow from '@material-ui/icons/PlayArrowTwoTone';

import secc from '../img/bg/secc.jpg'
import S1P1 from '../img/scene/S1P1.svg'
import S1P2 from '../img/scene/S1P2.svg'
import S1P3 from '../img/scene/S1P3.svg'

import shop from '../img/bg/shop.jpg'
import S2P1 from '../img/scene/S2P1.png'
import S2P2 from '../img/scene/S2P2.png'
import S2P3 from '../img/scene/S2P3.png'
import S2P4 from '../img/scene/S2P4.png'

import S3P1 from '../img/scene/S3P1.svg'
import S3P2 from '../img/scene/S3P2.svg'
import S3P3 from '../img/scene/S3P3.svg'
import S3P4 from '../img/scene/S3P4.svg'


/*
Green -
#A3DE21
Blue -
#21A3DE
Red -
#DE21A3

Purple -
#7f007f
Yellow -
#EDE861
*/

const StickyStyled = styled.div`
    *{
        font-family: 'Fugaz One', cursive;
    }

    .section {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .spacer{
        height: 100vh;
    }

    .spacer-2{
        margin-top: 100vh;
    }

    .sticky {
        width: 100%;
    }

    .char{
        position: relative;
    }

    .img{
        width: 100vw;
        height: 100vh;
    }

    .S1P-container{
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    .S1P{
        width: 50%;
        height: auto;
        z-index: 999;
        position: relative;
    }

    .S2P1{
        width: 30%;
        height: auto;
        z-index: 999;
        position: relative;
        margin-right: -20%;
    }

    .S2P1-1{
        width: 13%;
        height: auto;
        z-index: 999;
        position: relative;
        margin-left: -60%;
    }

    .arrow-down {
        width: 5rem !important;
        height: 5rem !important;
    }

    .animate {
        animation-name: bounce;
        animation-timing-function: linear;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    .asda {
        transform: rotate(90deg) !important;
        margin-top: 10px;
    }

    .scene-3{
        margin-top: 100vh;
    }

    .Jus {
        color: #ede861;
        text-shadow: 2px 2px 1px #000, 2px 2px 1px #000, 1px 1px 1px #000;
    }

    .Jax {
        color: #7f007f;
        text-shadow: 2px 2px 1px #000, 2px 2px 1px #000, 1px 1px 1px #000;
    }


    .end{
        background: #fff;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .end > h1{
        font-size: 3rem;
    }

    .end > h2{
        font-size: 2.5rem;
    }

    .end > h6{
        font-size: 2rem;
    }


    @keyframes bounce {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-50px);
        }
        100% {
            transform: translateX(0);
        }
    }

`;

const ParallaxPage = () => (
    <StickyStyled>
        <div className="section">
        <h2>Its time to start scrolling</h2>
            <div className="asda">
                <Arrow className="arrow-down animate"/>
            </div>    
        </div>

        <Controller>
            <Scene pin enabled={true} indicators={false} pushFollowers={true} triggerHook={0}>
                <div className="sticky">
                    <img src={secc} alt="" className="img" />
                </div>
            </Scene>
        </Controller>

        <Controller>
            <Scene duration={100} enabled={true} indicators={false} pin={{ pushFollowers: false }} triggerHook={1}>
                <div className="sticky char"><div className="S1P-container"><img src={S1P1} alt="" className="S1P" /></div></div>
            </Scene>
        </Controller>

        <Controller>
            <Scene duration={100} enabled={true} indicators={false} pin={{ pushFollowers: false }} triggerHook={1}>
                <div className="sticky char"><div className="S1P-container"><img src={S1P2} alt="" className="S1P" /></div></div>
            </Scene>
        </Controller>

        <Controller>
            <Scene duration={100} enabled={true} indicators={false} pin={{ pushFollowers: false }} triggerHook={1}>
                <div className="sticky char"><div className="S1P-container"><img src={S1P3} alt="" className="S1P" /></div></div>
            </Scene>
        </Controller>

        <Controller>
            <Scene pin enabled={true} indicators={false} pushFollowers={true} triggerHook={0}>
                <div className="sticky">
                    <img src={shop} alt="" className="img" />
                </div>
            </Scene>
        </Controller>

        <Controller>
            <Scene duration={100} enabled={true} indicators={false} pin={{ pushFollowers: false }} triggerHook={1}>
                <div className="sticky char"><div className="S1P-container"><img src={S2P1} alt="" className="S1P" /></div></div>
            </Scene>
        </Controller>

        <Controller>
            <Scene duration={100} enabled={true} indicators={false} pin={{ pushFollowers: false }} triggerHook={1}>
                <div className="sticky char"><div className="S1P-container"><img src={S2P2} alt="" className="S1P" /></div></div>
            </Scene>
        </Controller>

        <Controller>
            <Scene duration={100} enabled={true} indicators={false} pin={{ pushFollowers: false }} triggerHook={1}>
                <div className="sticky char"><div className="S1P-container"><img src={S2P3} alt="" className="S1P" /></div></div>
            </Scene>
        </Controller>

        <Controller>
            <Scene duration={100} enabled={true} indicators={false} pin={{ pushFollowers: false }} triggerHook={1}>
                <div className="sticky char"><div className="S1P-container"><img src={S2P4} alt="" className="S1P" /></div></div>
            </Scene>
        </Controller>

        <Controller>
            <Scene pin enabled={true} indicators={false} pushFollowers={true} triggerHook={0}>
                <div className="sticky">
                    <img src={secc} alt="" className="img" />
                </div>
            </Scene>
        </Controller>

        <Controller>
            <Scene duration={100} enabled={true} indicators={false} pin={{ pushFollowers: false }} triggerHook={1}>
                <div className="sticky char"><div className="S1P-container"><img src={S3P1} alt="" className="S1P" /></div></div>
            </Scene>
        </Controller>

        <Controller>
            <Scene duration={100} enabled={true} indicators={false} pin={{ pushFollowers: false }} triggerHook={1}>
                <div className="sticky char"><div className="S1P-container"><img src={S3P2} alt="" className="S1P" /></div></div>
            </Scene>
        </Controller>

        <Controller>
            <Scene duration={100} enabled={true} indicators={false} pin={{ pushFollowers: false }} triggerHook={1}>
                <div className="sticky char"><div className="S1P-container"><img src={S3P3} alt="" className="S1P" /></div></div>
            </Scene>
        </Controller>

        <Controller>
            <Scene duration={100} enabled={true} indicators={false} pin={{ pushFollowers: false }} triggerHook={1}>
                <div className="sticky char"><div className="S1P-container"><img src={S3P4} alt="" className="S1P" /></div></div>
            </Scene>
        </Controller>

        <Controller>
            <Scene pin enabled={true} indicators={false} pushFollowers={true} triggerHook={0}>
                <div className="sticky end">
                    <h1>Thank you for using this website.</h1>
                    <h2>You will now be redirected to the <span className="Jus">Jus</span><span className="Jax">Jax</span> website</h2>
                    <h6>(if you are not directed within 10 seconds, please <a href="https://cfman29.github.io/dvi-cw1/">click here</a></h6>
                </div>
            </Scene>
        </Controller>
    </StickyStyled> 
);
export default ParallaxPage;