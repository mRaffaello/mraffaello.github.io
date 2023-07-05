// React
import { useEffect, useRef } from 'react';

// Hooks
import useTransition from './hooks/useTransition';

// Components
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Pointer from './components/Pointer';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

// Types
import { SECTION_THEME } from './types/enums';

// Others
import gsap from 'gsap';

export type MouseBoundaries = {
    xInf: number;
    xSup: number;
    yInf: number;
    ySup: number;
    centerX: number;
    centerY: number;
    size?: string;
    xMultiplier?: number;
    yMultiplier?: number;
};

const mouseBoundaries: MouseBoundaries[] = [];

function App() {
    // Hooks
    useTransition();

    // References
    const clientYRef = useRef(0);

    // Methods
    const _getTargetCoordinates = (clientX: number, clientY: number) => {
        let minDistance = Infinity;
        let nearestBound: MouseBoundaries | undefined = undefined;
        for (const b of mouseBoundaries) {
            const { xInf, xSup, yInf, ySup, centerX, centerY } = b;
            if (clientX >= xInf && clientX <= xSup && clientY >= yInf && clientY <= ySup) {
                const distance = Math.sqrt((clientX - centerX) ** 2 + (clientY - centerY) ** 2);

                if (distance < minDistance) {
                    minDistance = distance;
                    nearestBound = b;
                }
            }
        }

        if (nearestBound) {
            const { centerX, centerY, size } = nearestBound;
            const x = (centerX / window.innerWidth) * 100;
            const y = (centerY / window.innerHeight) * 100;

            return { x, y, size: size || '50px' };
        }

        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;

        return { x, y, size: '150px' };
    };

    const onMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;

        const overlay = document.querySelector(`#app-overlay`) as HTMLElement;

        const { x, size } = _getTargetCoordinates(clientX, clientY);

        gsap.to(overlay, {
            '--x': `${x}%`,
            '--y': `${clientY + window.scrollY}px`,
            '--size': size,
            duration: 0.2,
            ease: 'sine.out'
        });

        clientYRef.current = clientY;
    };

    const onScroll = () => {
        if (!clientYRef.current) return;
        const overlay = document.querySelector(`#app-overlay`) as HTMLElement;

        gsap.to(overlay, {
            '--y': `${clientYRef.current + window.scrollY}px`,
            duration: 0.2
        });
    };

    // Effects
    useEffect(() => {
        window.addEventListener('mousemove', onMove);
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    // Render
    return (
        <div className='min-h-screen w-screen'>
            <div id='app-base' className='md:p-2 absolute w-full top-0'>
                <HeroSection theme={SECTION_THEME.DARK} />
                <SkillsSection />
                <ProjectsSection />
                <Footer />
            </div>
            <div id='app-overlay' className='md:p-2 absolute w-full top-0'>
                <HeroSection theme={SECTION_THEME.LIGHT} />
            </div>
            <Pointer />
        </div>
    );
}

export default App;
