//import React from 'react';
import React from 'react';

const GongSingleCard: React.FC = () => {
    return (
        <div className="p-6 flex flex-row items-center justify-center gap-1 overflow-x-auto" style={{ width: '30vw', height: '30vh' }}> {/* gap-4 使卡片之间更紧凑 */}
            {[1, 2].map((item, index) => (
                <div key={index} className="flex-shrink-0 m-4 relative overflow-hidden shadow-lg bg-gradient-to-r from-orange-500 to-purple-500">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                        <rect x="100" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-6 px-6 flex items-center justify-center">
                        <div className="block absolute w-36 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                        {/* 调整图片大小 */}
                        <img src="/cards/heitao/黑桃10.svg" width={80} height={80} alt="Card" />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        {/*<span className="block opacity-75 -mb-1">{index < 1 ? "贡牌方" : "受贡方"}</span>*/}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GongSingleCard;