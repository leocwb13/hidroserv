import React, { useState } from 'react';
import AdminLogin from '../components/AdminLogin';
import AdminPanel from '../components/AdminPanel';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (success: boolean) => {
    setIsAuthenticated(success);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminPanel 
        isOpen={true} 
        onClose={handleLogout}
      />
    </div>
  );
}