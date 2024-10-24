import { Navbar } from './Navbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-almond-light">
      <Navbar />
      <main className="ml-64 p-8">{children}</main>
    </div>
  );
}