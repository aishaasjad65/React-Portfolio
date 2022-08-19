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
    }, {
        title: 'Microsoft Certified Trainer',
        image: Images.MCT,
    }, {
        title: 'Microsoft Innovative Educator - Master Trainer 2020-2021',
        image: Images.MIEMT,
    }, {
        title: 'Microsoft Innovative Educator Expert 2020-2021',
        image: Images.MIEExpert,
    }, {
        title: 'Beta - Microsoft Learn Student Ambassador',
        image: Images.MLSABeta,
    }, {
        title: 'Data Scientist - DataCamp',
        image: Images.DSDC,
    }, {
        title: 'MTA - Network Fundamentals',
        image: Images.MTANF,
    }, {
        title: 'Microsoft Student Partner',
        image: Images.MSP,
    }, {
        title: 'IBM - Tools for Data Science',
        image: Images.IBMDS,
    }, {
        title: 'MTA - Introduction to Python',
        image: Images.MTAPython,
    }, {
        title: 'Microsoft Innovative Educator - Trainer',
        image: Images.MIETrainer,
    }, {
        title: 'Microsoft Office Specialist - Word Expert',
        image: Images.MOSWordExpert,
    }, {
        title: 'Microsoft Office Specialist - Excel',
        image: Images.MOSExcel,
    }, {
        title: 'Microsoft Office Specialist - PowerPoint',
        image: Images.MOSPPT,
    }, {
        title: 'Microsoft Office Specialist - Word',
        image: Images.MOSWord,
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

const constants = {
    Achievements,
    scrambled_phrases: scrambled_phrases,
    skillClassNames,
    education
}

export default constants