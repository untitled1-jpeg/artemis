'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
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
            <div className="team-image" ref={imageRef}></div>
            <div className="team-content" ref={contentRef}>
                <div className="split-content-anchor">
                    <h2>THE ARTEMIS TEAM</h2>
                    <p>Founded by Anne Jones, Artemis is small by design, high-touch by choice, and relentless about doing what&apos;s
                        right - for advisors and the clients they serve.</p>
                    <div className="learn-more"
                        style={{ color: 'white', borderBottom: '1px solid white', width: 'fit-content', paddingBottom: '2px' }}>MEET THE TEAM
                        &rarr;</div>
                </div>
            </div>
        </section>
    );
}
