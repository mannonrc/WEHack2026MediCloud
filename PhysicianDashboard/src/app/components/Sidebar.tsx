import { Home, Activity, Cloud, FileText, Pill, Stethoscope, AlertTriangle, AlertCircle, Calendar, FolderOpen, User, Share2 } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'records', label: 'Medical Records', icon: FileText },
    { id: 'medications', label: 'Medications', icon: Pill },
    { id: 'allergies', label: 'Allergies', icon: AlertTriangle },
    { id: 'conditions', label: 'Conditions', icon: AlertCircle },
    { id: 'documents', label: 'Medical History', icon: FolderOpen },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'rtdata', label: 'Real Time Data', icon: Activity },
  ];

  return (
    <div className="w-64 bg-card border-r border-border h-full flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-primary flex items-center gap-2">
          <Cloud className="w-6 h-6" />
          MediCloud
        </h1>
        <p className="text-muted-foreground mt-1" style={{ fontSize: '18px', fontWeight: 400 }}>
          Your complete health history, anytime, anywhere
        </p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span style={{ fontSize: '15px' }}>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-border">
        <div className="bg-muted rounded-lg p-4">
          <p style={{ fontSize: '13px' }} className="text-muted-foreground">
            <strong>Note:</strong> This is a demo app. Not HIPAA-compliant.
          </p>
        </div>
      </div>
    </div>
  );
}
