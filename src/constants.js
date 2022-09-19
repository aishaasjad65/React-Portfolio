import Images from './Images.js'

const scrambled_phrases = [
    'I am React Developer',
    'I am a Web Designer',
    'I am an AWS Community Builder',
    'I am a Hack Club Leader',
    'I am an Agora.io Student Ambassador',
    'I am a Technology Evangelist',
    'I am a GitKraken Ambassador',
    'I am a Research Student',
    'I am a Tech. Community Nerd',
    'I am a #MSFT Tech. Associate',
    'I am a #MSFT Certified Trainer',
    'I am a Writer',
    'I am a Illustrator',
    'I am a UI/UX Engg.'
]

const Achievements = [
    {
        title: 'Cybersecurity Essentials',
        image: Images.CyberSecurity,
        link: 'https://www.credly.com/badges/f3d12d62-6b91-43fa-8edd-a5793c9760bf',
        issuer: 'Cisco'
    }, {
        title: 'Microsoft Certified Trainer',
        image: Images.MCT,
        link: 'https://www.credly.com/badges/2d6344e7-6eb2-4bc2-86d8-bdd5c88bf351',
        issuer: 'Microsoft'
    }, {
        title: 'MIE - Master Trainer 2020-2021',
        image: Images.MIEMT,
        link: '',
        issuer: 'Microsoft'
    }, {
        title: 'MIE Expert 2020-2021',
        image: Images.MIEExpert,
        link: '',
        issuer: 'Microsoft'
    }, {
        title: 'Beta - Microsoft Learn Student Ambassador',
        image: Images.MLSABeta,
        link: '',
        issuer: 'Microsoft'
    }, {
        title: 'Data Scientist - DataCamp',
        image: Images.DSDC,
        link: '',
        issuer: 'DataCamp'
    }, {
        title: 'MTA - Network Fundamentals',
        image: Images.MTANF,
        link: '',
        issuer: 'Microsoft'
    }, {
        title: 'Microsoft Student Partner',
        image: Images.MSP,
        link: '',
        issuer: 'Microsoft'
    }, {
        title: 'IBM - Tools for Data Science',
        image: Images.IBMDS,
        link: '',
        issuer: 'IBM'
    }, {
        title: 'MTA - Introduction to Python',
        image: Images.MTAPython,
        link: '',
        issuer: 'Microsoft'
    }, {
        title: 'Microsoft Innovative Educator - Trainer',
        image: Images.MIETrainer,
        link: '',
        issuer: 'Microsoft'
    }, {
        title: 'Microsoft Office Specialist - Word Expert',
        image: Images.MOSWordExpert,
        link: '',
        issuer: 'Microsoft'
    }, {
        title: 'Microsoft Office Specialist - Excel',
        image: Images.MOSExcel,
        link: '',
        issuer: 'Microsoft'
    }, {
        title: 'Microsoft Office Specialist - PowerPoint',
        image: Images.MOSPPT,
        link: '',
        issuer: 'Microsoft'
    }, {
        title: 'Microsoft Office Specialist - Word',
        image: Images.MOSWord,
        link: '',
        issuer: 'Microsoft'
    }
]

const skillClassNames = [
    "fab fa-html5 fa-4x sk",
    "fab fa-js-square fa-4x sk",
    "fab fa-css3-alt fa-4x sk",
    "fab fa-react fa-4x sk",
    "fab fa-node-js fa-4x sk",
    "fab fa-sass fa-4x sk",
    "fab fa-less fa-4x sk",
    "fab fa-npm fa-4x sk",
    "fab fa-python fa-4x sk",
    "fab fa-java fa-4x sk",
    "fab fa-bootstrap fa-4x sk",
    "fab fa-git fa-4x sk",
    "devicon-cplusplus-plain fa-4x sk",
    "devicon-mysql-plain fa-4x sk",
    "devicon-android-plain fa-4x sk",
    "devicon-visualstudio-plain fa-4x sk",
    "devicon-wordpress-plain fa-4x sk",
    "devicon-photoshop-plain fa-4x sk",
    "devicon-illustrator-plain fa-4x sk",
    "devicon-php-plain fa-4x sk",
]

const education = [
    {
        className: 'fas fa-university fa-3x sk',
        title: 'Masters of Science in Artificial Intelligence',
        institute: 'NED University of Engineering and Technology, Karachi',
        year: 'Batch of Spring - 2021'
    }, {
        className: 'fas fa-brain fa-3x sk',
        title: 'Artificial Intelligence',
        institute: 'Presidential Initiative for Artificial Intelligence & Computing',
        year: 'Batch - 1'
    }, {
        className: 'fas fa-university fa-3x sk',
        title: 'Bachelors of Engineering in Computer Systems Engineering',
        institute: 'Mehran University of Engineering and Technology, Jamshoro',
        year: 'Batch of Fall - 2016'
    }, {
        className: 'far fa-lightbulb fa-3x sk',
        title: 'Intermediate in Pre-Engineering',
        institute: 'Cadet College Petaro, Jamshoro',
        year: 'Batch of 2011'
    }, {
        className: 'fas fa-school fa-3x sk',
        title: 'Secondary School Certificate',
        institute: 'Cadet College Petaro, Jamshoro',
        year: 'Batch of 2011'
    }, {
        className: 'fa fa-graduation-cap fa-4x',
        title: 'Primary School Certificate',
        institute: "St. Bonaventure's High School and College, Qasimabad, Hyderabad",
        year: '2008 - 2011'
    }
]

const experience = [
    {
        className: 'fab fa-react fa-3x sk',
        title: 'Software Engineer',
        location: 'E4Solutions, Sydney (Remote)',
        details: 'Worked with ReactJS on outAbox Solutions.',
        duration: 'Aug 2022 - Present'
    }, {
        className: 'fab fa-react fa-3x sk',
        title: 'Associate Software Engineer',
        location: 'Diya Interactive, Karachi',
        details: 'Worked with ReactJS & Django to develop web applications, such as QriosityNet & Others.',
        duration: 'Feb 2021 - Feb 2022'
    }, {
        className: 'fab fa-react fa-3x sk',
        title: 'Backend Python Intern',
        location: 'Diya Interactive, Karachi',
        details: 'Worked with Django to develop web applications pilot projects.',
        duration: 'Dec 2020 - Feb 2021'
    }, {
        className: 'fas fa-cogs fa-3x sk',
        title: 'CIT Instructor',
        location: 'Kamyab Jawan Programme, ORIC, MUET',
        details: 'Main reponsibilities include training the youth of Pakistan to empower the future.',
        duration: 'Nov 2020 - Dec 2020'
    }, {
        className: 'fas fa-cog fa-3x sk',
        title: 'STEAM Trainer for 4IR',
        location: "Int'l Islamic Univ. Islamabad Schools, Latifabad, Hyderabad",
        details: 'Worked with IIUISL team to teach and instruct young students about STEAM w.r.t. 4th Industrial Revolution and its integration in their syllabus.',
        duration: 'Sept 2019 - Nov 2019'
    }, {
        className: 'fas fa-network-wired fa-3x sk',
        title: 'Network Analyst (Intern)',
        location: 'Pakistan Telecommunication Limited, Hyderabad<',
        details: 'Worked with PTCL’s customer relation and network analyst team to detect and solve customer complaints. Also worked on Nokia Motive to document faulty lines.',
        duration: 'June 2019 - July 2019'
    }, {
        className: 'fab fa-react fa-3x sk',
        title: 'React Native Developer (Intern)',
        location: 'Codex Innovation Club (CIC) Hub, Hyderabad',
        details: 'Have an experience of 14 Weeks being an React Native Internee. Helped in different projects including: Smart Attendance System (With QR Code) etc.',
        duration: 'June 2018 - July 2018'
    }
]

const constants = {
    Achievements,
    scrambled_phrases: scrambled_phrases,
    skillClassNames,
    education,
    experience
}

export default constants