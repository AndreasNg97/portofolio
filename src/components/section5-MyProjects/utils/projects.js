import analyticsImg from '../img/analytics-page-img.png'
import analyticsPreview from '../img/analytics-page-preview.mp4'
import bmwImg from '../img/bmw-i8-img.png'
import bmwPreview from '../img/bmw-i8-preview.mp4'
import earthquakeImg from '../img/earthquake-locator-img.png'
import earthquakePreview from '../img/earthquake-locator-preview.mp4'
import osloCitybikesImg from '../img/oslo-citybikes-img.png'
import osloCitybikesPreview from '../img/oslo-citybikes-preview.mp4'
import ufcImg from '../img/UFC249-img.png'
import ufcPreview from '../img/UFC249-preview.mp4'
import memeoryGameImg from '../img/meme-ory-game-img-2.png'

import html5Logo from '../../../shared/img/languages/html5-logo.svg'
import css3Logo from '../../../shared/img/languages/css3-logo.svg'
import es6Logo from '../../../shared/img/languages/es6-logo.svg'
import reactLogo from '../../../shared/img/languages/react-logo.svg'

import chartjsLogo from '../../../shared/img/libraries/chartjs-logo.svg'
import firebaseLogo from '../../../shared/img/libraries/firebase-logo.svg'
import mapboxLogo from '../../../shared/img/libraries/mapbox-logo.svg'
import gsapLogo from '../../../shared/img/libraries/gsap-logo.svg'
import bootstrapLogo from '../../../shared/img/libraries/bootstrap-logo.svg'

export const projects = [
    {
        name: 'BMW i8 Showcase',
        link: 'https://andreasng97.github.io/react-bmw-i8/',
        thumbnail: bmwImg,
        preview : bmwPreview,
        description : `
            A small non-responsive webpage showcasing BMW i8.
            This is a rendition of one of my first projects ever.`,
        technologies : [
            {
                name : 'React',
                icon : reactLogo
            },{
                name : 'CSS3',
                icon : css3Logo
            },{
                name : 'GreenSock',
                icon : gsapLogo
            },{
                name : 'Bootstrap',
                icon : bootstrapLogo
            }
        ] 
    }, {
        name: 'Analytics Page',
        link: 'https://andreasng97.github.io/analytics-page/',
        thumbnail: analyticsImg,
        preview : analyticsPreview,
        description : `
            My implementation of a case which Diggit/Sci-code provided.
            It is a prototype of an analytics page made for Innovasjon Norge.`,
        technologies : [
            {
                name : 'React',
                icon : reactLogo
            },{
                name : 'CSS3',
                icon : css3Logo
            },{
                name : 'Chartjs',
                icon : chartjsLogo
            },{
                name : 'Bootstrap',
                icon : bootstrapLogo
            }
        ]
    }, {
        name: 'Earthquake Locator',
        link: 'https://andreasng97.github.io/earthquake-locator/',
        thumbnail: earthquakeImg,
        preview : earthquakePreview,
        description : `
            This is a simple web application that shows earthquakes that has happend the last 30 days.`,
        technologies : [
            {
                name : 'HTML5',
                icon : html5Logo
            },{
                name : 'CSS3',
                icon : css3Logo
            },{
                name : 'ES6',
                icon : es6Logo
            },{
                name : 'Mapbox',
                icon : mapboxLogo
            },
        ]
    },{
        name : 'Meme-ory Game',
        link : 'https://andreasng97.github.io/memory-game/',
        thumbnail : memeoryGameImg,
        preview : '',
        description : `
            A Meme-ory game with awesome dynamic images, and nyan cats.`,
        technologies : [
            {
                name : 'HTML5',
                icon : html5Logo
            },{
                name : 'CSS3',
                icon : css3Logo
            },{
                name : 'ES6',
                icon : es6Logo
            },
        ]
    },{
        name: 'UFC 249 Stats and Info Page',
        link: 'https://andreasng97.github.io/react-hoved-prosjekt/',
        thumbnail: ufcImg,
        preview : ufcPreview,
        description : `
            A website that is showcasing the event UFC 249. It provides stats and info of the fighters on the event.`,
        technologies : [
            {
                name : 'React',
                icon : reactLogo
            },{
                name : 'CSS3',
                icon : css3Logo
            },{
                name : 'GreenSock',
                icon : gsapLogo
            },{
                name : 'Firebase',
                icon : firebaseLogo
            },{
                name : 'Chartjs',
                icon : chartjsLogo
            },
        ]
    },{
        name: 'Oslo Citybikes',
        link: 'https://andreasng97.github.io/oslo-citybikes',
        thumbnail: osloCitybikesImg,
        preview : osloCitybikesPreview,
        description : `
            A web application showing available bikes and bike-docks in Oslo.`,
        technologies : [
            {
                name : 'HTML5',
                icon : html5Logo
            },{
                name : 'CSS3',
                icon : css3Logo
            },{
                name : 'ES6',
                icon : es6Logo
            },{
                name : 'Mapbox',
                icon : mapboxLogo
            },
        ]
    }
]