import { User, Mail, Phone, MapPin, Calendar, Droplet, AlertCircle } from 'lucide-react';

export function Profile() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1>Profile</h1>
        <p className="text-muted-foreground mt-1">Manage your personal and medical information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-primary-foreground" />
              </div>
              <h2 className="text-center">Christina Koch</h2>
              <p className="text-muted-foreground text-center" style={{ fontSize: '14px' }}>Patient ID: MR-2024-001234</p>
              <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity w-full">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Personal Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="Christina Koch"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Date of Birth</label>
                <div className="flex items-center gap-2 px-4 py-2 bg-input-background border border-border rounded-lg">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="date"
                    defaultValue="1985-06-15"
                    className="flex-1 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2">Email</label>
                <div className="flex items-center gap-2 px-4 py-2 bg-input-background border border-border rounded-lg">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    defaultValue="christina.koch@email.com"
                    className="flex-1 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2">Phone</label>
                <div className="flex items-center gap-2 px-4 py-2 bg-input-background border border-border rounded-lg">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="flex-1 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2">Address</label>
                <div className="flex items-center gap-2 px-4 py-2 bg-input-background border border-border rounded-lg">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    defaultValue="123 Main Street, Apt 4B, New York, NY 10001"
                    className="flex-1 bg-transparent focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Medical Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Blood Type</label>
                <div className="flex items-center gap-2 px-4 py-2 bg-input-background border border-border rounded-lg">
                  <Droplet className="w-4 h-4 text-red-600" />
                  <select className="flex-1 bg-transparent focus:outline-none">
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2">Height</label>
                <input
                  type="text"
                  defaultValue="178 cm (5 ft 10 in)"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Weight</label>
                <input
                  type="text"
                  defaultValue="180 lbs (82 kg)"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Gender</label>
                <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Emergency Contact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Contact Name</label>
                <input
                  type="text"
                  defaultValue="Jane Doe"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Relationship</label>
                <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Spouse</option>
                  <option>Parent</option>
                  <option>Sibling</option>
                  <option>Child</option>
                  <option>Friend</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="jane.doe@email.com"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Insurance Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Insurance Provider</label>
                <input
                  type="text"
                  defaultValue="Blue Cross Blue Shield"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Policy Number</label>
                <input
                  type="text"
                  defaultValue="BCBS-123456789"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Group Number</label>
                <input
                  type="text"
                  defaultValue="GRP-987654"
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block mb-2">Coverage Type</label>
                <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Individual</option>
                  <option>Family</option>
                  <option>Medicare</option>
                  <option>Medicaid</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
