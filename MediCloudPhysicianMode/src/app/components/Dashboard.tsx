import { Activity, FileText, Pill, AlertCircle, AlertTriangle, Calendar, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function Dashboard() {
  const stats = [
    { label: 'Total Records', value: '24', icon: FileText, color: 'text-blue-600' },
    { label: 'Active Medications', value: '3', icon: Pill, color: 'text-green-600' },
    { label: 'Known Allergies', value: '2', icon: AlertTriangle, color: 'text-red-600' },
    { label: 'Conditions', value: '2', icon: AlertCircle, color: 'text-yellow-600' },
  ];

  // Heart rate data for last 24 hours (hourly intervals)
  const heartRateData = [
    { time: '00:00', bpm: 62 },
    { time: '01:00', bpm: 61 },
    { time: '02:00', bpm: 63 },
    { time: '03:00', bpm: 64 },
    { time: '04:00', bpm: 65 },
    { time: '05:00', bpm: 66 },
    { time: '06:00', bpm: 72 },
    { time: '07:00', bpm: 75 },
    { time: '08:00', bpm: 78 },
    { time: '09:00', bpm: 80 },
    { time: '10:00', bpm: 82 },
    { time: '11:00', bpm: 79 },
    { time: '12:00', bpm: 81 },
    { time: '13:00', bpm: 83 },
    { time: '14:00', bpm: 85 },
    { time: '15:00', bpm: 84 },
    { time: '16:00', bpm: 82 },
    { time: '17:00', bpm: 80 },
    { time: '18:00', bpm: 78 },
    { time: '19:00', bpm: 76 },
    { time: '20:00', bpm: 74 },
    { time: '21:00', bpm: 72 },
    { time: '22:00', bpm: 68 },
    { time: '23:00', bpm: 64 },
  ];

  // Daytime stress data (8am-8pm, hourly intervals)
  const stressData = [
    { time: '08:00', stress: 2.5 },
    { time: '09:00', stress: 3.2 },
    { time: '10:00', stress: 5.8 },
    { time: '11:00', stress: 6.4 },
    { time: '12:00', stress: 6.1 },
    { time: '13:00', stress: 4.8 },
    { time: '14:00', stress: 7.2 },
    { time: '15:00', stress: 7.5 },
    { time: '16:00', stress: 6.9 },
    { time: '17:00', stress: 6.5 },
    { time: '18:00', stress: 4.3 },
    { time: '19:00', stress: 3.8 },
    { time: '20:00', stress: 3.1 },
  ];

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-foreground">Welcome, Dr. Meredith Grey</h1>
        <p className="text-muted-foreground mt-1">Here's Christina's health overview</p>
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
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-5 h-5 text-primary" />
              <h2>Physiological Data</h2>
            </div>
            <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
              Collected from Christina's Wearable
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3" style={{ fontSize: '15px' }}>Heart Rate (bpm) - Last 24 Hours</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={heartRateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="time"
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                    interval={3}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                    domain={[50, 90]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="bpm"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h3 className="mb-3" style={{ fontSize: '15px' }}>Daytime Stress (1-10 scale)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={stressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="time"
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                    interval={2}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                    domain={[0, 10]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="stress"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
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
                <p className="mt-1" style={{ fontWeight: 500 }}>Christina Rodriguez</p>
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
          </div>
        </div>
      </div>

  );
}
