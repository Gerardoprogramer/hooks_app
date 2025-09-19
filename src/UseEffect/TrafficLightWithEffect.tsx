import { use, useEffect, useState } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse'
}

type LightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {

  const [Light, setLight] = useState<LightColor>('red');
  const [seconds, setSeconds] = useState(10);

  //Countdown timer
  useEffect(() => {
    if (seconds === 0) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000); 

      return () => clearInterval(interval);
    
  }, [seconds]);

  //Change light when seconds is 0
  useEffect(() => {

    if (seconds === 0) {
      setLight(prev => prev === 'red' ? 'green' : prev === 'green' ? 'yellow' : 'red');
      setSeconds(10);
      return;
    }
    
  },[seconds,Light]);
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-3xl font-thin">Traffic Light with useEffect</h1>
        <h2 className="text-white text-xl">{seconds}</h2>
        <div className="w-62 h-2 rounded-full bg-gray-700">
          <div className="h-2 rounded-full bg-blue-500 transition-all duration-1000 ease-in-out" style={{width: `${(seconds / 10) * 100}%`}}></div>
        </div>

        <div className={`w-32 h-32 ${Light === 'red' ? colors[Light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${Light === 'yellow' ? colors[Light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${Light === 'green' ? colors[Light] : 'bg-gray-500'} rounded-full`}></div>
      </div>
    </div>
  );
};
