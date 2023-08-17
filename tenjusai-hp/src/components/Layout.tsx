'use client';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Supporters from '@/components/Supporters'
import { NextUIProvider } from "@nextui-org/react";
import React from 'react';
import useDomain from '@/utils/useDomain';

export default function Layout({ children }: { children: React.ReactNode }) {
    const { domain } = useDomain();
    return (
        <body className="scrollbar-hide">
          <Header />
          <main>
            <NextUIProvider>
            {children}
            </NextUIProvider>
          </main>
          <Supporters />
          <Footer />
        </body>
    )
}