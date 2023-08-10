'use client';
import { useState, useEffect, useCallback } from 'react';
import Foods from '@/components/animations/Foods';

const Yatai: React.FC = () => {
    return (
        <>
            <div className="">
                <div className="min-h-screen -z-10 bg-none fixed">
                    <Foods />
                </div>
                <div className="min-h-screen">
                                        
                </div>
            </div>
        </>
    );
}

export default Yatai;