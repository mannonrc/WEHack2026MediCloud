import { Activity, Calendar, Plus, FileText } from 'lucide-react';

export function Conditions() {
  const conditions = [
    {
      name: 'Hypertension (High Blood Pressure)',
      status: 'Active',
      diagnosedDate: '2019-06-15',
      diagnosedBy: 'Dr. Sarah Johnson',
      severity: 'Moderate',
      treatment: 'Lisinopril 10mg daily, lifestyle modifications',
      notes: 'Patient responds well to medication. Blood pressure monitored regularly. Target BP: 120/80 mmHg.',
      lastReviewed: '2026-04-01',
    },
    {
      name: 'Type 2 Diabetes Mellitus',
      status: 'Active',
      diagnosedDate: '2020-11-08',
      diagnosedBy: 'Dr. Michael Chen',
      severity: 'Moderate',
      treatment: 'Metformin 500mg twice daily, dietary management',
      notes: 'HbA1c levels stable at 6.8%. Patient follows recommended diet and exercise plan. Regular glucose monitoring required.',
      lastReviewed: '2026-03-28',
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground">Chronic Conditions</h1>
          <p className="text-muted-foreground mt-1">
            Track your chronic conditions and diagnoses
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Condition
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {conditions.map((condition, idx) => (
          <div key={idx} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="mb-1">{condition.name}</h2>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full ${
                      condition.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`} style={{ fontSize: '12px', fontWeight: 500 }}>
                      {condition.status}
                    </span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full ${
                      condition.severity === 'Severe'
                        ? 'bg-red-100 text-red-800'
                        : condition.severity === 'Moderate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`} style={{ fontSize: '12px', fontWeight: 500 }}>
                      {condition.severity}
                    </span>
                  </div>
                </div>
              </div>
              <button className="text-primary hover:underline" style={{ fontSize: '14px' }}>
                Edit
              </button>
            </div>

            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                    Date Diagnosed
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span style={{ fontWeight: 500 }}>{condition.diagnosedDate}</span>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                    Diagnosed By
                  </p>
                  <p className="mt-1" style={{ fontWeight: 500 }}>
                    {condition.diagnosedBy}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                    Last Reviewed
                  </p>
                  <p className="mt-1" style={{ fontWeight: 500 }}>
                    {condition.lastReviewed}
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                  Current Treatment Plan
                </p>
                <p style={{ fontWeight: 500 }}>
                  {condition.treatment}
                </p>
              </div>

              <div className="bg-accent rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground mb-1" style={{ fontSize: '14px' }}>
                      Clinical Notes
                    </p>
                    <p style={{ fontSize: '14px' }}>
                      {condition.notes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-muted-foreground mb-1" style={{ fontSize: '14px' }}>
            Total Active Conditions
          </p>
          <p style={{ fontSize: '28px', fontWeight: 600 }}>2</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-muted-foreground mb-1" style={{ fontSize: '14px' }}>
            Conditions Under Control
          </p>
          <p style={{ fontSize: '28px', fontWeight: 600 }}>2</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-muted-foreground mb-1" style={{ fontSize: '14px' }}>
            Next Review Due
          </p>
          <p style={{ fontSize: '20px', fontWeight: 600 }}>June 2026</p>
        </div>
      </div>
    </div>
  );
}
