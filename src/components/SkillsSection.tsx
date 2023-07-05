// Config
import { experiences, skills } from '../config/data';
import { lightTheme } from '../config/theme';

// Utils
import { classNames } from '../utils/css';

// Others
import { PaperClipIcon } from '@heroicons/react/24/outline';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

function SkillsSection() {
    // Render
    return (
        <section className='grid place-items-center'>
            <div className='w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12 relative flex px-6 md:px-8 lg:px-10'>
                <div
                    id='experiences-tag'
                    className='absolute -left-[3.25rem] md:-left-[2.75rem] lg:-left-[2.25rem] top-20 lg:top-5 z-50 -rotate-90 italic text-white font-semibold'>
                    <span className='bg-primary-400 px-3 py-1 rounded-md italic text-sm'>
                        <span className='text-xs'>01.</span>
                        {` `}
                        Experiences
                    </span>
                </div>
                <div className='w-12 md:w-16 lg:w-20 flex justify-center -translate-x-6 md:-translate-x-8 lg:-translate-x-10'>
                    <div id='skills-line-0' className='h-full bg-primary-400 w-1 origin-top' />
                </div>
                <div className='hero-card lg:h-[283px] xl:h-[227px] 2xl:h-[197px] stripes-light overlapped-text-white flex-1 grid grid-cols-1 lg:grid-cols-3 gap-3 -translate-x-6 md:-translate-x-8 lg:-translate-x-10'>
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.dateSpan}
                            className='flex flex-col px-3 md:px-4 lg:px-6 py-3'>
                            <div className={classNames(index === 0 ? 'hidden' : '', 'lg:hidden')}>
                                <p className={classNames(lightTheme.body, ' italic text-sm')}>
                                    {experience.dateSpan}
                                </p>
                                <p
                                    className={classNames(
                                        lightTheme.title,
                                        'font-semibold text-lg'
                                    )}>
                                    {experience.title}
                                </p>
                            </div>
                            <p className={classNames(lightTheme.body, 'pb-3 lg:flex-1')}>
                                {experience.description}
                            </p>
                            <div className='flex space-x-2'>
                                {experience.resources.map(res => (
                                    <a
                                        key={res.link}
                                        href={res.link}
                                        target='_blank'
                                        className={classNames(
                                            lightTheme.body,
                                            'flex items-center space-x-2 border-b border-gray-400 italic cursor-pointer hover:border-primary-400 hover:text-primary-400 transition-colors'
                                        )}>
                                        <PaperClipIcon className='w-4 h-4' />
                                        <p>{res.name}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12 relative px-6 md:px-8 lg:px-10'>
                <div className='h-1 -z-10 absolute left-0 top-6 md:top-8 lg:top-10 w-full px-6 md:px-8 lg:px-10'>
                    <div id='skills-line-1' className='bg-primary-400 w-full h-1 origin-left' />
                </div>
                <div
                    id='point-0'
                    className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transform -translate-x-1/2 rounded-full bg-primary-400 flex justify-center items-center'>
                    <ChevronDoubleRightIcon id='point-0-icon' className='h-5 w-5 text-white' />
                </div>
            </div>
            <div className='w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12 relative px-6 md:px-8 lg:px-10'>
                <div className='space-x-10 pr-6 md:pr-8 lg:pr-10 relative'>
                    <div className='grid pl-6 md:pl-8 lg:pl-10 grid-cols-1 md:grid-cols-2 gap-3 self-baseline'>
                        {skills.map(s => (
                            <div
                                key={s.title}
                                className='skill-card stripes-light rounded-lg p-3 md:p-4 lg:p-6 space-y-2'>
                                <div className='flex items-center space-x-3'>
                                    <div className='bg-primary-400 p-2 rounded-lg h-min w-min'>
                                        <s.icon className='h-5 w-5 text-white' />
                                    </div>
                                    <h3
                                        className={classNames(
                                            lightTheme.title,
                                            'font-semibold text-lg overlapped-text-white'
                                        )}>
                                        {s.title}
                                    </h3>
                                </div>
                                <p className={classNames(lightTheme.body, 'overlapped-text-white')}>
                                    {s.description}
                                </p>
                                <div className='flex pt-2 gap-2 flex-wrap'>
                                    {s.tecnologies.map(t => (
                                        <div
                                            key={t}
                                            className='px-2 py-0.5 rounded-md bg-white w-fit text-sm'>
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='absolute -top-6 md:-top-8 lg:-top-10 right-0 h-6 md:h-8 lg:h-10'>
                        <div id='skills-line-2' className='h-full w-1 bg-primary-400 origin-top' />
                    </div>
                    <div className='absolute top-0 right-0 h-full origin-top'>
                        <div id='skills-line-3' className='h-full w-1 bg-primary-400 origin-top' />
                    </div>
                    <div
                        id='skills-tag'
                        className='absolute top-1/2 rotate-90 -right-[3.25rem] italic text-white font-semibold'>
                        <span className='bg-primary-400 px-3 py-1 rounded-md italic text-sm'>
                            <span className='text-xs'>02.</span>
                            {` `}
                            Skills
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12 relative px-6 md:px-8 lg:px-10 rotate-180'>
                <div className='h-1 -z-10 absolute left-0 top-6 md:top-8 lg:top-10 w-full px-6 md:px-8 lg:px-10'>
                    <div id='skills-line-4' className='bg-primary-400 w-full h-1 origin-left' />
                </div>
                <div
                    id='point-1'
                    className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transform -translate-x-1/2 rounded-full bg-primary-400 flex justify-center items-center'>
                    <ChevronDoubleRightIcon id='point-1-icon' className='h-5 w-5 text-white' />
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
