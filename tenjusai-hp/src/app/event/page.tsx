'use client';
import { useState, useEffect, useCallback } from 'react';
import { Particles } from "react-tsparticles";
import { loadFull } from 'tsparticles';
import Fireworks from '@/components/animations/Fireworks';

const Event = () => {

    return (
        <div className=" flex items-center justify-center">
            <div className="h-[40vh] -z-10 bg-none">
              <Fireworks />
            </div>

        </div>
    );
};

export default Event;
