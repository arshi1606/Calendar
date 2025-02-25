// "use client";

// import "./globals.css";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import Cookies from "js-cookie";
// import io, { Socket } from "socket.io-client";
// import React, { createContext, useEffect, useState } from "react";

// export const SocketContext = createContext<Socket | null>(null);

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [socket, setSocket] = useState<Socket | null>(null);

//   useEffect(() => {
//     const newSocket = io("http://localhost:4000");
//     setSocket(newSocket);

//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   const httpLink = createHttpLink({
//     uri: "http://localhost:4000/graphql",
//   });

//   const authLink = setContext((_, { headers }) => {
//     const token = Cookies.get("token");
//     return {
//       headers: {
//         ...headers,
//         Authorization: token ? `${token}` : "",
//       },
//     };
//   });

//   const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache(),
//   });

//   return (
//     <html lang="en">
//       <body>
//         <SocketContext.Provider value={socket}>
//           <ApolloProvider client={client}>{children}</ApolloProvider>
//         </SocketContext.Provider>
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import ApolloProviderWrapper from "@/components/ApolloProviderWrapper";
import SocketProvider from "@/components/SocketProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SocketProvider>
          <ApolloProviderWrapper>{children}</ApolloProviderWrapper>
        </SocketProvider>
      </body>
    </html>
  );
}

