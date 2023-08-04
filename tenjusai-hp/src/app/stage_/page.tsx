'use client';
import { useEffect, useState } from 'react';
import type { WheelEvent } from 'react';

const Stage: React.FC = () => {
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    // スクロールを制御する
    const controlScroll: EventListener = (e) => {
      const wheelEvent = e as unknown as WheelEvent;
      if ((radius < 2000 && wheelEvent.deltaY > 0) || (radius > 0 && wheelEvent.deltaY < 0)) { // 2000は半径の最大値、0は半径の最小値です
        e.preventDefault();
      }
    };
    document.body.addEventListener('wheel', controlScroll, { passive: false });

    // アニメーションを制御する
    const handleScroll: EventListener = (e) => {
      const wheelEvent = e as unknown as WheelEvent;
      setRadius((prevRadius) => {
        const newRadius = Math.max(0, Math.min(prevRadius + wheelEvent.deltaY * 0.5, 2000)); // 2000 は最大半径, 0 は最小半径です。値を調整してください。
        return newRadius;
      });
    };
    window.addEventListener('wheel', handleScroll);

    // イベントリスナーをクリーンアップ
    return () => {
      document.body.removeEventListener('wheel', controlScroll);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [radius]);

  
 
  return (
    <div className="min-h-screen bg-blue-100 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          clipPath: `circle(${radius}px at center)`,
          backgroundColor: 'white',
          transition: 'clip-path 0.5s ease-in-out',
        }}
      >
        <div className="pt-64 px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Scroll Down</h1>
          <p className="text-lg">Watch the circle expand and reveal content below</p>
        </div>
        <div className="mt-64 px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Content Below</h2>
          <p className="text-lg">This content is revealed as the circle expands.</p>
        </div>
      </div>
    </div>
  );
};

export default Stage;


