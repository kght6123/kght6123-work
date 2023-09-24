"use client";

import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";

interface ScrollInfo {
  scrollTop: number;
  scrollUp: boolean;
}

export const Main = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const mainRef = useRef<HTMLElement>(null);
  const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
    scrollTop: 0,
    scrollUp: true,
  });
  return (
    <main
      onScroll={(e) =>
        setScrollInfo(({ scrollTop, scrollUp }) => {
          // MEMO: 閾値の40px以上スクロールしたらスクロール方向を判定する
          return {
            scrollTop: mainRef.current?.scrollTop || 0,
            scrollUp:
              mainRef.current !== null &&
              Math.abs(mainRef.current.scrollTop - scrollTop) > 10
                ? mainRef.current.scrollTop < scrollTop
                : scrollUp,
          };
        })
      }
      className={clsx(className, "group/body peer/body scroll-smooth")}
      data-scroll-up={scrollInfo.scrollUp}
      ref={mainRef}
    >
      {children}
    </main>
  );
};
