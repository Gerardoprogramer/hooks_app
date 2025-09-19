import { useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}

type LightColor = keyof typeof colors;

export const TrafficLight = () => {

    const [Light, setLight] = useState<LightColor>('red');

    const handleColorChange = (color: LightColor) => {
        setLight(color);
    }

  return (
 <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <div className={`w-32 h-32 ${Light === 'red' ? colors[Light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${Light === 'yellow' ? colors[Light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${Light === 'green' ? colors[Light]   : 'bg-gray-500'} rounded-full`}></div>

        <div className="flex gap-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => handleColorChange('red')}>
            Rojo
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => handleColorChange('yellow')}>
            Amarillo
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => handleColorChange('green')}>
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};
