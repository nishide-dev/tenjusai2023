'use client';
import { useState, useEffect, useCallback } from 'react';
import { Particles } from "react-tsparticles";
import { loadFull } from 'tsparticles';
import Foods from '@/components/animations/Foods';

const Event = () => {

    return (
        <div className=" flex items-center justify-center">
            <div className="min-h-screen -z-10 bg-none">
              <Foods />
            </div>

        </div>
    );
};

export default Event;
