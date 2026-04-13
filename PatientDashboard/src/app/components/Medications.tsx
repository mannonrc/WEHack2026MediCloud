import { useState } from 'react';
import { Plus, Pill, Clock, AlertTriangle } from 'lucide-react';

export function Medications() {
  const [showAddModal, setShowAddModal] = useState(false);

  const medications = [
    {
      id: 1,
      name: 'Dramamine',
      dosage: '50 mg',
      frequency: 'As needed',
      prescribedBy: 'Dr. Sarah Johnson',
      startDate: '2026-04-01',
      status: 'Active',
      notes: 'Take in the morning with food.',
    },
    {
      id: 2,
      name: 'Metformin',
      dosage: '500 mg',
      frequency: 'Twice daily',
      prescribedBy: 'Dr. Michael Chen',
      startDate: '2024-06-20',
      status: 'Inactive',
      notes: 'Take with meals.',
    },
    {
      id: 3,
      name: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily',
      prescribedBy: 'Dr. Sarah Johnson',
      startDate: '2024-09-10',
      status: 'Inactive',
      notes: 'Take at bedtime.',
    },
    {
      id: 4,
      name: 'Amoxicillin',
      dosage: '500mg',
      frequency: 'Three times daily',
      prescribedBy: 'Dr. Robert Martinez',
      startDate: '2026-03-01',
      endDate: '2026-03-10',
      status: 'Completed',
      notes: 'Completed course',
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Medications</h1>
          <p className="text-muted-foreground mt-1">Track your current and past medications</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Medication
        </button>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
        <div>
          <p style={{ fontWeight: 500 }} className="text-yellow-900">Medication Reminder</p>
          <p className="text-yellow-800" style={{ fontSize: '14px' }}>Remember to take Metformin (500mg) with your lunch</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {medications.map((med) => (
          <div key={med.id} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Pill className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3>{med.name}</h3>
                  <p className="text-muted-foreground" style={{ fontSize: '14px' }}>{med.dosage}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded text-xs ${
                med.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}>
                {med.status}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '14px' }}>
                <Clock className="w-4 h-4" />
                <span>{med.frequency}</span>
              </div>

              <div className="pt-2 border-t border-border">
                <p className="text-muted-foreground" style={{ fontSize: '13px' }}>Prescribed by</p>
                <p style={{ fontSize: '14px', fontWeight: 500 }}>{med.prescribedBy}</p>
              </div>

              <div>
                <p className="text-muted-foreground" style={{ fontSize: '13px' }}>Start Date</p>
                <p style={{ fontSize: '14px' }}>{med.startDate}</p>
              </div>

              {med.endDate && (
                <div>
                  <p className="text-muted-foreground" style={{ fontSize: '13px' }}>End Date</p>
                  <p style={{ fontSize: '14px' }}>{med.endDate}</p>
                </div>
              )}

              {med.notes && (
                <div className="pt-2 border-t border-border">
                  <p className="text-muted-foreground" style={{ fontSize: '13px' }}>Notes</p>
                  <p style={{ fontSize: '14px' }}>{med.notes}</p>
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors text-sm">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg p-6 max-w-2xl w-full mx-4">
            <h2 className="mb-4">Add Medication</h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-2">Medication Name</label>
                <input
                  type="text"
                  placeholder="e.g., Lisinopril"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Dosage</label>
                  <input
                    type="text"
                    placeholder="e.g., 10mg"
                    className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block mb-2">Frequency</label>
                  <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Once daily</option>
                    <option>Twice daily</option>
                    <option>Three times daily</option>
                    <option>Four times daily</option>
                    <option>As needed</option>
                    <option>Weekly</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2">Prescribed By</label>
                <input
                  type="text"
                  placeholder="Dr. Name"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Start Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block mb-2">End Date (Optional)</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2">Notes</label>
                <textarea
                  rows={3}
                  placeholder="e.g., Take with food, morning dose"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                ></textarea>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                Add Medication
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
