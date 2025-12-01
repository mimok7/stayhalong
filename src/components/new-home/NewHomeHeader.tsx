import React from 'react';

export default function NewHomeHeader() {
    return (
        <header className="w-full">
            {/* Top Banner */}
            <div className="w-full">
                <img src="/images/index_02.gif" width="1900" height="82" alt="" className="block w-full h-auto" />
            </div>

            {/* Navigation Row */}
            <div className="flex w-full">
                {/* index_04: 723px */}
                <div style={{ flex: '723 723 0%' }}>
                    <img src="/images/index_04.gif" width="723" height="196" alt="" className="block w-full h-auto" />
                </div>
                {/* index_05: 249px */}
                <div style={{ flex: '249 249 0%' }}>
                    <img src="/images/index_05.gif" width="249" height="196" alt="" className="block w-full h-auto" />
                </div>
                {/* index_06: 154px */}
                <div style={{ flex: '154 154 0%' }}>
                    <img src="/images/index_06.gif" width="154" height="196" alt="" className="block w-full h-auto" />
                </div>
                {/* index_07: 257px */}
                <div style={{ flex: '257 257 0%' }}>
                    <img src="/images/index_07.gif" width="257" height="196" alt="" className="block w-full h-auto" />
                </div>
                {/* index_08: 252px */}
                <div style={{ flex: '252 252 0%' }}>
                    <img src="/images/index_08.gif" width="252" height="196" alt="" className="block w-full h-auto" />
                </div>
                {/* index_09: 265px */}
                <div style={{ flex: '265 265 0%' }}>
                    <img src="/images/index_09.gif" width="265" height="196" alt="" className="block w-full h-auto" />
                </div>
            </div>
        </header>
    );
}
