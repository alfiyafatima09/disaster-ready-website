import type { Metadata } from 'next';
import Navbar from '../components/Navbar'; // Import the Navbar component
import './globals.css';

export const metadata: Metadata = {
  title: "RescueRing",
  description: "Disaster Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar /> {/* Include the Navbar here */}
        <main>{children}</main>
      </body>
    </html>
  );
}

