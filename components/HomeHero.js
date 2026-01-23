'use client';
import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero({ data }) {
    const heroRef = useRef(null);
    const logoRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const bgRef = useRef(null);

    const content = {
        headline: (data?.headline || "Artemis is an independent\nlife insurance advisory.").trim(),
        subheadline: data?.subheadline || "We don't sell products. We create solutions. It's all we do, and we do it better than anyone. Our independence gives us an objective lens, our size keeps us personal, and our mission is simple: make life insurance feel human again."
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 }, delay: 0.1 });

            // Entrance Sequence (Fast & Synchronized)
            tl.fromTo(bgRef.current,
                { opacity: 0, scale: 1.05 },
                { opacity: 0.05, scale: 1, duration: 1.5, ease: 'power2.out' },
                0
            )
                .to(logoRef.current, { opacity: 1, duration: 0.8 }, 0.1)
                .to(titleRef.current, { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 0.8 }, 0.2)
                .to(textRef.current, { opacity: 0.9, y: 0, duration: 0.8 }, 0.4);

            // Scroll Effect (Fade out logo & Toggle Nav)
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom 400px',
                scrub: true,
                onUpdate: (self) => {
                    // 1. Hero Logo Fade Out
                    if (logoRef.current) {
                        logoRef.current.style.opacity = Math.max(0, 1 - self.progress * 2);
                        logoRef.current.style.transform = `translateY(${-self.progress * 50}px)`;
                    }

                    // 2. Nav Logo Fade In (Toggle Class)
                    const nav = document.querySelector('#main-nav');
                    if (nav) {
                        if (self.progress > 0.1) {
                            nav.classList.add('scrolled');
                        } else {
                            nav.classList.remove('scrolled');
                        }
                    }
                }
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <header className="page-hero home-hero-v2" ref={heroRef} style={{
            position: 'relative',
            minHeight: '97vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--color-teal)'
        }}>
            {/* Ghosted Background Image */}
            {/* Ghosted Background Image with Gradient Overlay */}
            <div className="hero-ghost-bg" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none'
            }}>
                {/* Image Layer (Animated Base Opacity) */}
                <div ref={bgRef} style={{ position: 'absolute', inset: 0, opacity: 0 }}>
                    <Image
                        src="/images/team/img_hero-test.webp"
                        alt=""
                        fill
                        style={{ objectFit: 'cover', filter: 'grayscale(1)' }}
                        priority
                    />
                </div>
                {/* 100% Teal Gradient Overlay (Top Left to Bottom Right) */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, var(--color-teal) 0%, transparent 100%)',
                    opacity: 1
                }} />
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>

                {/* Logo Container - Left Aligned */}
                <div ref={logoRef} className="hero-logo-container" style={{ width: '450px', marginBottom: '2.5rem', opacity: 0 }}>
                    <svg viewBox="0 0 214.73 125.85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M213.58,69.76c-4.62,5.44-12.28-4.24-7.71-10.25.62-.82,1.58-1.33,2.6-1.48h0c1.49-.22,3.01.36,3.88,1.59,2.13,3,3.44,7.54,1.23,10.14Z" fill="#c29850" />
                        <path d="M136.5,67.03l-15.37.52c-4.69,24.84-15.78,37.94-25.2,51.62-2.64,3.84-.16,7.4-9.17,6.56-2.49-.23-4.17-5.48-4.15-7.85.04-3.67,3.88-4.95,5.83-8.63,5.13-9.69,8.65-28.34,4.03-38.43l-18.47,1.89c-10.2,10.49-55.67,49.97-68.8,49.2-3.92-.23-7.16-6.42-3.81-9.23.95-.8,6.56-1.73,8.72-2.68,16.28-7.14,34.96-24.46,48.26-36.12-12.51-1.75-34.89-.48-42.28-12.95-1.79-3.02-3.67-8.32,1.25-11.41,10.63-6.68,51.64-9.11,64.27,2.52,11.5-15.2,27.89-31.02,28.29-51.31,9.06-3.92,12.22,8.83,13.21,15.64,2.08,14.31,3.17,28.51.14,42.5,0,0,23.99.45,27.37.06,9.91-1.15,12.61.02,23.24-.52l11.57-.69c4.24-.21,7.46,1.58,8.95,5.56,1.15,3.08.35,6.05-4.7,6.35-2.02.12-4.08-.8-6.32-.86l-46.85-1.75ZM113.47,60.22c3.61-12.96,2.78-25.34,1.35-38.57l-24.81,35.22s2.96,1.12,5.38,3.64c6.85-.66,10.62-.72,18.08-.29ZM75.29,57.92c-13.49-9.04-35.53-7.98-50.09-2.79-1.7.61-2.02-.33-1.65,2.52,7.77,5.79,40.79,8.74,47.5,4.89,1.04-.59,5.2-3.38,4.23-4.62ZM101.49,95.4c5.77-8.2,10.68-25.6,9.72-26.91l-10.63,1.09c3.51,6.87,1.6,20.36.91,25.82Z" fill="#c29850" />
                    </svg>
                </div>

                {/* Headline - Left Aligned */}
                <h1 ref={titleRef} className="home-hero-headline" style={{
                    color: 'var(--color-gold)',
                    fontSize: '3.75rem',
                    margin: '0 0 2rem 0',
                    textTransform: 'none',
                    textAlign: 'left',
                    lineHeight: '1',
                    letterSpacing: '-0.01em',
                    fontWeight: 300,
                    opacity: 0,
                    transform: 'translateY(30px)',
                    clipPath: 'inset(100% 0 0 0)' // Prepare for wipe
                }}>
                    Artemis is an independent <br className="hero-break" />
                    <span className="hero-nowrap">life insurance advisory.</span>
                </h1>

                {/* Subhead - Left Aligned */}
                <p ref={textRef} style={{
                    fontFamily: '"classico-urw", serif',
                    fontSize: '1.4rem',
                    maxWidth: '650px',
                    lineHeight: '1.6',
                    color: 'var(--color-white)',
                    fontWeight: 400,
                    textAlign: 'left',
                    opacity: 0,
                    transform: 'translateY(20px)'
                }}>
                    {content.subheadline}
                </p>

            </div>

            <div className="scroll-indicator">
                <div className="scroll-line"></div>
            </div>
        </header>
    );
}
