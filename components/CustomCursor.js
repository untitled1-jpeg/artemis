'use client';
import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useLayoutEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // QuickTo for high performance
        const xCursorTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
        const yCursorTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
        const xFollowerTo = gsap.quickTo(follower, "x", { duration: 0.4, ease: "power3" });
        const yFollowerTo = gsap.quickTo(follower, "y", { duration: 0.4, ease: "power3" });

        const moveCursor = (e) => {
            if (!isVisible) setIsVisible(true);
            xCursorTo(e.clientX);
            yCursorTo(e.clientY);
            xFollowerTo(e.clientX);
            yFollowerTo(e.clientY);
        };

        const handleHover = () => {
            gsap.to(follower, {
                scale: 1.5,
                backgroundColor: 'rgba(194, 152, 80, 0.2)',
                borderColor: 'var(--color-gold)',
                duration: 0.3
            });
            gsap.to(cursor, {
                scale: 0.5,
                duration: 0.3
            });
        };

        const handleHoverOut = () => {
            gsap.to(follower, {
                scale: 1,
                backgroundColor: 'transparent',
                borderColor: 'var(--color-gold)',
                duration: 0.3
            });
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3
            });
        };

        window.addEventListener('mousemove', moveCursor);

        // Delegation for better performance and handling dynamic elements
        const handleInteraction = (e) => {
            const target = e.target.closest('a, button, .learn-more, .icon-box, .btn-connect');
            if (target) {
                if (e.type === 'mouseenter' || e.type === 'mouseover') handleHover();
                if (e.type === 'mouseleave' || e.type === 'mouseout') handleHoverOut();
            }
        };

        document.addEventListener('mouseover', handleInteraction);
        document.addEventListener('mouseout', handleInteraction);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleInteraction);
            document.removeEventListener('mouseout', handleInteraction);
        };
    }, [isVisible]);

    return (
        <div className="custom-cursor" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: 'none' }}>
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
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </div>
    );
}
