import { useState } from 'react';
import { Plus, Search, Filter, FileText, Download, Eye } from 'lucide-react';

export function MedicalRecords() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const records = [
    {
      id: 1,
      date: '2026-04-08',
      type: 'Lab Results',
      description: 'Complete Blood Count (CBC)',
      doctor: 'Dr. Sarah Johnson',
      facility: 'Central Lab',
      status: 'Reviewed',
    },
    {
      id: 2,
      date: '2026-03-22',
      type: 'Consultation',
      description: 'Annual Physical Examination',
      doctor: 'Dr. Michael Chen',
      facility: 'City Medical Center',
      status: 'Completed',
    },
    {
      id: 3,
      date: '2026-03-15',
      type: 'Prescription',
      description: 'Lisinopril 10mg',
      doctor: 'Dr. Sarah Johnson',
      facility: 'City Medical Center',
      status: 'Active',
    },
    {
      id: 4,
      date: '2026-02-28',
      type: 'X-Ray',
      description: 'Chest X-Ray',
      doctor: 'Dr. Robert Martinez',
      facility: 'Imaging Center',
      status: 'Reviewed',
    },
    {
      id: 5,
      date: '2026-02-10',
      type: 'Lab Results',
      description: 'Lipid Panel',
      doctor: 'Dr. Sarah Johnson',
      facility: 'Central Lab',
      status: 'Reviewed',
    },
  ];

  const filteredRecords = records.filter(record =>
    record.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.doctor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Medical Records</h1>
          <p className="text-muted-foreground mt-1">View and manage your medical records</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Record
        </button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search records..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-6 py-3 text-muted-foreground" style={{ fontSize: '14px', fontWeight: 500 }}>Date</th>
              <th className="text-left px-6 py-3 text-muted-foreground" style={{ fontSize: '14px', fontWeight: 500 }}>Type</th>
              <th className="text-left px-6 py-3 text-muted-foreground" style={{ fontSize: '14px', fontWeight: 500 }}>Description</th>
              <th className="text-left px-6 py-3 text-muted-foreground" style={{ fontSize: '14px', fontWeight: 500 }}>Doctor</th>
              <th className="text-left px-6 py-3 text-muted-foreground" style={{ fontSize: '14px', fontWeight: 500 }}>Status</th>
              <th className="text-left px-6 py-3 text-muted-foreground" style={{ fontSize: '14px', fontWeight: 500 }}>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredRecords.map((record) => (
              <tr key={record.id} className="hover:bg-accent transition-colors">
                <td className="px-6 py-4" style={{ fontSize: '14px' }}>{record.date}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-2 px-2 py-1 bg-blue-100 text-blue-700 rounded" style={{ fontSize: '13px' }}>
                    <FileText className="w-3 h-3" />
                    {record.type}
                  </span>
                </td>
                <td className="px-6 py-4" style={{ fontSize: '14px' }}>{record.description}</td>
                <td className="px-6 py-4" style={{ fontSize: '14px' }}>{record.doctor}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-2 py-1 rounded ${
                    record.status === 'Active' ? 'bg-green-100 text-green-700' :
                    record.status === 'Reviewed' ? 'bg-gray-100 text-gray-700' :
                    'bg-blue-100 text-blue-700'
                  }`} style={{ fontSize: '13px' }}>
                    {record.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-accent rounded" title="View">
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button className="p-1 hover:bg-accent rounded" title="Download">
                      <Download className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="mb-4">Add Medical Record</h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Type</label>
                <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Lab Results</option>
                  <option>Consultation</option>
                  <option>Prescription</option>
                  <option>Imaging (X-Ray, MRI, CT)</option>
                  <option>Surgery</option>
                  <option>Vaccination</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Description</label>
                <input
                  type="text"
                  placeholder="e.g., Complete Blood Count (CBC)"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Doctor Name</label>
                <input
                  type="text"
                  placeholder="Dr. John Smith"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Facility</label>
                <input
                  type="text"
                  placeholder="Medical Center Name"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Notes</label>
                <textarea
                  rows={4}
                  placeholder="Additional notes or findings..."
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                ></textarea>
              </div>

              <div>
                <label className="block mb-2">Attach Documents (Optional)</label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-accent transition-colors cursor-pointer">
                  <p className="text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-muted-foreground" style={{ fontSize: '13px' }}>PDF, JPG, PNG up to 10MB</p>
                </div>
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
                Save Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
