import "../web.css"
import type { Metadata } from "next";
import LeftSidebar from "./components/LeftSidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";

export const metadata: Metadata = {
  title: "Alto e o Baixo",
  description: "Alto e o Baixo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex min-h-screen">
          <div className="fixed">
            <LeftSidebar />
          </div>

          <div className="flex-grow">
            <Feed>{children} </Feed>
          </div>

          <div className="fixed right-0">
            <RightSidebar />
          </div>
        </div>   
      </body>
    </html>
  );
}
