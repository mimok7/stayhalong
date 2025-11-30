import React from 'react';
import Image from 'next/image';

export default function NewHomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* 전체 컨테이너 */}
            <div className="max-w-[2940px] mx-auto">
                <table className="w-full border-collapse" cellPadding="0" cellSpacing="0">
                    <tbody>
                        {/* 첫 번째 행 - 상단 헤더 */}
                        <tr>
                            <td rowSpan={6} className="w-[525px]">
                                <img src="/images/index_01.gif" width="525" height="1912" alt="" className="block w-full h-auto" />
                            </td>
                            <td colSpan={9}>
                                <img src="/images/index_02.gif" width="1900" height="82" alt="" className="block w-full h-auto" />
                            </td>
                            <td rowSpan={6} className="w-[515px]">
                                <img src="/images/index_03.gif" width="515" height="1912" alt="" className="block w-full h-auto" />
                            </td>
                        </tr>

                        {/* 두 번째 행 - 메인 네비게이션 */}
                        <tr>
                            <td colSpan={2}>
                                <img src="/images/index_04.gif" width="723" height="196" alt="" className="block w-full h-auto" />
                            </td>
                            <td colSpan={2}>
                                <img src="/images/index_05.gif" width="249" height="196" alt="" className="block w-full h-auto" />
                            </td>
                            <td>
                                <img src="/images/index_06.gif" width="154" height="196" alt="" className="block w-full h-auto" />
                            </td>
                            <td>
                                <img src="/images/index_07.gif" width="257" height="196" alt="" className="block w-full h-auto" />
                            </td>
                            <td colSpan={2}>
                                <img src="/images/index_08.gif" width="252" height="196" alt="" className="block w-full h-auto" />
                            </td>
                            <td>
                                <img src="/images/index_09.gif" width="265" height="196" alt="" className="block w-full h-auto" />
                            </td>
                        </tr>

                        {/* 세 번째 행 - 메인 콘텐츠 */}
                        <tr>
                            <td colSpan={9}>
                                <img src="/images/index_10.gif" width="1900" height="542" alt="" className="block w-full h-auto" />
                            </td>
                        </tr>

                        {/* 네 번째 행 - 중간 섹션 */}
                        <tr>
                            <td>
                                <img src="/images/index_11.gif" width="379" height="198" alt="" className="block w-full h-auto" />
                            </td>
                            <td colSpan={2}>
                                <img src="/images/index_12.gif" width="566" height="198" alt="" className="block w-full h-auto" />
                            </td>
                            <td colSpan={4}>
                                <img src="/images/index_13.gif" width="567" height="198" alt="" className="block w-full h-auto" />
                            </td>
                            <td colSpan={2}>
                                <img src="/images/index_14.gif" width="388" height="198" alt="" className="block w-full h-auto" />
                            </td>
                        </tr>

                        {/* 다섯 번째 행 - 하단 중간 */}
                        <tr>
                            <td colSpan={9}>
                                <img src="/images/index_15.gif" width="1900" height="324" alt="" className="block w-full h-auto" />
                            </td>
                        </tr>

                        {/* 여섯 번째 행 - 푸터 */}
                        <tr>
                            <td colSpan={9}>
                                <img src="/images/index_16.gif" width="1900" height="570" alt="" className="block w-full h-auto" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
