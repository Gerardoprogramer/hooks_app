import { useTrafficLight } from "../Hooks/useTrafficLight";

export const TrafficLightWithEffect = () => {
    const { Light, seconds, colors } = useTrafficLight();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-3xl font-thin">Traffic Light with useEffect</h1>
        <h2 className="text-white text-xl">{seconds}</h2>
        <div className="w-62 h-2 rounded-full bg-gray-700">
          <div className="h-2 rounded-full bg-blue-500 transition-all duration-1000 ease-in-out" style={{ width: `${(seconds / 10) * 100}%` }}></div>
        </div>

        <div className={`w-32 h-32 ${Light === 'red' ? colors[Light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${Light === 'yellow' ? colors[Light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${Light === 'green' ? colors[Light] : 'bg-gray-500'} rounded-full`}></div>
      </div>
    </div>
  );
};
