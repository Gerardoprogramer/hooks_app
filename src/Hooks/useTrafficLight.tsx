import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}

type LightColor = keyof typeof colors;

export const useTrafficLight = () => {
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
            Light === 'green' ? setSeconds(5) : setSeconds(10);
            return;
        }

    }, [seconds, Light]);

    return {
        seconds,

        percentage: (seconds / 10) * 100,
        greenLight: Light === 'green' ? colors.green : 'bg-gray-500',
        yellowLight: Light === 'yellow' ? colors.yellow : 'bg-gray-500',
        redLight: Light === 'red' ? colors.red : 'bg-gray-500',
    };
}
