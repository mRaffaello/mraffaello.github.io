function LinkedinIcon() {
    // Render
    return (
        <div className='h-6 w-6 rounded-full transition-colors relative'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 text-gray-700 transition-all hover:scale-110'>
                <title>LinkedIn</title>
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                <rect x='2' y='9' width='4' height='12'></rect>
                <circle cx='4' cy='4' r='2'></circle>
            </svg>
        </div>
    );
}

export default LinkedinIcon;
