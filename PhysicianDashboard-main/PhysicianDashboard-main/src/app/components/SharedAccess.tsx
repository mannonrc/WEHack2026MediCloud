import { Users, Share2, Clock } from 'lucide-react';

export function SharedAccess() {
  const sharedWith = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Primary Care Physician',
      accessLevel: 'Full Access',
      sharedOn: '2026-01-15',
      expiry: 'No expiration',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Specialist - Endocrinology',
      accessLevel: 'Full Access',
      sharedOn: '2026-02-20',
      expiry: '2026-08-20',
    },
    {
      name: 'City Medical Center',
      role: 'Healthcare Facility',
      accessLevel: 'Records Only',
      sharedOn: '2026-03-10',
      expiry: 'No expiration',
    },
    {
      name: 'Jane Doe',
      role: 'Emergency Contact',
      accessLevel: 'View Only',
      sharedOn: '2025-12-01',
      expiry: 'No expiration',
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-foreground">Shared Access</h1>
        <p className="text-muted-foreground mt-1">
          Manage who has access to Christina's health records
        </p>
      </div>

      <div className="flex gap-4">
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
          Share Records
        </button>
        <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-accent transition-colors">
          Revoke Access
        </button>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-accent">
              <tr>
                <th className="text-left p-4" style={{ fontWeight: 500 }}>
                  Name
                </th>
                <th className="text-left p-4" style={{ fontWeight: 500 }}>
                  Role
                </th>
                <th className="text-left p-4" style={{ fontWeight: 500 }}>
                  Access Level
                </th>
                <th className="text-left p-4" style={{ fontWeight: 500 }}>
                  Shared On
                </th>
                <th className="text-left p-4" style={{ fontWeight: 500 }}>
                  Expiry
                </th>
                <th className="text-left p-4" style={{ fontWeight: 500 }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {sharedWith.map((person, idx) => (
                <tr
                  key={idx}
                  className="border-t border-border hover:bg-accent/50 transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <span style={{ fontWeight: 500 }}>{person.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">{person.role}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-800" style={{ fontSize: '14px' }}>
                      {person.accessLevel}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">{person.sharedOn}</td>
                  <td className="p-4 text-muted-foreground">{person.expiry}</td>
                  <td className="p-4">
                    <button className="text-primary hover:underline" style={{ fontSize: '14px' }}>
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Share2 className="w-5 h-5 text-primary" />
            <h2>Recent Sharing Activity</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-accent rounded-lg">
              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
              <div className="flex-1">
                <p style={{ fontWeight: 500 }}>Shared with Dr. Michael Chen</p>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Full access granted
                </p>
                <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                  2026-02-20
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-accent rounded-lg">
              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
              <div className="flex-1">
                <p style={{ fontWeight: 500 }}>Updated access for City Medical Center</p>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Changed to records only
                </p>
                <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                  2026-03-10
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <h2>Access Expiring Soon</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-yellow-600 mt-2"></div>
              <div className="flex-1">
                <p style={{ fontWeight: 500 }}>Dr. Michael Chen</p>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Access expires on 2026-08-20
                </p>
                <button className="text-primary mt-1" style={{ fontSize: '13px' }}>
                  Extend access
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
