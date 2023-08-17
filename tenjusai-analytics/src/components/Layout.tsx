'use client';
import { NextUIProvider } from "@nextui-org/react";
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <body className="scrollbar-hide">
          <main className="">
            <NextUIProvider>
            {children}
            </NextUIProvider>
          </main>
        </body>
    )
}