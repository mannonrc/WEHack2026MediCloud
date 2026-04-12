import { Activity, FileText, Pill, AlertCircle, AlertTriangle, Calendar, TrendingUp } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { label: 'Total Records', value: '24', icon: FileText, color: 'text-blue-600' },
    { label: 'Active Medications', value: '3', icon: Pill, color: 'text-green-600' },
    { label: 'Known Allergies', value: '2', icon: AlertTriangle, color: 'text-red-600' },
    { label: 'Conditions', value: '2', icon: AlertCircle, color: 'text-yellow-600' },
  ];

  const recentRecords = [
    { date: '2026-04-08', type: 'Lab Results', doctor: 'Dr. Sarah Johnson', facility: 'Central Lab' },
    { date: '2026-03-22', type: 'Consultation', doctor: 'Dr. Michael Chen', facility: 'City Medical Center' },
    { date: '2026-03-15', type: 'Prescription', doctor: 'Dr. Sarah Johnson', facility: 'City Medical Center' },
    { date: '2026-02-28', type: 'X-Ray', doctor: 'Dr. Robert Martinez', facility: 'Imaging Center' },
  ];

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-foreground">Welcome back, Astronaut Christina</h1>
        <p className="text-muted-foreground mt-1">Here's your health overview</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground" style={{ fontSize: '14px' }}>{stat.label}</p>
                  <p className="mt-2" style={{ fontSize: '32px', fontWeight: 600, lineHeight: 1 }}>
                    {stat.value}
                  </p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-primary" />
            <h2>Recent Activity</h2>
          </div>
          <div className="space-y-3">
            {recentRecords.map((record, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-accent rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div className="flex-1">
                  <p style={{ fontWeight: 500 }}>{record.type}</p>
                  <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                    {record.doctor} • {record.facility}
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                    {record.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="mb-4">Emergency Information</h2>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3" style={{ fontSize: '15px' }}>Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Full Name</p>
                <p className="mt-1" style={{ fontWeight: 500 }}>Christina Koch</p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Age</p>
                <p className="mt-1" style={{ fontWeight: 500 }}>41 years</p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Biological Gender</p>
                <p className="mt-1" style={{ fontWeight: 500 }}>Female</p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Ethnicity</p>
                <p className="mt-1" style={{ fontWeight: 500 }}>Hispanic/Latino</p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Blood Type</p>
                <p className="mt-1" style={{ fontWeight: 500 }}>A+</p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Language Fluency</p>
                <p className="mt-1" style={{ fontWeight: 500 }}>English, Spanish</p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Organ Donor</p>
                <p className="mt-1" style={{ fontWeight: 500 }}>Yes</p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Pregnant</p>
                <p className="mt-1" style={{ fontWeight: 500 }}>No</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="mb-3" style={{ fontSize: '15px' }}>Medical Alerts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Known Allergies</p>
                <p className="mt-1" style={{ fontWeight: 500 }}>Penicillin, Shellfish</p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Chronic Conditions</p>
                <p className="mt-1" style={{ fontWeight: 500 }}>Hypertension, Type 2 Diabetes</p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Current Medications</p>
                <p className="mt-1" style={{ fontWeight: 500 }}>Lisinopril 10mg, Metformin 500mg, Atorvastatin 20mg</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="mb-3" style={{ fontSize: '15px' }}>Emergency Contacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Emergency Contact</p>
                <p className="mt-1" style={{ fontWeight: 500 }}>Jane Doe (Spouse)</p>
                <p className="text-muted-foreground" style={{ fontSize: '13px' }}>+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>Primary Care Physician</p>
                <p className="mt-1" style={{ fontWeight: 500 }}>Dr. Sarah Johnson</p>
                <p className="text-muted-foreground" style={{ fontSize: '13px' }}>+1 (555) 987-6543</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2>Quick Actions</h2>
          </div>
          <div className="space-y-3">
            <button className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Add New Medical Record
            </button>
            <button className="w-full bg-secondary text-secondary-foreground px-4 py-3 rounded-lg hover:bg-accent transition-colors">
              Add Condition
            </button>
            <button className="w-full bg-secondary text-secondary-foreground px-4 py-3 rounded-lg hover:bg-accent transition-colors">
              Share Records with Doctor
            </button>
            <button className="w-full bg-secondary text-secondary-foreground px-4 py-3 rounded-lg hover:bg-accent transition-colors">
              Upload Medical History
            </button>
          </div>
        </div>
      </div>

  );
}
