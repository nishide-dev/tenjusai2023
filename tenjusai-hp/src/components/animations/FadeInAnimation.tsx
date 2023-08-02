'use client';
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInWhenVisibleProps {
  children: ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInWhenVisibleProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
      // オプション
      rootMargin: '-100px',
      triggerOnce: true, // 最初の一度だけ実行
  });

  return (
      <div
          ref={ref}
          className={`${inView ? " animate-fade-in" : "opacity-0"} ${className}`}
      >
          {children}
      </div>
  )
}

const FadeInToRight: React.FC<FadeInWhenVisibleProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
      // オプション
      rootMargin: '-100px',
      triggerOnce: true, // 最初の一度だけ実行
  });

  return (
      <div
          ref={ref}
          className={`${inView ? " animate-fade-in-right" : "opacity-0"} ${className}`}
      >
          {children}
      </div>
  )
}

const FadeInToLeft: React.FC<FadeInWhenVisibleProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
      // オプション
      rootMargin: '-100px',
      triggerOnce: true, // 最初の一度だけ実行
  });

  return (
      <div
          ref={ref}
          className={`${inView ? " animate-fade-in-left" : "opacity-0"} ${className}`}
      >
          {children}
      </div>
  )
}

const FadeInToUp: React.FC<FadeInWhenVisibleProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
      // オプション
      rootMargin: '-100px',
      triggerOnce: true, // 最初の一度だけ実行
  });

  return (
      <div
          ref={ref}
          className={`${inView ? " animate-fade-in-up" : "opacity-0"} ${className}`}
      >
          {children}
      </div>
  )
}

const FadeInToDown: React.FC<FadeInWhenVisibleProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
      // オプション
      rootMargin: '-100px',
      triggerOnce: true, // 最初の一度だけ実行
  });

  return (
      <div
          ref={ref}
          className={`${inView ? " animate-fade-in-down" : "opacity-0"} ${className}`}
      >
          {children}
      </div>
  )
}

export { FadeIn, FadeInToRight, FadeInToLeft, FadeInToUp, FadeInToDown };