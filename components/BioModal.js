'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function BioModal({ isOpen, onClose, member }) {
    const overlayRef = useRef(null);
    const panelRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';

            const tl = gsap.timeline();
            tl.to(overlayRef.current, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
            })
                .to(panelRef.current, {
                    x: 0,
                    duration: 0.8,
                    ease: 'power4.out'
                }, '-=0.3')
                .to(contentRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power2.out'
                }, '-=0.4');
        } else {
            const tl = gsap.timeline({
                onComplete: () => {
                    document.body.style.overflow = 'unset';
                }
            });
            tl.to(contentRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.3,
                ease: 'power2.in'
            })
                .to(panelRef.current, {
                    x: '100%',
                    duration: 0.6,
                    ease: 'power4.in'
                }, '-=0.1')
                .to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.4,
                    ease: 'power2.in'
                }, '-=0.4');
        }
    }, [isOpen]);

    if (!member && !isOpen) return null;

    return (
        <div
            className="bio-modal-root"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 9999,
                pointerEvents: isOpen ? 'all' : 'none',
                display: 'flex',
                justifyContent: 'flex-end'
            }}
        >
            {/* Overlay */}
            <div
                ref={overlayRef}
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(43, 73, 77, 0.8)',
                    opacity: 0,
                    cursor: 'pointer',
                    backdropFilter: 'blur(5px)'
                }}
            />

            {/* Panel */}
            <div
                ref={panelRef}
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '800px',
                    height: '100%',
                    backgroundColor: 'var(--color-cream)',
                    boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
                    transform: 'translateX(100%)',
                    overflowY: 'auto',
                    padding: '6rem 4rem',
                    color: 'var(--color-teal)'
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '2rem',
                        right: '2rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--color-gold)',
                        padding: '1rem',
                        zIndex: 10
                    }}
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div ref={contentRef} style={{ opacity: 0, transform: 'translateY(30px)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
                        <div style={{ aspectRatio: '1/1', background: `url(${member?.image}) center/cover`, borderRadius: '0', filter: 'grayscale(1)' }}></div>
                        <div>
                            <h2 className="serif" style={{ fontSize: '2rem', color: 'var(--color-gold)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                {member?.name}
                            </h2>
                            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-teal)', opacity: 0.8, fontStyle: 'italic', fontWeight: '400', fontFamily: 'var(--font-sans)' }}>
                                {member?.title}
                            </h3>
                            <div style={{ height: '1px', width: '60px', backgroundColor: 'var(--color-gold)', margin: '2rem 0' }}></div>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <a href={`mailto:${member?.email}`} style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </a>
                                <a href={member?.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center' }}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="body-lg" style={{ lineHeight: '1.8', color: 'var(--color-teal)' }}>
                        {member?.bio?.split('\n').map((para, i) => (
                            <p key={i} style={{ marginBottom: '2rem' }}>{para}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
