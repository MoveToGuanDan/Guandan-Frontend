import React from 'react';

// 定义props的接口
interface GradeInformationProps {
  myGrade: number; // 我方级数
  opponentGrade: number; // 敌方级数
  currentLevelCard: number; // 当前级牌
}

const GradeInformation: React.FC<GradeInformationProps> = ({ myGrade, opponentGrade, currentLevelCard }) => {
  return (
    <div className="p-5">
        <div className="relative w-full max-w-lg">
          <div className="m-2 relative space-y-2">
            <div className="p-2 bg-white rounded-lg flex items-center justify-between space-x-8">
              <div className="flex-1 flex justify-between items-center space-x-2">
                <div className="h-8 w-20 bg-gray-300 rounded flex items-center justify-center font-bold">我方级数</div>
                <div className="w-8 h-8 rounded-lg bg-purple-300 flex items-center justify-center font-bold">{myGrade}</div>
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg flex items-center justify-between space-x-8">
              <div className="flex-1 flex justify-between items-center space-x-2">
                <div className="h-8 w-20 bg-gray-300 rounded flex items-center justify-center font-bold">敌方级数</div>
                <div className="w-8 h-8 rounded-lg bg-purple-300 flex items-center justify-center font-bold">{opponentGrade}</div>
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg flex items-center justify-between space-x-8">
              <div className="flex-1 flex justify-between items-center space-x-2">
                <div className="h-8 w-20 bg-gray-300 rounded flex items-center justify-center font-bold">当前级牌</div>
                <div className="w-8 h-8 rounded-lg bg-purple-300 flex items-center justify-center font-bold">{currentLevelCard}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default GradeInformation;
