'use client';
import Link from 'next/link';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CAROUSEL_IMAGES = [
    '/images/team/Test-photo.webp',
    'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1519085360753-af0119f7fbbe?auto=format&fit=crop&q=80&w=1000'
];

export default function Team({ data }) {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imagesContainerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const content = {
        title: data?.title || "THE ARTEMIS TEAM",
        text: data?.content || "Founded by Anne Jones, Artemis is small by design, high-touch by choice, and relentless about doing what's right - for advisors and the clients they serve.",
        ctaLabel: data?.ctaLabel || "MEET THE TEAM"
    };

    // Initial Entrance Animation
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                }
            });

            tl.to(imagesContainerRef.current, {
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out'
            })
                .to(contentRef.current, {
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power3.out'
                }, "-=1.5");
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Carousel Auto-rotation Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Handle Image Transitions
    useEffect(() => {
        const images = imagesContainerRef.current?.querySelectorAll('.carousel-img');
        if (!images) return;

        images.forEach((img, idx) => {
            gsap.to(img, {
                opacity: idx === currentIndex ? 1 : 0,
                duration: 1.5,
                ease: 'power2.inOut'
            });
        });
    }, [currentIndex]);

    return (
        <section className="team" ref={sectionRef}>
            <div
                className="team-image-container"
                ref={imagesContainerRef}
                style={{
                    opacity: 0,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {CAROUSEL_IMAGES.map((src, idx) => (
                    <div
                        key={src}
                        className="carousel-img"
                        style={{
                            backgroundImage: `url(${src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: idx === 0 ? 1 : 0,
                            filter: 'grayscale(1)'
                        }}
                    ></div>
                ))}
            </div>
            <div className="team-content" ref={contentRef} style={{ opacity: 0 }}>
                <div className="split-content-anchor" style={{ maxWidth: '480px' }}>
                    <h2 className="serif" style={{ letterSpacing: '0.25rem', marginBottom: 'var(--editorial-gap)' }}>{content.title}</h2>
                    <p style={{ lineHeight: '1.7', marginBottom: 'var(--editorial-gap)', fontWeight: '300' }}>{content.text}</p>
                    <Link href="/team" className="learn-more" style={{ color: 'white', cursor: 'pointer' }}>
                        <span className="cta-text">{content.ctaLabel}</span>&rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
