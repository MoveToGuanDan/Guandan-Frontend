import PokerPlayer from '@/assets/scripts/PokerPlayer';
import React, { useEffect, useState } from 'react';
import GradeInformation from "./GradeInformation";

interface CardStackProps {
    cardNumber: number;
}

const BottomCards: React.FC<CardStackProps> = ({ cardNumber }) => {
    // 创建PokerPlayer实例
    const pokerPlayer = new PokerPlayer("A", 2, 2, 2, ["红桃1", "红桃2", "红桃3", "红桃4"]);
    // 使用useState来管理扑克牌图片的状态
    const [cards, setCards] = useState<string[]>([]);
    const [currentLevelCard, setCurrentLevelCard] = useState<number>(2); // 初始值为2

    useEffect(() => {
        // 确保handCards是字符串数组
        if (pokerPlayer.handCards && Array.isArray(pokerPlayer.handCards)) {
            const cardPaths = pokerPlayer.handCards.map(card => `/cards/hongtao/${card}.svg`);
            setCards(cardPaths);
        }
    }, [pokerPlayer.handCards]);

    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex-1">
                <div className="bottom-section">
                    <div className="flex justify-center space-x-[-20px]">
                        {cards.map((cardSrc, index) => (
                            <div key={index} className="z-10" style={{ zIndex: index - cards.length }}>
                                <img src={cardSrc} alt="Card" width={100} height={140} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex-3 flex">
                <div className="flex items-center gap-10">
                    <GradeInformation myGrade={2} opponentGrade={3} currentLevelCard={4} />
                    <div className="flex justify-center items-center">
                        <img src={`/cards/hongtao/红桃${currentLevelCard}.svg`} width={100} height={140} alt={`Card ${currentLevelCard}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomCards;