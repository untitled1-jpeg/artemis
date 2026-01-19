'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PageHero({ title, image }) {
    const heroRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Title Reveal (SplitText feel)
            gsap.from(titleRef.current, {
                y: 60,
                opacity: 0,
                duration: 1.5,
                ease: 'power4.out',
                delay: 0.2
            });

            // 2. Parallax Image Effect
            gsap.to(imageRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                y: 100, // Move image down slightly as we scroll up
                ease: 'none'
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <header className="page-hero" ref={heroRef} style={{ position: 'relative', height: '60vh', overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-teal)' }}>
            <div
                ref={imageRef}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: 0,
                    width: '100%',
                    height: '120%', // Over-sized for parallax room
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(1) brightness(0.6)',
                    zIndex: 1
                }}
            />
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <h1 ref={titleRef} style={{ color: 'var(--color-white)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: 0 }}>
                    {title}
                </h1>
            </div>
        </header>
    );
}
