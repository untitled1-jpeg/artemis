'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Team({ data }) {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    const content = {
        title: data?.title || "THE ARTEMIS TEAM",
        text: data?.content || "Founded by Anne Jones, Artemis is small by design, high-touch by choice, and relentless about doing what's right - for advisors and the clients they serve.",
        image: data?.featuredImage || null,
        ctaLabel: data?.ctaLabel || "MEET THE TEAM"
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                }
            });

            tl.from(imageRef.current, {
                x: -100,
                opacity: 0,
                duration: 1.5,
                ease: 'power3.out'
            })
                .from(contentRef.current, {
                    x: 100,
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power3.out'
                }, "-=1.5");
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="team" ref={sectionRef}>
            <div
                className="team-image"
                ref={imageRef}
                style={content.image ? { backgroundImage: `url(${content.image})`, backgroundSize: 'cover' } : {}}
            ></div>
            <div className="team-content" ref={contentRef}>
                <div className="split-content-anchor">
                    <h2>{content.title}</h2>
                    <p>{content.text}</p>
                    <div className="learn-more"
                        style={{ color: 'white', borderBottom: '1px solid white', width: 'fit-content', paddingBottom: '2px' }}>
                        {content.ctaLabel} &rarr;
                    </div>
                </div>
            </div>
        </section>
    );
}
