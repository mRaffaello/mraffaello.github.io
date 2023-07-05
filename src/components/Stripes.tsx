// React
import { useRef } from 'react';

// Utils
import { classNames } from '../utils/css';

// Types
import { SECTION_THEME } from '../types/enums';

type StripesProps = {
    theme: SECTION_THEME;
};

function Stripes(props: StripesProps) {
    // References
    const stripesRef = useRef<HTMLDivElement>(null);

    // Render
    return (
        <div className='flex h-full items-center absolute -top-8 px-12 md:px-16 lg:px-0 lg:top-12 right-0 lg:right-20 w-full lg:w-2/3'>
            <div
                id={`stripes-${props.theme}`}
                ref={stripesRef}
                className={classNames(
                    props.theme === SECTION_THEME.DARK ? 'stripes-dark' : 'stripes-light',
                    'h-[160px] w-full'
                )}
            />
        </div>
    );
}

export default Stripes;
