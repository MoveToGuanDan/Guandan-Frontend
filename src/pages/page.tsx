'use client'
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { PokerPlayer } from '../assets/scripts/PokerPlayer';
import Image from 'next/image';
import GradeInformation from '../components/GradeInformation';
import GongDoubleCard from '../components/GongDoubleCard';
import GongSingleCard from '../components/GongSingleCard';
import TopCards from '../components/TopCards';
import LeftCards from '../components/LeftCards';
import RightCards from '../components/RightCards';

const Game: NextPage = () => {
    // 向后端发起调用获得扑克玩家信息
    const playerInfo = {
        handCards: ["红桃1", "红桃2", "红桃3", "红桃4", "红桃1", "红桃2", "红桃3", "红桃4"],
        playersCardsNum: {},
    };
    // 创建PokerPlayer实例，一整局游戏只需要一个
    const pokerPlayer = new PokerPlayer(playerInfo);

    // 使用useState来管理扑克牌图片的状态
    const [cards, setCards] = useState([]);
    const [currentLevelCard, setcurrentLevelCard] = useState<number>(2); // 初始值为2
    useEffect(() => {
        // 假设根据pokerPlayer.handCards更新cards状态
        // 注意：实际项目中，应该在适当的地方更新状态，这里仅为示例
        setCards(pokerPlayer.handCards.map((cardNumber: any) => `/cards/hongtao/${cardNumber}.svg`));
    }, []);


    return (
        <div className="p-5 h-screen grid grid-rows-layout grid-cols-layout ">
            {/* Top Section */}
            <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex justify-center items-center">
                <TopCards cardNumber={27} />
                {/*需要动态修改cardNumber */}
            </div>

            {/* Left Section */}
            <div className="col-start-1 col-end-2 row-start-2 row-end-3 flex justify-center items-center">
                <LeftCards cardNumber={27} />
                {/*需要动态修改cardNumber */}
            </div>

            {/* Center Section */}
            <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col justify-center items-center gap-4">
                <div className="p-4 bg-white shadow-lg rounded-lg ">
                    <article className="flex space-x-3">
                        {/*根据上局游戏结果 判定1. 是否加载贡牌界面 2.加载单贡还是双贡界面 */}
                        {/* <GongSingleCard /> */}
                        <GongSingleCard />
                    </article>
                </div>
            </div>

            {/* Right Section */}
            <div className="col-start-3 col-end-4 row-start-2 row-end-3 flex justify-center items-center">
                <RightCards cardNumber={27} />
                {/*需要动态修改cardNumber */}
            </div>

            {/* Bottom Section */}
            {/* 这里需要根据PokerPlayer的信息进行调整 */}
            <div className="col-start-2 col-end-3 row-start-3 row-end-4 flex flex-col items-center">
                <div className="flex justify-center items-center h-full">
                    <div className="flex-1">
                        <div className="bottom-section">
                            {/* 渲染扑克牌图片 */}
                            {cards.map((cardSrc, index) => (



                                <div key={index} className="inline-block">
                                    <Image src={cardSrc} alt="Card" width={100} height={140} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-3 flex">
                        <div className="flex items-center gap-10">
                            {/*这里需要读取PokerPlayer中的信息 得到双方级数信息，并根据上把胜利者确定当前级牌*/}
                            <GradeInformation myGrade={2} opponentGrade={3} currentLevelCard={4} />
                            <div className="flex justify-center items-center">
                                {/**根据确定的级牌加载一张红桃卡牌 */}
                                <Image src={`/cards/hongtao/红桃${currentLevelCard}.svg`} width={100} height={140} alt={`Card ${currentLevelCard}`} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );



};

export default Game;