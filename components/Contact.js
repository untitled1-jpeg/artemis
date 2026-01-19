'use client';
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
        <section className="contact" id="connect" ref={sectionRef}
            style={{ padding: '0', display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--color-slate)' }}>
            <div className="contact-image" ref={imageRef}
                style={{ background: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000') center/cover", filter: 'grayscale(1)', minHeight: '50vh' }}>
            </div>
            <div className="contact-box" ref={contentRef}
                style={{ padding: '8rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--color-slate)', alignItems: 'flex-start' }}>
                <div className="split-content-anchor">
                    <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '2.5rem', textTransform: 'none', color: 'white' }}>Life
                        insurance is personal. So are we. Let&apos;s meet for coffee or a cocktail.</h3>
                    <div className="learn-more"
                        style={{ color: 'white', borderBottom: '1px solid white', width: 'fit-content', paddingBottom: '2px' }}>CONTACT US &rarr;
                    </div>
                </div>
            </div>
        </section>
    );
}
