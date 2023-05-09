'use client';
import { useEffect, useState } from 'react';

interface CountdownProps {
    targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [remainingTime, setRemainingTime] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;
            setRemainingTime(distance);
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const days: number = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes: number = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds: number = Math.floor((remainingTime % (1000 * 60)) / 1000);

    const data = [
        { name: 'days', value: days },
        { name: 'hours', value: hours },
        { name: 'minutes', value: minutes },
        { name: 'seconds', value: seconds },
    ];

    return (
        <div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                {data.map((item) => {
                    return (
                        <div className="flex flex-col" key={item.name}>
                            <span className="countdown font-mono text-5xl">
                            <span>{item.value}</span>
                            </span>
                            {item.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Countdown;