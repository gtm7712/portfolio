import vid2subs from '../img/portImages/vid2subs.png';
import instachan from '../img/portImages/instachan.png';
import mikureader from '../img/portImages/mikureader.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const portfolios = [
    {
        id: 1,
        category: 'Python',        
        links: [
            {
                id: 1,
                link: 'https://github.com/ninevult/assvision',
                icon: <FontAwesomeIcon icon={faGithub} className="icon github" />
            },
            {
                id: 2,
                link: 'https://www.youtube.com/watch?v=HiMHkvtiyaM',
                icon: <FontAwesomeIcon icon={faYoutube} className="icon youtube" />
            }
        ],
        image: vid2subs,
        title: 'Video2Subs',
        shortdesc: 'Use Pillow.py to generate vector subtitles representing each frame of a video'
    },
    {
        id: 2,
        category: 'React.js',        
        links: [
            {
                id: 1,
                link: 'http://192.241.157.75:3000/',
                icon: <FontAwesomeIcon icon={faGlobeAmericas} className="icon website" />
            }
        ],
        image: instachan,
        title: 'InstaChan',
        shortdesc: 'Reddit-like image board prototype for Human-Centered Requirements & Design class'
    },
    {
        id: 3,
        category: 'C#',
        links: [
            {
                id: 1,
                link: 'https://github.com/9vult/MikuReader',
                icon: <FontAwesomeIcon icon={faGithub} className="icon github" />
            }
        ],
        image: mikureader,
        title: 'MikuReader',
        shortdesc: 'C#/WinForms manga reader/downloader for Mangadex'
    }
]

export default portfolios;