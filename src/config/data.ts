// Others
import {
    DevicePhoneMobileIcon,
    ComputerDesktopIcon,
    ServerIcon,
    ArrowPathRoundedSquareIcon
} from '@heroicons/react/24/outline';

export const hero = {
    description:
        "I'm a web and mobile developer with a passion for backends and systems architecture. I occasionally improvise as a designer for my side projects."
};

export const experiences = [
    {
        dateSpan: 'September 2020 to Jan June 2021',
        title: 'Stage and Thesis at UniVR',
        description:
            'Management dashboard and website for ESD research group (UniVR) with an automatic system for updating data. SHPIA mobile demo application to test high frequency data collection from BLE nordic sensors',
        resources: [{ name: 'ESD site', link: 'https://cisd.di.univr.it/' }]
    },
    {
        dateSpan: 'From April 2021',
        title: 'Fullstack developer at Edalab',
        description:
            'Development of customized IT solutions for third party clients. Focus on management tools, dashboards and mobile applications. Systems design and architecture, automatic deployment procedures',
        resources: [{ name: 'Edalab site', link: 'https://edalab.it' }]
    },
    {
        dateSpan: 'December 2022',
        title: 'React Native course',
        description:
            'Series of 4 introductory lessons on mobile development for third year computer science and bioinformatics students of the University of Verona',

        resources: [
            {
                name: 'Course reference',
                link: 'https://www.corsi.univr.it/?ent=cs&id=419&menu=studiare&tab=AmbitoDeF&idOi=173140&lang=it'
            }
        ]
    }
];

export const skills = [
    {
        icon: DevicePhoneMobileIcon,
        title: 'Mobile developer',
        description:
            'Application development for both Android and iOS. Lately focused on BLE and NFC communication',
        tecnologies: ['React Native', 'Android', 'iOS']
    },
    {
        icon: ComputerDesktopIcon,
        title: 'Frontend developer',
        description:
            'Web development with particular experience in creating dashboards and internal management tools',
        tecnologies: ['React', 'Next']
    },
    {
        icon: ServerIcon,
        title: 'Backend developer',
        description:
            'Backend development. Management of databases and communication between processes.',
        tecnologies: ['Fastify', 'Nest', 'PostgreSQL', 'Mongo', 'Redis', 'Mqtt']
    },
    {
        icon: ArrowPathRoundedSquareIcon,
        title: 'Dev ops',
        description: 'Automation of development and deployement processes',
        tecnologies: ['Gitlab CI', 'Github Actions', 'Docker', 'Fastlane']
    }
];
