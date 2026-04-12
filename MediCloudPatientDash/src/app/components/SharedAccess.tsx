import { useState } from 'react';
import { Plus, UserPlus, Shield, Clock, Check, X } from 'lucide-react';

export function SharedAccess() {
  const [showAddModal, setShowAddModal] = useState(false);

  const sharedWith = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      email: 's.johnson@citymedicine.com',
      role: 'Primary Care Physician',
      accessLevel: 'Full Access',
      grantedDate: '2024-01-15',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      email: 'm.chen@citymedicine.com',
      role: 'Cardiologist',
      accessLevel: 'Limited Access',
      grantedDate: '2025-06-20',
      status: 'Active',
      expiryDate: '2026-12-31',
    },
    {
      id: 3,
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      role: 'Family Member',
      accessLevel: 'Emergency Only',
      grantedDate: '2024-01-10',
      status: 'Active',
    },
  ];

  const pendingRequests = [
    {
      id: 1,
      name: 'Dr. Robert Martinez',
      email: 'r.martinez@imagingcenter.com',
      role: 'Radiologist',
      requestedAccess: 'Imaging Records Only',
      requestDate: '2026-04-09',
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Shared Access</h1>
          <p className="text-muted-foreground mt-1">Manage who can view your medical records</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <UserPlus className="w-4 h-4" />
          Grant Access
        </button>
      </div>

      {pendingRequests.length > 0 && (
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Pending Access Requests
          </h2>

          <div className="space-y-3">
            {pendingRequests.map((request) => (
              <div key={request.id} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p style={{ fontWeight: 500 }}>{request.name}</p>
                    <p className="text-muted-foreground" style={{ fontSize: '14px' }}>{request.role}</p>
                    <p className="text-muted-foreground" style={{ fontSize: '14px' }}>{request.email}</p>
                    <div className="mt-2">
                      <p className="text-muted-foreground" style={{ fontSize: '13px' }}>Requested Access:</p>
                      <p style={{ fontSize: '14px', fontWeight: 500 }}>{request.requestedAccess}</p>
                    </div>
                    <p className="text-muted-foreground mt-1" style={{ fontSize: '13px' }}>
                      Requested on {request.requestDate}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      Approve
                    </button>
                    <button className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-1">
                      <X className="w-4 h-4" />
                      Deny
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Currently Shared With
        </h2>

        <div className="space-y-4">
          {sharedWith.map((person) => (
            <div key={person.id} className="border border-border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p style={{ fontWeight: 500 }}>{person.name}</p>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      person.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {person.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground" style={{ fontSize: '14px' }}>{person.role}</p>
                  <p className="text-muted-foreground" style={{ fontSize: '14px' }}>{person.email}</p>

                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div>
                      <p className="text-muted-foreground" style={{ fontSize: '13px' }}>Access Level</p>
                      <p style={{ fontSize: '14px', fontWeight: 500 }}>{person.accessLevel}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground" style={{ fontSize: '13px' }}>Granted On</p>
                      <p style={{ fontSize: '14px' }}>{person.grantedDate}</p>
                    </div>
                  </div>

                  {person.expiryDate && (
                    <div className="mt-2">
                      <p className="text-muted-foreground" style={{ fontSize: '13px' }}>Access Expires</p>
                      <p style={{ fontSize: '14px' }}>{person.expiryDate}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <button className="px-3 py-1 bg-secondary text-secondary-foreground rounded hover:bg-accent transition-colors text-sm">
                    Modify Access
                  </button>
                  <button className="px-3 py-1 bg-destructive text-destructive-foreground rounded hover:opacity-90 transition-opacity text-sm">
                    Revoke
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 style={{ fontSize: '15px', fontWeight: 500 }} className="text-blue-900 mb-2">
          Access Level Definitions
        </h3>
        <ul className="space-y-1 text-blue-800" style={{ fontSize: '14px' }}>
          <li><strong>Full Access:</strong> Can view all medical records and history</li>
          <li><strong>Limited Access:</strong> Can view specific types of records only</li>
          <li><strong>Emergency Only:</strong> Access only in emergency situations</li>
        </ul>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg p-6 max-w-2xl w-full mx-4">
            <h2 className="mb-4">Grant Access</h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-2">Person Name</label>
                <input
                  type="text"
                  placeholder="Dr. Name or Family Member Name"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Role</label>
                <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Physician</option>
                  <option>Specialist</option>
                  <option>Nurse</option>
                  <option>Family Member</option>
                  <option>Caregiver</option>
                  <option>Other Healthcare Provider</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Access Level</label>
                <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Full Access</option>
                  <option>Limited Access - Specific Records</option>
                  <option>Emergency Only</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Access Expiry (Optional)</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Notes (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Additional information..."
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
                Grant Access
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
