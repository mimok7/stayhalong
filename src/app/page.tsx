import React from 'react';
import NewHomeHeader from '@/components/new-home/NewHomeHeader';
import NewHomeFooter from '@/components/new-home/NewHomeFooter';

export default function NewHomePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* 전체 컨테이너 */}
            <div className="max-w-[2940px] mx-auto flex justify-center w-full min-h-screen">
                {/* Left Side - Hidden on Mobile/Tablet */}
                <div className="hidden 2xl:block w-[525px] flex-shrink-0">
                    <img src="/images/index_01.gif" width="525" height="1912" alt="" className="block w-full h-auto" />
                </div>

                {/* Center Content */}
                <div className="flex-1 max-w-[1900px] w-full flex flex-col">
                    <NewHomeHeader />

                    <main className="w-full flex-grow flex flex-col justify-center">
                        {/* Main Content Image */}
                        <div className="w-full">
                            <img src="/images/index_10.gif" width="1900" height="542" alt="" className="block w-full h-auto" />
                        </div>

                        {/* Middle Section Row */}
                        <div className="flex w-full">
                            {/* index_11: 379px */}
                            <div style={{ flex: '379 379 0%' }}>
                                <img src="/images/index_11.gif" width="379" height="198" alt="" className="block w-full h-auto" />
                            </div>
                            {/* index_12: 566px */}
                            <div style={{ flex: '566 566 0%' }}>
                                <img src="/images/index_12.gif" width="566" height="198" alt="" className="block w-full h-auto" />
                            </div>
                            {/* index_13: 567px */}
                            <div style={{ flex: '567 567 0%' }}>
                                <img src="/images/index_13.gif" width="567" height="198" alt="" className="block w-full h-auto" />
                            </div>
                            {/* index_14: 388px */}
                            <div style={{ flex: '388 388 0%' }}>
                                <img src="/images/index_14.gif" width="388" height="198" alt="" className="block w-full h-auto" />
                            </div>
                        </div>

                        {/* Bottom Middle Image */}
                        <div className="w-full">
                            <img src="/images/index_15.gif" width="1900" height="324" alt="" className="block w-full h-auto" />
                        </div>
                    </main>

                    <NewHomeFooter />
                </div>

                {/* Right Side - Hidden on Mobile/Tablet */}
                <div className="hidden 2xl:block w-[515px] flex-shrink-0">
                    <img src="/images/index_03.gif" width="515" height="1912" alt="" className="block w-full h-auto" />
                </div>
            </div>
        </div>
    );
}
