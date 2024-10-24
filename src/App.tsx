import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { AuthGuard } from '@/components/auth/AuthGuard';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Dashboard } from '@/pages/Dashboard';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </AuthGuard>
          }
        />
        <Route
          path="/crm"
          element={
            <AuthGuard>
              <DashboardLayout>
                <div>CRM Module (Coming Soon)</div>
              </DashboardLayout>
            </AuthGuard>
          }
        />
        <Route
          path="/projects"
          element={
            <AuthGuard>
              <DashboardLayout>
                <div>Projects Module (Coming Soon)</div>
              </DashboardLayout>
            </AuthGuard>
          }
        />
        <Route
          path="/finance"
          element={
            <AuthGuard>
              <DashboardLayout>
                <div>Finance Module (Coming Soon)</div>
              </DashboardLayout>
            </AuthGuard>
          }
        />
        <Route
          path="/documents"
          element={
            <AuthGuard>
              <DashboardLayout>
                <div>Documents Module (Coming Soon)</div>
              </DashboardLayout>
            </AuthGuard>
          }
        />
        <Route
          path="/admin"
          element={
            <AuthGuard requiredRole="admin">
              <DashboardLayout>
                <div>Admin Settings (Coming Soon)</div>
              </DashboardLayout>
            </AuthGuard>
          }
        />
        <Route path="/" element={<LoginForm />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;