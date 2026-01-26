'use client';
import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero({ data }) {
    const heroRef = useRef(null);
    const logoRef = useRef(null);
    const videoRef = useRef(null);
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
                .add(() => {
                    if (videoRef.current) {
                        videoRef.current.play().catch(err => console.error("Video play failed:", err));
                    }
                }, 0.5) // Increased delay for drawing animation
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
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    >
                        {/* Safari support for HEVC with Alpha */}
                        <source src="/video_Artemis-A.mov" type='video/quicktime; codecs="hvc1"' />
                        {/* Chrome/Firefox support for VP9 with Alpha */}
                        <source src="/video_Artemis-A.webm" type="video/webm; codecs=vp9" />
                    </video>
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
