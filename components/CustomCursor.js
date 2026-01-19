'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        const handleHover = () => {
            gsap.to(follower, {
                scale: 2.5,
                backgroundColor: 'rgba(194, 152, 80, 0.15)', // var(--color-gold) with opacity
                border: 'none',
                duration: 0.3
            });
        };

        const handleHoverOut = () => {
            gsap.to(follower, {
                scale: 1,
                backgroundColor: 'transparent',
                border: '1px solid var(--color-gold)',
                duration: 0.3
            });
        };

        window.addEventListener('mousemove', moveCursor);

        const interactiveElements = document.querySelectorAll('a, button, .learn-more, .icon-box');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleHoverOut);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleHoverOut);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--color-gold)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div
                ref={followerRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '40px',
                    height: '40px',
                    border: '1px solid var(--color-gold)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    transform: 'translate(-50%, -50%)',
                    transition: 'transform 0.1s ease-out'
                }}
            />
        </>
    );
}
