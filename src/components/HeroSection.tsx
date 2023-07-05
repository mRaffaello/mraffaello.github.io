// React
import { useEffect, useMemo, useRef } from 'react';

// Components
import Stripes from './Stripes';

// Config
import { experiences, hero } from '../config/data';
import { darkTheme, lightTheme } from '../config/theme';

// Utils
import { classNames } from '../utils/css';

// Assets
import GithubIcon from '../assets/icons/GithubIcon';
import LinkedinIcon from '../assets/icons/LinkedinIcon';

// Types
import { SECTION_THEME } from '../types/enums';

// Others
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';

type HeroSectionProps = {
    theme: SECTION_THEME;
};

function HeroSection(props: HeroSectionProps) {
    // References
    const heroRef = useRef<HTMLDivElement>();
    const pointerRef = useRef<HTMLDivElement>();
    const firstCircleRef = useRef<HTMLDivElement>();

    // Memos
    const colors = useMemo(
        () => (props.theme === SECTION_THEME.DARK ? darkTheme : lightTheme),
        [props.theme]
    );

    // Methods
    const onMouseEnter = () => {
        if (!pointerRef.current) return;
        pointerRef.current.classList.remove('hidden');
    };

    const onMouseLeave = () => {
        if (!pointerRef.current) return;
        pointerRef.current.classList.add('hidden');
    };

    const onScroll = () => {
        if (!firstCircleRef.current || !pointerRef.current || !heroRef.current) return;

        const topString = firstCircleRef.current.style.top;
        const top = parseInt(topString.replace('px', '')) + window.scrollY;

        const isInside = top <= heroRef.current.offsetHeight;

        if (!isInside) pointerRef.current.classList.add('hidden');
        else pointerRef.current.classList.remove('hidden');
    };

    // Effects
    useEffect(() => {
        heroRef.current = document.querySelector<any>('#hero-section-0');
        pointerRef.current = document.querySelector<any>('#pointer');
        firstCircleRef.current = document.querySelector<any>('#first-circle');

        // Attach the event listener
        window.addEventListener('scroll', onScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    // Render
    return (
        <section
            id={`hero-section-${props.theme}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={classNames(
                colors.background,
                'relative grid place-items-center pt-32 pb-16 md:rounded-lg cursor-none'
            )}>
            <div className='w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12 lg:py-10 mb-24'>
                <div className='w-full relative'>
                    <Stripes theme={props.theme} />
                    <div className='text-center relative lg:text-start'>
                        <div className='px-12 md:px-16 lg:px-20'>
                            <h3
                                id={`hero-name-${props.theme}`}
                                className={classNames(
                                    colors.title,
                                    'mb-4 font-bold leading-none tracking-tight text-3xl md:text-4xl lg:text-5xl relative opacity-0'
                                )}>
                                Marco Raffaello
                                <p className='absolute font-semibold -top-14 left-1/2 -translate-x-1/2 lg:left-0 lg:-top-12 lg:-rotate-90 lg:-translate-x-6 lg:h-48'>
                                    <span className='bg-primary-400 px-3 py-1 rounded-md italic text-sm'>
                                        <span className='text-xs'>00.</span>
                                        {` `}
                                        About
                                    </span>
                                </p>
                            </h3>
                            <div className={classNames(colors.body)}>
                                <h1
                                    id={`hero-title-${props.theme}`}
                                    className='tracking-tight mb-4 font-bold leading-none text-4xl md:text-5xl lg:text-6xl opacity-0'>
                                    Web and Mobile developer
                                </h1>
                                <p
                                    id={`hero-description-${props.theme}`}
                                    className='font-light w-full lg:w-2/3 xl:w-1/2 opacity-0'>
                                    {hero.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 w-full grid place-items-center'>
                <div className='flex relative w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12 pr-12 md:pr-16 lg:pr-20'>
                    <div className='absolute -top-6 md:-top-8 lg:-top-10 w-full'>
                        <div className='px-6 w-full md:hidden'>
                            <div className='hero-line-0 h-1 w-1/2 bg-primary-400 origin-right' />
                            <div className='hero-line-1 absolute left-6 top-0 -translate-x-1/2 h-6 w-1 bg-primary-400 origin-top' />
                            <div className='absolute z-50 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-primary-400 flex justify-center items-center'>
                                <ChevronDoubleDownIcon className='h-5 w-5 text-white' />
                            </div>
                        </div>
                        <div className='rounded-full -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-primary-400 text-white hidden md:flex justify-center items-center'>
                            <ChevronDoubleDownIcon className='h-5 w-5 text-white' />
                        </div>
                    </div>
                    <div className='w-12 md:w-16 lg:w-20 flex justify-center'>
                        <div className='hero-line-2 absolute h-full top-0 bg-primary-400 w-1 origin-top' />
                    </div>
                    <div
                        className={classNames(
                            props.theme === SECTION_THEME.DARK ? 'stripes-dark' : 'stripes-light',
                            'flex-1 flex gap-3 w-full hero-card'
                        )}>
                        {experiences.map((experience, index) => (
                            <div
                                key={experience.dateSpan}
                                className={classNames(
                                    index !== 0 ? 'hidden lg:block' : '',
                                    'flex-1 px-3 md:px-4 lg:px-6 pb-5 pt-5'
                                )}>
                                <p className={`${colors.body} italic text-sm`}>
                                    {experience.dateSpan}
                                </p>
                                <p className={`${colors.title} font-semibold text-lg`}>
                                    {experience.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='cursor-pointer'>
                <a
                    href='https://github.com/mRaffaello'
                    target='_blank'
                    className='absolute transition-colors right-0 bottom-0 p-4 bg-primary-400 lg:rounded-br-lg flex items-center justify-center'>
                    <GithubIcon />
                </a>
                <a
                    href='https://www.linkedin.com/in/marco-raffaello-25b58b283'
                    target='_blank'
                    className='absolute transition-colors right-0 bottom-14 lg:right-14 lg:bottom-0 p-4 bg-white rounded-tl-lg flex items-center justify-center'>
                    <LinkedinIcon />
                </a>
            </div>
        </section>
    );
}

export default HeroSection;
