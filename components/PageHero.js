'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PageHero({ title, image, bgPos = 'center' }) {
    const heroRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);

    useLayoutEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            // 1. Title Reveal (Atmospheric Wipe)
            if (titleRef.current) {
                gsap.to(titleRef.current, {
                    clipPath: 'inset(0% 0 0 0)',
                    y: 0,
                    duration: 1.8,
                    ease: 'power4.out',
                    delay: 0.3
                });
            }

            // 2. Parallax Image Effect
            if (imageRef.current) {
                // Entrance Scale Animation
                gsap.from(imageRef.current, {
                    scale: 1.05,
                    duration: 2.5,
                    ease: 'power2.out'
                });

                gsap.to(imageRef.current, {
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true
                    },
                    y: 50, // Reduced from 100 for more subtle effect
                    ease: 'none'
                });
            }
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <header className="page-hero" ref={heroRef} style={{ position: 'relative', height: '75vw', maxHeight: '90vh', overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-teal)' }}>
            <div
                ref={imageRef}
                style={{
                    position: 'absolute',
                    top: '-5%', // Reduced from -10%
                    left: 0,
                    width: '100%',
                    height: '110%', // Reduced from 120% for less "zoom"
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: bgPos,
                    filter: 'grayscale(1) brightness(0.6)',
                    zIndex: 1
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 70%)',
                    zIndex: 2,
                    pointerEvents: 'none'
                }}
            />
            <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
                <h1 style={{
                    color: 'var(--color-white)',
                    fontSize: '4.5rem',
                    margin: 0,
                    textTransform: 'uppercase',
                    textAlign: 'left',
                    maxWidth: '50%',
                    lineHeight: '1.1'
                }} className="reveal-wipe">
                    <span ref={titleRef} className="reveal-text-wipe" style={{ display: 'block', whiteSpace: 'pre-line' }}>
                        {title}
                    </span>
                </h1>
            </div>
            <div className="scroll-indicator">
                <div className="scroll-line"></div>
            </div>
        </header>
    );
}
