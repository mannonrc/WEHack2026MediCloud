import { AlertTriangle, Calendar, Plus } from 'lucide-react';

export function Allergies() {
  const allergies = [
    {
      allergen: 'Penicillin',
      type: 'Medication',
      severity: 'Severe',
      reaction: 'Anaphylaxis, difficulty breathing, hives',
      diagnosedDate: '2015-03-12',
      diagnosedBy: 'Dr. Sarah Johnson',
    },
    {
      allergen: 'Shellfish',
      type: 'Food',
      severity: 'Moderate',
      reaction: 'Itching, swelling of lips and throat, nausea',
      diagnosedDate: '2018-07-22',
      diagnosedBy: 'Dr. Michael Chen',
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground">Allergies</h1>
          <p className="text-muted-foreground mt-1">
            Review Christina's known allergies and reactions
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Allergy
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {allergies.map((allergy, idx) => (
          <div key={idx} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className={`p-3 rounded-lg ${
                  allergy.severity === 'Severe'
                    ? 'bg-red-100'
                    : allergy.severity === 'Moderate'
                    ? 'bg-yellow-100'
                    : 'bg-blue-100'
                }`}>
                  <AlertTriangle className={`w-6 h-6 ${
                    allergy.severity === 'Severe'
                      ? 'text-red-600'
                      : allergy.severity === 'Moderate'
                      ? 'text-yellow-600'
                      : 'text-blue-600'
                  }`} />
                </div>
                <div>
                  <h2 className="mb-1">{allergy.allergen}</h2>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-accent text-muted-foreground" style={{ fontSize: '12px' }}>
                      {allergy.type}
                    </span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full ${
                      allergy.severity === 'Severe'
                        ? 'bg-red-100 text-red-800'
                        : allergy.severity === 'Moderate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`} style={{ fontSize: '12px', fontWeight: 500 }}>
                      {allergy.severity}
                    </span>
                  </div>
                </div>
              </div>
              <button className="text-primary hover:underline" style={{ fontSize: '14px' }}>
                Edit
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Reaction Symptoms
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  {allergy.reaction}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Diagnosed By
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  {allergy.diagnosedBy}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Date Diagnosed
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span style={{ fontWeight: 500 }}>{allergy.diagnosedDate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
