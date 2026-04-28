'use client';
import Link from 'next/link';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CAROUSEL_IMAGES = [
    '/images/img_anne-v2.jpg',
    '/images/img_bianca-v2.jpg',
    '/images/img_lulu-v2.jpg'
];

export default function Team({ data }) {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imagesContainerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const content = {
        title: data?.title || "THE ARTEMIS TEAM",
        text: data?.content || "Founded by Anne Jones, Artemis is small by design, high-touch by choice, and relentless about doing what's right - for advisors and the clients they serve.",
        ctaLabel: data?.ctaLabel || "MEET THE TEAM",
        images: data?.featuredImage ? [data.featuredImage, ...CAROUSEL_IMAGES.slice(1)] : CAROUSEL_IMAGES
    };

    // Entrance animation removed to ensure instant masking of mission curves

    // Carousel Auto-rotation Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % content.images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Handle Image Transitions and Parallax
    useEffect(() => {
        const images = imagesContainerRef.current?.querySelectorAll('.carousel-img');
        if (!images) return;

        const ctx = gsap.context(() => {
            // Parallax effect
            images.forEach(img => {
                gsap.fromTo(img,
                    { yPercent: 0 },
                    {
                        yPercent: -20, // Moves up by 20% of 125% height (25% of container)
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Handle Image Opacity Transitions
    useEffect(() => {
        const images = imagesContainerRef.current?.querySelectorAll('.carousel-img');
        if (!images) return;

        images.forEach((img, idx) => {
            gsap.to(img, {
                opacity: idx === currentIndex ? 1 : 0,
                duration: 1.2,
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
                    opacity: 1,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {content.images.map((src, idx) => (
                    <div
                        key={src}
                        className="carousel-img"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '125%', // 25% slack for pronounced parallax
                            opacity: idx === 0 ? 1 : 0,
                            zIndex: idx === currentIndex ? 2 : 1
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Team Image ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                                filter: 'grayscale(1)'
                            }}
                            priority={idx === 0}
                        />
                    </div>
                ))}
            </div>
            <div className="team-content" ref={contentRef} style={{ opacity: 1 }}>
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
