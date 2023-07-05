function GithubIcon() {
    // Render
    return (
        <div className='h-6 w-6 rounded-full transition-colors relative'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1x'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 text-gray-700 transition-all hover:scale-110'>
                <title>GitHub</title>
                <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
            </svg>
        </div>
    );
}

export default GithubIcon;
