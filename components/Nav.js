'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Nav() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const tlRef = useRef(null);

    // Toggle Menu Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            tlRef.current = gsap.timeline({ paused: true })
                .to(menuRef.current, {
                    x: '0%',
                    duration: 0.6,
                    ease: 'power3.out'
                });
        }, menuRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (tlRef.current) {
            if (isMenuOpen) {
                tlRef.current.play();
                document.body.style.overflow = 'hidden';
            } else {
                tlRef.current.reverse();
                document.body.style.overflow = '';
            }
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav id="main-nav" className={pathname !== '/' ? 'is-internal' : ''}>
                <div className="container" style={{ position: 'relative', zIndex: 1001 }}>
                    {/* Desktop/Mobile Logo */}
                    <Link href="/" className="nav-logo-target" id="nav-logo-target" onClick={() => setIsMenuOpen(false)}>
                        <svg viewBox="0 0 214.73 125.85" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                            <path d="M213.58,69.76c-4.62,5.44-12.28-4.24-7.71-10.25.62-.82,1.58-1.33,2.6-1.48h0c1.49-.22,3.01.36,3.88,1.59,2.13,3,3.44,7.54,1.23,10.14Z" fill="#c29850" />
                            <path d="M136.5,67.03l-15.37.52c-4.69,24.84-15.78,37.94-25.2,51.62-2.64,3.84-.16,7.4-9.17,6.56-2.49-.23-4.17-5.48-4.15-7.85.04-3.67,3.88-4.95,5.83-8.63,5.13-9.69,8.65-28.34,4.03-38.43l-18.47,1.89c-10.2,10.49-55.67,49.97-68.8,49.2-3.92-.23-7.16-6.42-3.81-9.23.95-.8,6.56-1.73,8.72-2.68,16.28-7.14,34.96-24.46,48.26-36.12-12.51-1.75-34.89-.48-42.28-12.95-1.79-3.02-3.67-8.32,1.25-11.41,10.63-6.68,51.64-9.11,64.27,2.52,11.5-15.2,27.89-31.02,28.29-51.31,9.06-3.92,12.22,8.83,13.21,15.64,2.08,14.31,3.17,28.51.14,42.5,0,0,23.99.45,27.37.06,9.91-1.15,12.61.02,23.24-.52l11.57-.69c4.24-.21,7.46,1.58,8.95,5.56,1.15,3.08.35,6.05-4.7,6.35-2.02.12-4.08-.8-6.32-.86l-46.85-1.75ZM113.47,60.22c3.61-12.96,2.78-25.34,1.35-38.57l-24.81,35.22s2.96,1.12,5.38,3.64c6.85-.66,10.62-.72,18.08-.29ZM75.29,57.92c-13.49-9.04-35.53-7.98-50.09-2.79-1.7.61-2.02-.33-1.65,2.52,7.77,5.79,40.79,8.74,47.5,4.89,1.04-.59,5.2-3.38,4.23-4.62ZM101.49,95.4c5.77-8.2,10.68-25.6,9.72-26.91l-10.63,1.09c3.51,6.87,1.6,20.36.91,25.82Z" fill="#c29850" />
                        </svg>
                    </Link>

                    {/* Desktop Links */}
                    <div className="nav-links-container desktop-only">
                        <ul className="nav-links">
                            <li><Link href="/mission" className={pathname === '/mission' ? 'active' : ''}>OUR MISSION</Link></li>
                            <li><Link href="/team" className={pathname === '/team' ? 'active' : ''}>OUR TEAM</Link></li>
                            <li><Link href="/offerings" className={pathname === '/offerings' ? 'active' : ''}>OUR OFFERINGS</Link></li>
                        </ul>
                        <Link href="/connect" className="btn-connect">CONNECT</Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="hamburger-btn mobile-only"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Full Screen Menu Overlay */}
            <div className="mobile-menu-overlay" ref={menuRef}>
                <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>

                    {/* Visual Header */}
                    <div className="mobile-menu-header">
                        <div className="mobile-menu-logo">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} style={{ display: 'block', width: '100%' }}>
                                <svg viewBox="0 0 214.73 125.85" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                                    <path d="M213.58,69.76c-4.62,5.44-12.28-4.24-7.71-10.25.62-.82,1.58-1.33,2.6-1.48h0c1.49-.22,3.01.36,3.88,1.59,2.13,3,3.44,7.54,1.23,10.14Z" fill="#c29850" />
                                    <path d="M136.5,67.03l-15.37.52c-4.69,24.84-15.78,37.94-25.2,51.62-2.64,3.84-.16,7.4-9.17,6.56-2.49-.23-4.17-5.48-4.15-7.85.04-3.67,3.88-4.95,5.83-8.63,5.13-9.69,8.65-28.34,4.03-38.43l-18.47,1.89c-10.2,10.49-55.67,49.97-68.8,49.2-3.92-.23-7.16-6.42-3.81-9.23.95-.8,6.56-1.73,8.72-2.68,16.28-7.14,34.96-24.46,48.26-36.12-12.51-1.75-34.89-.48-42.28-12.95-1.79-3.02-3.67-8.32,1.25-11.41,10.63-6.68,51.64-9.11,64.27,2.52,11.5-15.2,27.89-31.02,28.29-51.31,9.06-3.92,12.22,8.83,13.21,15.64,2.08,14.31,3.17,28.51.14,42.5,0,0,23.99.45,27.37.06,9.91-1.15,12.61.02,23.24-.52l11.57-.69c4.24-.21,7.46,1.58,8.95,5.56,1.15,3.08.35,6.05-4.7,6.35-2.02.12-4.08-.8-6.32-.86l-46.85-1.75ZM113.47,60.22c3.61-12.96,2.78-25.34,1.35-38.57l-24.81,35.22s2.96,1.12,5.38,3.64c6.85-.66,10.62-.72,18.08-.29ZM75.29,57.92c-13.49-9.04-35.53-7.98-50.09-2.79-1.7.61-2.02-.33-1.65,2.52,7.77,5.79,40.79,8.74,47.5,4.89,1.04-.59,5.2-3.38,4.23-4.62ZM101.49,95.4c5.77-8.2,10.68-25.6,9.72-26.91l-10.63,1.09c3.51,6.87,1.6,20.36.91,25.82Z" fill="#c29850" />
                                </svg>
                            </Link>
                        </div>
                        <button className="close-btn" onClick={() => setIsMenuOpen(false)} aria-label="Close Menu">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="mobile-links-list">
                        <Link href="/mission" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Our Mission</Link>
                        <Link href="/team" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Our Team</Link>
                        <Link href="/offerings" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Our Offerings</Link>
                        <Link href="/connect" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Connect</Link>
                    </div>

                    {/* Footer Info */}
                    <div className="mobile-nav-footer">
                        <div className="mobile-address">
                            2750 FAIRMOUNT<br />
                            DALLAS, TEXAS 75201
                        </div>
                        <div className="mobile-phone">
                            214.123.456
                        </div>
                        <div className="mobile-socials">
                            <a href="#" style={{ color: 'var(--color-gold)' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                            </a>
                            <a href="#" style={{ color: 'var(--color-gold)' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
