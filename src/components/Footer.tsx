// Config
import { darkTheme } from '../config/theme';

// Utils
import { classNames } from '../utils/css';

// Others
import { EnvelopeIcon } from '@heroicons/react/24/outline';

function Footer() {
    // Methods
    const onClick = () => {
        const mailtoLink = 'mailto:marco.raffaello@libero.it';
        window.location.href = mailtoLink;
    };

    // Render
    return (
        <div
            className={classNames(
                darkTheme.background,
                'md:rounded-lg grid place-items-center pb-6 md:pb-8 lg:pb-10'
            )}>
            <div className='w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12 flex flex-col px-6 md:px-8 lg:px-10'>
                <div className='relative w-1/2 h-6 md:h-8 lg:h-10 px-6 md:px-8 lg:px-10'>
                    <div
                        id='footer-line-0'
                        className='absolute h-full left-0 top-0 bg-primary-400 w-1 -translate-x-1/2 origin-top'
                    />
                    <div
                        id='footer-line-1'
                        className='absolute w-full translate-x-0.5 h-1 bottom-0 left-0 bg-primary-400 origin-left'
                    />
                </div>
                <div
                    onClick={onClick}
                    className='w-full flex flex-col justify-center items-center cursor-pointer'>
                    <div id='footer-line-2' className='h-20 bg-primary-400 w-1 origin-top' />
                    <div
                        id='point-2'
                        className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-primary-400 text-white font-bold flex justify-center items-center'>
                        <EnvelopeIcon id='point-2-icon' className='h-5 w-5 text-white' />
                    </div>
                    <div id='footer-tag' className='mt-6 z-50 italic text-white font-semibold'>
                        <span className='bg-primary-400 px-3 py-1 rounded-md italic text-sm'>
                            <span className='text-xs'>04.</span>
                            {` `}
                            Get in touch
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
