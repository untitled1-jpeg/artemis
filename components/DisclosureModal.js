'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PortableText } from '@portabletext/react';

export default function DisclosureModal({ isOpen, onClose, content }) {
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

    if (!content && !isOpen) return null;

    return (
        <div
            className="disclosure-modal-root"
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
                className="disclosure-panel"
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '600px',
                    height: '100%',
                    backgroundColor: 'var(--color-cream)',
                    boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
                    transform: 'translateX(100%)',
                    overflowY: 'auto',
                    padding: '6rem 4rem',
                    color: 'var(--color-teal)'
                }}
            >
                <style jsx>{`
                    @media (max-width: 768px) {
                        .disclosure-panel {
                            padding: 4rem 2rem !important;
                        }
                    }
                `}</style>
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
                    <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--color-gold)', marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Disclosure
                    </h2>
                    
                    <div style={{ height: '1px', width: '60px', backgroundColor: 'var(--color-gold)', marginBottom: '2.5rem' }}></div>

                    <div className="body-md" style={{ lineHeight: '1.8', color: 'var(--color-teal)', opacity: 0.9 }}>
                        {typeof content === 'string' ? (
                            <p dangerouslySetInnerHTML={{ __html: content.replace(/®/g, '<sup>&reg;</sup>') }} />
                        ) : (
                            <PortableText 
                                value={content} 
                                components={{
                                    block: {
                                        normal: ({children}) => <p style={{ marginBottom: '1.5rem' }}>{children}</p>,
                                    },
                                    text: ({text}) => {
                                        if (text.includes('®')) {
                                            return <span dangerouslySetInnerHTML={{ __html: text.replace(/®/g, '<sup>&reg;</sup>') }} />;
                                        }
                                        return text;
                                    }
                                }} 
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
