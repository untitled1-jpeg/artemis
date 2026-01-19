'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Advisor({ data }) {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    const content = {
        title: data?.title || "ADVISOR ACCESS",
        body: data?.body || "In a world of constant change, the right advisor makes the difference. Artemis provides the objective lens and creative solutions you need to protect what matters most.",
        ctaLabel: data?.ctaLabel || "ACCESS PORTAL"
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current.children, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                opacity: 0,
                y: 30,
                stagger: 0.2,
                duration: 1.5,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="advisor-access" ref={sectionRef}>
            <div className="container">
                <div className="advisor-content" ref={contentRef}>
                    <h2>{content.title}</h2>
                    <p>{content.body}</p>
                    <div className="advisor-cta">{content.ctaLabel} &rarr;</div>
                </div>
            </div>
        </section>
    );
}
