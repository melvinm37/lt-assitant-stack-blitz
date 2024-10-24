import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Receipt,
  FolderOpen,
  Settings,
  LogOut,
} from 'lucide-react';

export function Navbar() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-forest-dark text-white p-4">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-8">
          <LayoutDashboard className="w-6 h-6" />
          <span className="text-xl font-bold">FinanceApp</span>
        </div>

        <div className="flex-1 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-forest hover:text-white"
            onClick={() => navigate('/dashboard')}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-forest hover:text-white"
            onClick={() => navigate('/crm')}
          >
            <Users className="mr-2 h-4 w-4" />
            CRM
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-forest hover:text-white"
            onClick={() => navigate('/projects')}
          >
            <ClipboardList className="mr-2 h-4 w-4" />
            Projects
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-forest hover:text-white"
            onClick={() => navigate('/finance')}
          >
            <Receipt className="mr-2 h-4 w-4" />
            Finance
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-forest hover:text-white"
            onClick={() => navigate('/documents')}
          >
            <FolderOpen className="mr-2 h-4 w-4" />
            Documents
          </Button>

          {user?.role === 'admin' && (
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-forest hover:text-white"
              onClick={() => navigate('/admin')}
            >
              <Settings className="mr-2 h-4 w-4" />
              Admin
            </Button>
          )}
        </div>

        <div className="pt-4 border-t border-forest">
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-forest hover:text-white"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}