'use client';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Mission({ data }) {
    const sectionRef = useRef(null);
    const headlineRef = useRef(null);

    const content = {
        title: data?.title || "THE ARTEMIS MISSION",
        body: data?.body || "At Artemis, we approach every relationship with both creativity and sensitivity, creating coverage that is personal, purposeful, and perfectly aligned with each client's individual goals.",
        ctaLabel: data?.ctaLabel || "LEARN MORE"
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(headlineRef.current.children, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 1.5,
                ease: 'power3.out'
            });

            const curves = sectionRef.current.querySelectorAll('.mission-curve');
            curves.forEach((el, i) => {
                const length = el.getTotalLength();
                el.style.strokeDasharray = length;
                el.style.strokeDashoffset = length;

                gsap.to(el, {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    },
                    strokeDashoffset: 0,
                    duration: 3 + (i * 0.5),
                    ease: 'sine.inOut',
                    delay: i * 0.2,
                    repeat: -1,
                    yoyo: true
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="mission" ref={sectionRef}>
            <div className="container">
                <div className="mission-grid" style={{ position: 'relative' }}>
                    <div className="mission-headline" ref={headlineRef}>
                        <h2 style={{ opacity: 0, transform: 'translateY(var(--editorial-gap))', marginBottom: 'var(--editorial-gap)', lineHeight: '1.25' }}>{content.title}</h2>
                        <p style={{ opacity: 0, transform: 'translateY(var(--editorial-gap))' }}>{content.body}</p>
                        <Link href="/mission" className="learn-more" style={{ opacity: 0, transform: 'translateY(var(--editorial-gap))', cursor: 'pointer' }}>
                            <span className="cta-text">{content.ctaLabel}</span> <span className="learn-more-arrow">&rarr;</span>
                        </Link>
                    </div>
                    <div className="curves-container" style={{ position: 'absolute', bottom: '-4rem', right: '-7rem', width: '600px', pointerEvents: 'none', zIndex: 10 }}>
                        <svg viewBox="0 0 275.6 147" fill="none" xmlns="http://www.w3.org/2000/svg"
                            style={{ width: '100%', display: 'block' }}>
                            <path id="mission-curve-1" className="mission-curve" d="M17.27,146.98c71.86-41.87,204.96-117.16,292.44-2.5"
                                stroke="#C2954D" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
                            <path id="mission-curve-2" className="mission-curve" d="M17.27,146.98c65.41-60.41,186.56-169.05,266.19-3.61"
                                stroke="#C2954D" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
                            <path id="mission-curve-3" className="mission-curve" d="M17.27,146.98c51.59-77.58,147.15-217.1,209.96-4.63"
                                stroke="#C2954D" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
                            <path id="mission-curve-4" className="mission-curve" d="M17.27,146.98c33.24-90.4,94.81-252.99,135.28-5.4"
                                stroke="#C2954D" strokeWidth="0.5" strokeLinecap="round" opacity="0.6" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
