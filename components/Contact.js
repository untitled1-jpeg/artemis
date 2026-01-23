'use client';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact({
    title = "Life insurance is personal. So are we. Let’s meet for coffee or a cocktail.",
    image = "/images/team/img_coffee.webp",
    variant = "teal" // "teal" or "gold"
}) {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    const isGold = variant === 'gold';

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                }
            });

            tl.from(imageRef.current, {
                opacity: 0,
                duration: 1.5,
                ease: 'power3.out'
            })
                .from(contentRef.current, {
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power3.out'
                }, "-=1.2")
                .from(imageRef.current.querySelector('img'), {
                    scale: 1.10,
                    duration: 2.5,
                    ease: 'power2.out'
                }, 0);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="contact contact-layout" id="connect" ref={sectionRef}
            style={{ background: isGold ? 'var(--color-gold)' : '#8d979e' }}>
            <div className="contact-image" ref={imageRef}
                style={{ position: 'relative', minHeight: '40vh', overflow: 'hidden' }}>
                <Image
                    src={image}
                    alt="CTA Image"
                    fill
                    style={{
                        objectFit: 'cover',
                        filter: 'grayscale(1)'
                    }}
                />
            </div>
            <div className="contact-box" ref={contentRef}
                style={{ backgroundColor: isGold ? 'var(--color-gold)' : '#8d979e' }}>
                <div className="split-content-anchor" style={{ maxWidth: '480px' }}>
                    <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)', textTransform: 'none', color: 'white', lineHeight: '1.2', letterSpacing: 'normal', fontWeight: '300' }}>
                        {title}
                    </h2>
                    <Link href="/connect" className="learn-more"
                        style={{ color: 'white', cursor: 'pointer' }}><span className="cta-text">CONTACT US</span> <span className="learn-more-arrow">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
