'use client';
import Link from 'next/link';

export default function Footer({ variant = 'full' }) {
    const isSimple = variant === 'simple';

    return (
        <footer style={{ backgroundColor: 'var(--color-teal)', padding: '4rem 0', color: '#f6f5f0' }}>
            <div className="container">
                {/* Header Row: Logo */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div className="footer-logo" style={{ width: '180px' }}>
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 189.85">
                            <path fill="#c29850" d="M187.88,93s2.96-12.04,2.71-27.18c-.25-15.14-4.62-34.67-11.35-55.92-1.31-4.14-5.26-10.53-9.54-9.86-9.79,4.45-4.47,11.35-5.3,17.94-.54,4.26-6.64,16.81-8.91,21.43-6.23,12.69-14.39,22.4-21.56,34.41-26.25-14.24-57.98-16.35-87.19-11.79-6.63,1.03-25.61,5.94-27.94,12.61-9.57,27.36,37.1,31.14,54.96,32.79,7.92.73,15.95-.42,23.24.19,1.02.08,4.17-1.39,2.37,1.8-2.37,4.2-23.13,20.26-28.41,24.25-14.19,10.71-34.24,24.56-50.66,30.98-3.94,1.54-17.1,4.06-17.92,4.58-5.25,3.32-1.14,14.69,5.75,15.23,22.21,1.74,93.32-54.72,109.09-74.14.1-.12.2-.22.32-.3,4.42-2.83,22.44-4.15,27.06-2.32,10.97,15.18,5.33,36.24-2.7,51.91-5.24,10.23-21.24,24.3-.94,30.25,3.41-.19,5.6-3.35,7.48-5.74,16.19-20.59,29.54-53.03,37.07-77.94l86.55-1.1c-11.39,18.28-22.77,36.86-36.32,54.57-2.41,2.33-18.89,15.67-21.03,13.04-1.78-14.14,17.74-23.67,8.55-36.96-1.32-1.91-7.79-2.52-8.44-4.45-1.19-3.51,2.85-12.44-4.03-15.94-6.74-3.42-10.41,9.35-12.07,13.25-7.68,18-21.74,34.26-32.98,50.12l-2.52,3.83c-4.66,5.72,10.08,10.23,12.95,4.99l1.37-.85,27.04-42.07c1.06-1.64,3.25-2.1,4.87-1.01l.96.64c1.48.99,1.96,2.93,1.14,4.51-4.37,8.39-8.33,18.71-7.22,27.95.44,3.71,5.62,10.64,9.32,11.13,8.97,1.18,30.06-20.68,35.72-27.86.93,7.69-3.41,16.42.87,23.92,5.18,9.09,22.04-2.7,28.07-3.08,3.57-.23,7.11,5.02,10.49,4.72,19.25-1.68,38.22-21.53,45.62-28.5-.41,8.89-11.44,17.12-5.36,26.61,1.09.73,4,.58,5.33.19,3.39-.99,30.84-33.81,38.55-39.63.46-.35,1.07-.42,1.6-.22h0c.55.2.77.86.46,1.35-5.07,7.92-20.91,24.41-17.99,32.95.69,2.02,5.3,6.45,7.43,3.27l26.87-33.14c.39-.48,1.04-.66,1.63-.44h0c.44.17.62.7.34,1.09-5.62,7.85-9.66,26.7.12,31.69,8.78,4.49,29.84-16.08,35.63-22.37-4.62,26.57-.63,28.96,21.1,16.86,14.88-8.29,28.91-19.73,42.36-30.24.65-.51,1.47-.78,2.29-.67,1.19.16-.1.84-.56,2.24-.85,2.61-8.11,21.01-9.04,21.73-1.6,1.25-14.21-5.54-11.61,10.28,2.31,14.07,10.77,4.67,16.85,4.15,24.07-2.07,46.13,2.22,71.74,3.61,5.03.27,8.36,3.74,12.35-2.58,2.17-3.44,1.72-5.32.13-8.91-1.99-4.48-5.11-2.66-8.13-2.48-17.42,1.05-24.34-.12-42.06-1.1-9.46-.52-17.69-3.9-27.42-3.21,6.64-6.76,4.44-19.22,7.06-24.71,4.47-9.35,15.82-17.92,5.43-24.21-1.91-1.16-4.17-1.61-6.39-1.4-4.21.4-9.77,1.6-10.96,5.69-4.1,14.02-19.9,21.85-27.8,26.81-7.36,4.63-17.57,12.68-24.8,17.54-1.88.22-2.33.01-1.77-1.91,3.38-11.68,9.74-23.05,14.2-34.37,1.74-4.35-3.47-11.46-7.83-11.24-4.72.23-4.55,7.63-6.22,10.84-4.44,8.48-19.92,24.65-27.92,30.11-3.66,2.5-8.48,5.83-12.9,6.14.74-11.47,20.65-27.49,17.28-37.99-1.33-4.13-6.48-5.57-10.01-3.05l-10.38,7.43c2.16-6.44.31-18.34-11.19-11.04-14,10.58-21.6,15.94-32.75,29.82l-.64-.87c4.03-6.02,8.22-15.68-.74-20.1-8.3-4.09-8.08,4.36-11.7,9.15-2.16,2.86-14.59,13.41-17.98,15.68-13.76,9.25-20.31,15.58-29.55,13.4,22.36-13.81,28.02-22.57,28.02-22.57,11.13-11.91,14.35-33.6-1.74-33.64-14.31-.04-32.13,19.96-36.99,43.41-.46,2.21-.21,4.89-.89,7.09-2.12,6.8-9.09,8.91-13.87,8.4-2.08-.22-3.62-2.15-3.45-4.23,1.87-23.65,14.48-43.66,27.66-63.04l10.42.12c60.58,1.21,37.75-1.21,114.94,3.3,19.76,2.43,22.43-14.37,11.56-15.53-8.78.86-21.06-.15-29.69-.43-24.98-.8-58.84-1.37-58.89-1.44l-37.89-.06c6.55-8.36,13.92-18.06,16.46-26.3,2.41-7.82-2.63-17.44-7.77-11.13-9.48,11.64-18.24,24.65-26.36,37.32l-93.11,1.96ZM123.61,85.79c-.63.86-5.4,6.48-5.75,6.74-6.65,5.01-64.59-2.07-75.57-5.22-1.64-.47-14.22-3.59-10.9-6.62,1.2-1.1,22.92-6.14,26.34-6.6,14.39-1.94,54.88-1.54,66.02,8.43,2.54,2.27,1.1,1.58-.14,3.26ZM164.53,128.17c-2.92,6.83-2.67-.04-3.13-2.61-1.19-6.58-1.56-12.79-4.07-19.18l14.88-.96-7.68,22.75ZM174.69,92.24c-.77,1.34-23.31,1.07-23.85.15-2.2-3.74-7.66-10.5-7.61-10.57,2.08-3.36,14.27-20.43,16.98-25.1,3.63-6.25,5.62-11.95,8.53-18.37.86-1.9,1.4-2.69,3.4-2.3,3.86,11.98,5.76,23.41,5.83,36.04.03,4.85-.18,14.75-3.28,20.14ZM288.72,157.7c.28-6,23.4-38.14,25.71-30.82,2.31,7.32-13.73,20.03-13.73,20.03l-11.98,10.79Z" />
                            <path fill="#c29850" d="M465.67,104.52c3.7-4.51-5.03-12.2-9.47-12.41-18.57-.86-4.06,28.92,9.47,12.41Z" />
                        </svg>
                    </div>
                </div>

                <div className="body-xs" style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '400',
                    letterSpacing: '0.08em',
                    marginBottom: '1.5rem',
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                }}>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=2750+Fairmount+Dallas+Texas+75201"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none', transition: 'opacity 0.3s' }}
                        onMouseEnter={(e) => e.target.style.opacity = '1'}
                        onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                    >
                        2750 FAIRMOUNT, DALLAS, TEXAS 75201
                    </a>
                    <span style={{ margin: '0 1rem', opacity: 0.5 }}>|</span>
                    <a
                        href="tel:214123456"
                        style={{ color: 'inherit', textDecoration: 'none', transition: 'opacity 0.3s' }}
                        onMouseEnter={(e) => e.target.style.opacity = '1'}
                        onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                    >
                        214.123.456
                    </a>
                </div>

                {/* Divider (Only for full) */}
                <hr style={{ border: 'none', borderTop: '1px solid rgba(194, 152, 80, 0.4)', marginBottom: 'var(--space-4)' }} />

                {/* Main Legal Sections */}
                <div style={{
                    fontSize: '11px',
                    lineHeight: '1.8',
                    letterSpacing: '0.04em',
                    color: 'rgba(246, 245, 240, 0.5)',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                    <p style={{ marginBottom: '0.75rem' }}>
                        Securities and investment advisory services offered through Integrity Alliance, LLC, Member SIPC. Integrity Wealth is a marketing name for Integrity Alliance, LLC. Artemis is not affiliated with Integrity Wealth.
                    </p>
                    <p style={{ marginBottom: '0.75rem' }}>
                        Death and Tax Advisors, LLC dba Artemis and the above firms are independent and non-affiliated. Tax and legal advice are not offed through Integrity Wealth.
                    </p>
                    <p style={{ marginBottom: '0.75rem' }}>
                        Artemis is presently licensed to sell traditional life insurance in AZ, CA, CO, DE, FL, IL, LA, MA, MI, MT, NC, NJ, OK, TN, TX, VA, and WY. Variable life and annuity products, as well as other securities products, may be sold in AZ, CA, CO, DE, FL, IL, LA, MA, MI, MT, NC, NJ, OK, TN, TX, VA, and WY.
                    </p>
                    <p style={{ marginBottom: '0.75rem' }}>
                        This site is published for residents of the United States only. Representatives may only conduct business with residents of the states and jurisdictions in which they are properly registered. Therefore, a response to a request for information may be delayed until appropriate registration is obtained or exemption from registration is determined. Not all services referenced on this site are available in every state and through every advisor listed. Check the background of this firm on FINRA’s BrokerCheck
                    </p>
                    <p>
                        © 2025 by Death and Tax Advisors, LLC dba Artemis <span style={{ margin: '0 1rem', opacity: 0.3 }}>|</span> <a href="https://brokercheck.finra.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>FINRA’s BrokerCheck</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
