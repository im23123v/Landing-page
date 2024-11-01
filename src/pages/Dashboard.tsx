import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Bell, Settings, Users, FileText, Lock } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const metrics = [
    { label: 'Security Score', value: '92%', icon: <Shield className="h-6 w-6" /> },
    { label: 'Active Alerts', value: '3', icon: <Bell className="h-6 w-6" /> },
    { label: 'Security Policies', value: '24', icon: <FileText className="h-6 w-6" /> },
    { label: 'Team Members', value: '12', icon: <Users className="h-6 w-6" /> }
  ];

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Security Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Settings className="h-6 w-6 text-gray-600" />
          </button>
          <button 
            onClick={() => logout()}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            <Lock className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                {metric.icon}
              </div>
              <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
            </div>
            <h3 className="text-gray-600">{metric.label}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            {[
              { title: 'Unusual Login Activity', severity: 'High', time: '2h ago' },
              { title: 'Failed Authentication Attempts', severity: 'Medium', time: '4h ago' },
              { title: 'System Update Available', severity: 'Low', time: '6h ago' }
            ].map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">{alert.title}</h3>
                  <p className="text-sm text-gray-600">{alert.time}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  alert.severity === 'High' ? 'bg-red-100 text-red-800' :
                  alert.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {alert.severity}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Security Recommendations</h2>
          <div className="space-y-4">
            {[
              'Enable two-factor authentication',
              'Update system passwords',
              'Review access permissions',
              'Backup critical data'
            ].map((recommendation, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="h-2 w-2 bg-blue-600 rounded-full" />
                <span>{recommendation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}