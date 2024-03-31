//import React from 'react';
import React from 'react';

interface CardStackProps {
    cardNumber: number;
}
const RightCards: React.FC<CardStackProps> = ({ cardNumber }) => {
    const cardWidth = 140;

    return (
        <div className="inline-block" style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}>
            <div className="flex-shrink-0 m-4 relative rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-purple-500" style={{ width: '30vw', height: '20vh' }}>
                <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                    <rect x="100" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-6 px-6 flex items-center justify-center" style={{ paddingTop: '4rem' }}>
                    <div className="block absolute w-36 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                    <div className="flex justify-center space-x-[-20px]"> {/* 使用负margin来实现卡牌的部分覆盖 */}
                        {Array.from({ length: cardNumber }, (_, index) => (
                            <div key={index} className="z-10" style={{ zIndex: cardNumber - index }}>
                                <img src="/cards/back.svg" width={cardWidth} height={140} alt={`Card ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1"></span>
                </div>
            </div>
        </div>
    );
};

export default RightCards;