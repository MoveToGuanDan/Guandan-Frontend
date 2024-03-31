import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useKeylessAccounts } from "../core/useKeylessAccounts";
import GoogleLogo from "../components/GoogleLogo";
import { collapseAddress } from "../core/utils";
import React from 'react';
import { PokerPlayer } from '../assets/scripts/PokerPlayer';
import GradeInformation from '../components/GradeInformation';
import GongSingleCard from '../components/GongSingleCard';
import TopCards from '../components/TopCards';
import LeftCards from '../components/LeftCards';
import RightCards from '../components/RightCards';
import GongDoubleCard from "../components/GongDoubleCard.tsx";

function HomePage() {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 7000);
    };
    const navigate = useNavigate();
    const { activeAccount, disconnectKeylessAccount } = useKeylessAccounts();

    useEffect(() => {
        if (!activeAccount) navigate("/");
    }, [activeAccount, navigate]);

    const playerInfo = {
        handCards: ["红桃1",
            "红桃2",
            "红桃3",
            "红桃4",
            "红桃5",
            "红桃6",
            "红桃7",
            "红桃8",
            "红桃9",
            "红桃10",
            "红桃11",
            "红桃12",
            "红桃13"],
        playersCardsNum: {}
    };
    const pokerPlayer = new PokerPlayer(playerInfo);

    const [cards, setCards] = useState([]);
    const [selectedCardIndexes, setSelectedCardIndexes] = useState([]);

    useEffect(() => {
        setCards(pokerPlayer.handCards.map((cardNumber: any) => `/cards/hongtao/${cardNumber}.svg`));
    }, [pokerPlayer.handCards]);

    const handleCardClick = (index) => {
        if (selectedCardIndexes.includes(index)) {
            setSelectedCardIndexes(selectedCardIndexes.filter((i) => i !== index));
        } else {
            setSelectedCardIndexes([...selectedCardIndexes, index]);
        }
    };

    const getCardStyle = (index) => {
        return {
            transform: selectedCardIndexes.includes(index) ? "translateY(-30px)" : "none",
            transition: "transform 0.2s ease-in-out",
            marginBottom: selectedCardIndexes.includes(index) ? "100px" : "0",
            zIndex: selectedCardIndexes.includes(index) ? 1 : "auto"
        };
    };

    const renderPlayPassButtons = (index) => {
        if (selectedCardIndexes.includes(index)) {
            return (
                <div className="flex gap-4 items-center">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">Play</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md">Pass</button>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="p-5 h-screen grid grid-rows-layout grid-cols-layout relative" style={{
            backgroundImage: 'url("/background2.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <AccountComponent activeAccount={activeAccount} disconnectKeylessAccount={disconnectKeylessAccount}/>
            <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex justify-center items-center">
                <TopCards cardNumber={27}/>
            </div>
            <div className="col-start-1 col-end-2 row-start-2 row-end-3 flex justify-center items-center">
                <LeftCards cardNumber={27}/>
            </div>
            <div
                className="col-start-2 col-end-2 row-start-2 row-end-3 flex flex-col justify-center items-center gap-4">
                <div className="p-4 bg-brown shadow-lg rounded-lg ">
                    <article className="flex space-x-3">
                        {/*根据上局游戏结果 判定1. 是否加载贡牌界面 2.加载单贡还是双贡界面 */}
                        {/* <GongSingleCard /> */}
                        <GongSingleCard/>
                    </article>
                </div>
            </div>
            <div className="col-start-3 col-end-4 row-start-2 row-end-2.5 flex justify-center items-center">
                <RightCards cardNumber={27}/>
            </div>
            <div className="col-start-1 col-end-5 row-start-7 row-end-9 flex flex-col items-center">
                <div className="flex justify-center items-center h-full">
                    <div className="flex-1">
                        <div className="bottom-section">
                            {cards.map((cardSrc, index) => (
                                <div key={index} className="inline-block" onClick={() => handleCardClick(index)}
                                     style={getCardStyle(index)}>
                                    <img src={cardSrc} alt="Card" width={60} height={100}/>
                                    {renderPlayPassButtons(index)}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-3 flex items-center gap-10">
                        <GradeInformation myGrade={3} opponentGrade={3} currentLevelCard={3}/>
                        <div className="flex justify-center items-center">
                            <img src={`/cards/hongtao/红桃3.svg`} width={60} height={100} alt="Card 2"/>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-300 border border-gray-300 rounded-md p-4 text-center match-popup"
                    style={{
                        width: '35%',
                        minHeight: '100px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <p className="text-xl font-bold">您已出完,本局胜利! </p>
                </div>
            )}
            {!showPopup && (
                <div className="fixed bottom-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="bg-blue-500 text-white px-9 py-5 rounded-md" onClick={() => handleClick(true)}>
                        Play
                    </button>
                    <button className="bg-red-500 text-white px-9 py-5 rounded-md" onClick={() => handleClick(false)}>
                        Pass
                    </button>
                </div>
            )}
        </div>
    );
};

const AccountComponent = ({activeAccount, disconnectKeylessAccount}) => {
    const handleCopyAddress = () => {
        if (activeAccount) {
            const address = activeAccount.accountAddress.toString();
            navigator.clipboard.writeText(address);
            alert("Address copied to clipboard: " + address);
        }
    };

    return (
        <div className="absolute top-0 right-0 m-5">
            <div className="flex flex-col items-center justify-center">
                {activeAccount ? (
                    <div className="grid gap-2">
                        <div
                            className="flex justify-center items-center border rounded-lg px-8 py-2 shadow-sm cursor-pointer"
                            onClick={handleCopyAddress} style={{color: 'white'}}>
                            <GoogleLogo/>
                            {collapseAddress(activeAccount.accountAddress.toString())}
                        </div>
                        <button
                            className="flex justify-center bg-red-50 items-center border border-red-200 rounded-lg px-8 py-2 shadow-sm shadow-red-300 hover:bg-red-100 active:scale-95 transition-all"
                            onClick={disconnectKeylessAccount}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <p>Not logged in</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;