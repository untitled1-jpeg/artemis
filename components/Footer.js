'use client';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--color-teal)', padding: '8rem 0', color: 'white' }}>
            <div className="container">
                <div className="footer-logo" style={{ width: '150px', marginBottom: '3rem' }}>
                    <svg viewBox="0 0 214.73 125.85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M213.58,69.76c-4.62,5.44-12.28-4.24-7.71-10.25.62-.82,1.58-1.33,2.6-1.48h0c1.49-.22,3.01.36,3.88,1.59,2.13,3,3.44,7.54,1.23,10.14Z"
                            fill="#c29850" />
                        <path
                            d="M136.5,67.03l-15.37.52c-4.69,24.84-15.78,37.94-25.2,51.62-2.64,3.84-.16,7.4-9.17,6.56-2.49-.23-4.17-5.48-4.15-7.85.04-3.67,3.88-4.95,5.83-8.63,5.13-9.69,8.65-28.34,4.03-38.43l-18.47,1.89c-10.2,10.49-55.67,49.97-68.8,49.2-3.92-.23-7.16-6.42-3.81-9.23.95-.8,6.56-1.73,8.72-2.68,16.28-7.14,34.96-24.46,48.26-36.12-12.51-1.75-34.89-.48-42.28-12.95-1.79-3.02-3.67-8.32,1.25-11.41,10.63-6.68,51.64-9.11,64.27,2.52,11.5-15.2,27.89-31.02,28.29-51.31,9.06-3.92,12.22,8.83,13.21,15.64,2.08,14.31,3.17,28.51.14,42.5,0,0,23.99.45,27.37.06,9.91-1.15,12.61.02,23.24-.52l11.57-.69c4.24-.21,7.46,1.58,8.95,5.56,1.15,3.08.35,6.05-4.7,6.35-2.02.12-4.08-.8-6.32-.86l-46.85-1.75ZM113.47,60.22c3.61-12.96,2.78-25.34,1.35-38.57l-24.81,35.22s2.96,1.12,5.38,3.64c6.85-.66,10.62-.72,18.08-.29ZM75.29,57.92c-13.49-9.04-35.53-7.98-50.09-2.79-1.7.61-2.02-.33-1.65,2.52,7.77,5.79,40.79,8.74,47.5,4.89,1.04-.59,5.2-3.38,4.23-4.62ZM101.49,95.4c5.77-8.2,10.68-25.6,9.72-26.91l-10.63,1.09c3.51,6.87,1.6,20.36.91,25.82Z"
                            fill="#c29850" />
                    </svg>
                </div>
                <div style={{ fontSize: '0.65rem', opacity: 0.6, lineHeight: 2.2, letterSpacing: '0.05em' }}>
                    <p>Securities and investment advisory services offered through Integrity Alliance, LLC, Member FINRA/SIPC.
                        Integrity Wealth is a marketing name for Integrity Alliance, LLC. Artemis Partners is not affiliated with
                        Integrity Wealth.</p>
                    <p>Death and Tax Advisors, LLC dba Artemis Partners and the above firms are independent and non-affiliated. Tax
                        and legal advice are not offered through Integrity Wealth.</p>
                    <p>Artemis Partners is presently licensed to sell traditional life insurance in AZ, CA, CO, DE, FL, IL, LA, MA,
                        MI, MT, NC, NJ, OK, PA, RI, OR, TN, TX, VA, WA, WI, NY. Variable life and annuity products, as well as other
                        securities products, may be sold in AZ, CA, CO, DE, FL, IL, LA, MA, MI, MT, NC, NJ, OK, TN, TX, VA, and NY.
                    </p>
                    <p>This site is published for residents of the United States only. Representatives may only conduct business
                        with residents of the states and jurisdictions in which they are properly registered. Therefore, a response
                        for information may be delayed until appropriate registration is obtained or exemption from registration is
                        determined. Not all services referenced on this site are available in every state and through every advisor
                        listed. Check the background of this firm on FINRA&apos;s BrokerCheck.</p>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '2rem' }}>
                        <p>© 2024 Death and Tax Advisors, LLC dba Artemis Partners | 6500 CHERRY LANE, SUITE 830, DALLAS, TEXAS 75225
                            | 214.123.4567</p>
                        <Link href="/connect" className="btn-connect">Connect</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
