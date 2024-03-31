const RoundButton: React.FC = () => {
    return (
      <div className="flex items-center justify-center min-h-screen select-none font-mono">
      <div className="grid grid-cols-4 gap-4">
        <h1
          className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]">
          button</h1>
        <h1
          className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]">
          button</h1>
        <h1
          className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]">
          button</h1>
        <h1
          className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]">
          button</h1>
      </div>
    </div>
    );

    <div className="text-center mt-4">
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-150">
      出牌
    </button>
    <button className="bg-red-500 text-white px-4 py-2 ml-4 rounded hover:bg-red-700 transition duration-150">
      不要
    </button>
  </div>
  };
  
  export default RoundButton;
  

