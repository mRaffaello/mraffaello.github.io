// React
import { useEffect, useRef } from 'react';

function Pointer() {
    // References
    const circlesRef = useRef<NodeListOf<any>>();
    const coordsRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight * 0.15 });

    // Methods
    const animateCircles = () => {
        let x = coordsRef.current.x;
        let y = coordsRef.current.y;

        circlesRef.current?.forEach((circle, index) => {
            circle.style.left = x - 12 + 'px';
            circle.style.top = y - 12 + 'px';

            circle.style.scale = (circlesRef.current!.length - index) / circlesRef.current!.length;

            circle.x = x;
            circle.y = y;

            const nextCircle = circlesRef.current![index + 1] || circlesRef.current![0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
    };

    const move = (e: MouseEvent) => {
        // Check if circles have been found
        if (!circlesRef.current) return;

        // Get coordinates
        const { clientX, clientY } = e;
        coordsRef.current.x = clientX;
        coordsRef.current.y = clientY;
    };

    // Effects
    useEffect(() => {
        // Add move listener
        window.addEventListener('mousemove', move);

        // Get all circles
        circlesRef.current = document.querySelectorAll<any>('.circle');

        // Set initial properties
        circlesRef.current.forEach(circle => {
            circle.x = 0;
            circle.y = 0;
        });

        animateCircles();

        // Remove listeners on unmount
        return () => {
            window.removeEventListener('mousemove', move);
        };
    }, []);

    // Render
    return (
        <div id='pointer' className='hidden'>
            <div id='first-circle' className='circle' style={{ backgroundColor: '#ffb56b' }} />
            <div className='circle' style={{ backgroundColor: '#fdaf69' }} />
            <div className='circle' style={{ backgroundColor: '#f89d63' }} />
            <div className='circle' style={{ backgroundColor: '#f59761' }} />
            <div className='circle' style={{ backgroundColor: '#ef865e' }} />
            <div className='circle' style={{ backgroundColor: '#ec805d' }} />
            <div className='circle' style={{ backgroundColor: '#e36e5c' }} />
            <div className='circle' style={{ backgroundColor: '#df685c' }} />
            <div className='circle' style={{ backgroundColor: '#d5585c' }} />
            <div className='circle' style={{ backgroundColor: '#d1525c' }} />
            <div className='circle' style={{ backgroundColor: '#c5415d' }} />
            <div className='circle' style={{ backgroundColor: '#c03b5d' }} />
            <div className='circle' style={{ backgroundColor: '#b22c5e' }} />
            <div className='circle' style={{ backgroundColor: '#ac265e' }} />
            <div className='circle' style={{ backgroundColor: '#9c155f' }} />
            <div className='circle' style={{ backgroundColor: '#950f5f' }} />
            <div className='circle' style={{ backgroundColor: '#830060' }} />
            <div className='circle' style={{ backgroundColor: '#7c0060' }} />
            <div className='circle' style={{ backgroundColor: '#680060' }} />
            <div className='circle' style={{ backgroundColor: '#60005f' }} />
            <div className='circle' style={{ backgroundColor: '#48005f' }} />
            <div className='circle' style={{ backgroundColor: '#3d005e' }} />
        </div>
    );
}

export default Pointer;
