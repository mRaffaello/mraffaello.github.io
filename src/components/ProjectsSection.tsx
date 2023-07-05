// Others
import { PaperClipIcon } from '@heroicons/react/24/outline';

function ProjectsSection() {
    // Render
    return (
        <section className='grid place-items-center'>
            <div className='w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12 relative px-6 md:px-8 lg:px-10'>
                <div
                    id='projects-line-0'
                    className='absolute -top-[28px] md:-top-[36px] lg:-top-[44px] -translate-x-1/2 h-12 w-1 bg-primary-400 origin-top'
                />
                <div className='flex w-full relative'>
                    <div
                        id='projects-tag'
                        className='absolute -left-[6.75rem] top-28 lg:top-28 z-50 -rotate-90 italic text-white font-semibold'>
                        <span className='bg-primary-400 px-3 py-1 rounded-md italic text-sm'>
                            <span className='text-xs'>03.</span>
                            {` `}
                            Open source projects
                        </span>
                    </div>
                    <div className='w-12 md:w-16 lg:w-20 flex justify-center -translate-x-6 md:-translate-x-8 lg:-translate-x-10'>
                        <div
                            id='projects-line-1'
                            className='h-full bg-primary-400 w-1 origin-top'
                        />
                    </div>
                    <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 -translate-x-6 md:-translate-x-8 lg:-translate-x-10 mb-6 md:mb-8 lg:mb-10'>
                        <div className='project-card py-8 stripes-light'>
                            <div className='flex flex-col items-center'>
                                <div className='text-3xl font-extrabold text-center w-fit text-white bg-primary-400 px-2 '>
                                    reTables
                                </div>
                                <div className='text-lg font-extrabold text-white bg-primary-400 px-2 mt-1'>
                                    Yet another react table library
                                </div>
                                <div className='flex items-center mt-6 space-x-2'>
                                    <div className='font-medium italic cursor-pointer flex items-center space-x-2 bg-white text-gray-600 px-2'>
                                        <PaperClipIcon className='h-4 w-4' />
                                        <a href='https://retables.github.io/' target='_blank'>
                                            Documentation
                                        </a>
                                    </div>
                                    <div className='font-medium italic cursor-pointer flex items-center space-x-2 bg-white text-gray-600 px-2'>
                                        <PaperClipIcon className='h-4 w-4' />
                                        <a
                                            href='https://github.com/retables/retables'
                                            target='_blank'>
                                            Github
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='project-card py-8 stripes-light'>
                            <div className='flex flex-col items-center'>
                                <div className='text-3xl font-extrabold text-center w-fit text-white bg-primary-400 px-2'>
                                    JS Import Oganizer
                                </div>
                                <div className='text-lg font-extrabold text-white bg-primary-400 px-2 mt-1'>
                                    Automatic import sorting
                                </div>
                                <div className='flex items-center mt-6 space-x-2'>
                                    <div className='font-medium italic cursor-pointer flex items-center space-x-2 bg-white text-gray-600 px-2'>
                                        <PaperClipIcon className='h-4 w-4' />
                                        <a
                                            href='https://marketplace.visualstudio.com/items?itemName=mRaffaello.vs-code-js-import-organizer'
                                            target='_blank'>
                                            Store page
                                        </a>
                                    </div>
                                    <div className='font-medium italic cursor-pointer flex items-center space-x-2 bg-white text-gray-600 px-2'>
                                        <PaperClipIcon className='h-4 w-4' />
                                        <a
                                            href='https://github.com/mRaffaello/vs-code-js-import-organizer'
                                            target='_blank'>
                                            Github
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
