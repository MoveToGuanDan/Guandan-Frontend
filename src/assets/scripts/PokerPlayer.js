import { GameObject } from "./GameObject";

export class PokerPlayer extends GameObject {
    constructor(info) {
        super();
        this.ourLevel = 2; // 我方级数
        this.enemyLevel = 2; // 敌方级数
        this.currentLevelCard = 3; // 当前级牌
        this.handCards = info.handCards; // 手牌
        this.cardsOnTable = null; // 场上牌
        this.status = "others"; // 状态（等待其他玩家出牌或者自己出牌）others 或者 me
        this.currentDeckRank = {}; // 本副牌上游二游三游下游
        this.lastWinningTeam = null; // 上一副牌获胜队伍
        this.lastDeckRank = null; // 上一副牌的上游二游三游下游
        this.playersCardsNum = {"1": 27, "2": 27, "3": 27, "4":27};
    }

    // 可以在这里添加方法，例如更新状态，出牌等
    start() { // 只执行一次

    }

    update() { // 每一帧执行一次

    }

    render() {

    }
    
}