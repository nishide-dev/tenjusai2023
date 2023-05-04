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

    return (
        <div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                    <span>{days}</span>
                    </span>
                    days
                </div> 
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                    <span>{hours}</span>
                    </span>
                    hours
                </div> 
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                    <span>{minutes}</span>
                    </span>
                    min
                </div> 
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                    <span>{seconds}</span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default Countdown;






