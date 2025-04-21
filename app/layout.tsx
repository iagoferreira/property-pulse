import '@/assets/styles/globals.css';
import type { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default MainLayout;
