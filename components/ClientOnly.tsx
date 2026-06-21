"use client";
import { useState, useEffect, type ReactNode } from "react";

export default function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- ClientOnly pattern requires synchronous mount
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <>{children}</>;
}
