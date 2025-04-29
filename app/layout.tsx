import '@/assets/styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Property Pulse',
  keywords: 'rental, property, real estate',
  description: 'Find the perfect rental property'
}

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
