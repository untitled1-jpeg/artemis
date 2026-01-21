'use client';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
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
                }, "-=1.5");
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="contact contact-layout" id="connect" ref={sectionRef}
            style={{ background: '#8d979e' }}>
            <div className="contact-image" ref={imageRef}
                style={{ background: "url('/images/team/img_coffee.webp') center/cover", filter: 'grayscale(1)', minHeight: '40vh' }}>
            </div>
            <div className="contact-box" ref={contentRef}
                style={{ padding: '6rem 6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#8d979e' }}>
                <div className="split-content-anchor" style={{ maxWidth: '480px' }}>
                    <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)', textTransform: 'none', color: 'white', lineHeight: '1.1', letterSpacing: 'normal', fontWeight: '300' }}>Life
                        insurance is personal. So are we. Let&apos;s meet for coffee or a cocktail.</h2>
                    <Link href="/connect" className="learn-more"
                        style={{ color: 'white', cursor: 'pointer' }}><span className="cta-text">CONTACT US</span> <span className="learn-more-arrow">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
