import React from 'react';
import Link from 'next/link';

export default function NewHomeHeader() {
    return (
        <header className="w-full">
            {/* Top Banner */}
            <div className="w-full">
                <Link href="/">
                    <img src="/images/index_02.gif" width="1900" height="82" alt="Stay Halong" className="block w-full h-auto cursor-pointer" />
                </Link>
            </div>

            {/* Navigation Row */}
            <div className="flex w-full">
                {/* index_04: 723px - Home */}
                <div style={{ flex: '723 723 0%' }}>
                    <Link href="/">
                        <img src="/images/index_04.gif" width="723" height="196" alt="Home" className="block w-full h-auto cursor-pointer" />
                    </Link>
                </div>
                {/* index_05: 249px */}
                <div style={{ flex: '249 249 0%' }}>
                    <img src="/images/index_05.gif" width="249" height="196" alt="" className="block w-full h-auto" />
                </div>
                {/* index_06: 154px - Login */}
                <div style={{ flex: '154 154 0%' }}>
                    <Link href="/login">
                        <img src="/images/index_06.gif" width="154" height="196" alt="Login" className="block w-full h-auto cursor-pointer" />
                    </Link>
                </div>
                {/* index_07: 257px - Kakao Chat */}
                <div style={{ flex: '257 257 0%' }}>
                    <a href="http://pf.kakao.com/_zvsxaG/chat" target="_blank" rel="noopener noreferrer">
                        <img src="/images/index_07.gif" width="257" height="196" alt="Kakao Chat" className="block w-full h-auto cursor-pointer" />
                    </a>
                </div>
                {/* index_08: 252px - Naver Cafe */}
                <div style={{ flex: '252 252 0%' }}>
                    <a href="https://cafe.naver.com/stayhalong" target="_blank" rel="noopener noreferrer">
                        <img src="/images/index_08.gif" width="252" height="196" alt="Naver Cafe" className="block w-full h-auto cursor-pointer" />
                    </a>
                </div>
                {/* index_09: 265px - YouTube */}
                <div style={{ flex: '265 265 0%' }}>
                    <a href="https://www.youtube.com/@Realhalong" target="_blank" rel="noopener noreferrer">
                        <img src="/images/index_09.gif" width="265" height="196" alt="YouTube" className="block w-full h-auto cursor-pointer" />
                    </a>
                </div>
            </div>
        </header>
    );
}
