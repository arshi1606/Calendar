"use client";

import { createContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

export const SocketContext = createContext<typeof Socket | null>(null);

export default function SocketProvider({ children }: { children: React.ReactNode }) {
  const [socket, setSocket] = useState<typeof Socket | null>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}
