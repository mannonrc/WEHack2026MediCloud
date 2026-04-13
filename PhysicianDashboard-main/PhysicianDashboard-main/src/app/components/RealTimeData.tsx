import { Activity, CircleGauge, HeartPulse, FileText, Pill, AlertCircle, AlertTriangle, Calendar, TrendingUp,Baby } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function RealTimeData() {
  const stats = [
    { label: 'Fetal Heart Rate', value: '123', icon: HeartPulse, color: 'text-green-600' },
    { label: 'Number of Fetal Kicks', value: '3', icon: Baby, color: 'text-blue-600' },
    { label: 'Christina Heart Rate', value: '89', icon: HeartPulse, color: 'text-green-600' },
    { label: 'Christina Blood Pressure', value: '112/79', icon: CircleGauge, color: 'text-green-600' },
  ];

  // Real Time Heart rate data
  const heartRateData = [
  { time: '07:11', bpm: 124 },
  { time: '07:12', bpm: 122 },
  { time: '07:13', bpm: 120 },
  { time: '07:14', bpm: 118 },
  { time: '07:15', bpm: 116 }, // mild deceleration
  { time: '07:16', bpm: 114 },
  { time: '07:17', bpm: 117 },
  { time: '07:18', bpm: 119 },
  { time: '07:19', bpm: 121 },
  { time: '07:20', bpm: 123 },
  { time: '07:21', bpm: 126 },
  { time: '07:22', bpm: 130 }, // second acceleration
  { time: '07:23', bpm: 133 },
  { time: '07:24', bpm: 129 },
  { time: '07:25', bpm: 125 },
  { time: '07:26', bpm: 122 },
  { time: '07:27', bpm: 120 },
  { time: '07:28', bpm: 118 },
  { time: '07:29', bpm: 119 },
  { time: '07:30', bpm: 123 },
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
        <h1 className="text-foreground">Real Time Data</h1>
        <p className="text-muted-foreground mt-1">Here's Christina's real time data</p>
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
              <h2>Fetal Live Data</h2>
            </div>
            <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
              Clinical Surveillance System
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3" style={{ fontSize: '15px' }}>Non-Stress Test - Heart Rate (bpm)</h3>
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
  <h3 className="mb-3" style={{ fontSize: '15px' }}>
    Fetal Ultrasound
  </h3>

  <div className="w-full h-[200px] flex items-center justify-center border border-border rounded-md bg-muted/20">
    <img
      src="https://raisingchildren.net.au/__data/assets/image/0022/49117/pregnancy-scan-12-weeks-dadsnarrow.jpg"
      alt="Fetal Ultrasound"
      className="max-h-full max-w-full object-contain rounded-md"
    />
  </div>
</div>
          </div>
        </div>
        
<div className="bg-card border border-border rounded-lg p-6">
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-1">
        <Activity className="w-5 h-5 text-primary" />
        <h2>Christina's Live Data</h2>
      </div>
      <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
        Parallel Monitoring Stream
      </p>
    </div>

    <div className="space-y-6">
      <div>
        <h3 className="mb-3" style={{ fontSize: '15px' }}>
          Heart Rate (bpm)
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={heartRateData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} interval={3} />
            <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} domain={[50, 90]} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
            <Line type="monotone" dataKey="bpm" stroke="#22c55e" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
          </div>
      </div>

  );
}
