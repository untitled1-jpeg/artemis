'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const lottieRef = useRef(null);
    const heroRef = useRef(null);
    const headlineRef = useRef(null);
    const paragraphRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 2 } });

            // 1. Intro Sequence
            tl.from(headlineRef.current, {
                opacity: 0,
                y: 40,
                duration: 1.5
            })
                .from(paragraphRef.current, {
                    opacity: 0,
                    y: 20,
                    duration: 1.5
                }, "-=1");

            // 2. Lottie Animation Playback
            // Play the animation once on load
            if (lottieRef.current) {
                lottieRef.current.play();
            }

            // 3. Scroll Effects (Fade out text & Nav state)
            gsap.to({}, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    onUpdate: (self) => {
                        const progress = self.progress;

                        // Fade out the hero header contents
                        const headline = headlineRef.current;
                        const paragraph = paragraphRef.current;
                        if (headline) headline.style.opacity = 1 - (progress * 2);
                        if (paragraph) paragraph.style.opacity = 0.9 - (progress * 2);

                        // Handle Nav scrolled state
                        const nav = document.querySelector('#main-nav');
                        if (nav) {
                            if (progress > 0.15) {
                                nav.classList.add('scrolled');
                            } else {
                                nav.classList.remove('scrolled');
                            }
                        }
                    }
                }
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <header className="hero" ref={heroRef}>
            <div className="container">
                <div className="hero-logo-container" id="hero-logo-master" style={{ width: '320px', zIndex: 2000 }}>
                    {/* 
                        Optimized "A" Animation: 
                        Using Lottie for resolution independence and scroll-scrubbing flexibility.
                    */}
                    <Lottie
                        lottieRef={lottieRef}
                        animationData={null} // USER: Replace with imported JSON or URL
                        loop={false}
                        autoplay={false}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <h1 ref={headlineRef}>Artemis is an independent<br />life insurance advisory.</h1>
                <p ref={paragraphRef}>We don&apos;t sell products. We create solutions. It&apos;s all we do,<br />and we do it better than anyone. Our
                    independence gives us<br />an objective lens, our size keeps us personal, and our<br />mission is simple: make life
                    insurance feel human again.</p>
            </div>
        </header>
    );
}
