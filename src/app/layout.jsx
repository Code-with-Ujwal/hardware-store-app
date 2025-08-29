// src/app/layout.jsx
import '../styles/globals.css';

import { CartProvider } from '../components/CartProvider';


export const metadata = {
  title: 'Hardware Store',
  description: 'Mobile-first hardware store demo'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
