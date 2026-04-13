import { User, Mail, Phone, MapPin, Calendar, Edit } from 'lucide-react';

export function Profile() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground">Profile</h1>
          <p className="text-muted-foreground mt-1">
            Christina Koch's personal information
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
          <Edit className="w-4 h-4" />
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-primary" />
            </div>
            <h2 className="mb-1">Christina Koch</h2>
            <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
              Patient ID: #CR-2024-001
            </p>
            <div className="mt-4 w-full pt-4 border-t border-border">
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '14px' }}>
                  <Calendar className="w-4 h-4" />
                  <span>Born: January 15, 1985</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '14px' }}>
                  <User className="w-4 h-4" />
                  <span>Age: 41 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Full Name
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  Christina Hammock Koch
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Date of Birth
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  January 29, 1979
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Biological Gender
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  Female
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Ethnicity
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  White
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Blood Type
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  A+
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Language Fluency
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  English, Russian
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                    Email Address
                  </p>
                  <p className="mt-1" style={{ fontWeight: 500 }}>
                    christina.koch@email.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                    Phone Number
                  </p>
                  <p className="mt-1" style={{ fontWeight: 500 }}>
                    +1 (555) 234-5678
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                    Address
                  </p>
                  <p className="mt-1" style={{ fontWeight: 500 }}>
                    1234 Oak Street, Apt 5B<br />
                    San Francisco, CA 94102<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Emergency Contact</h2>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Contact Name
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  Jane Doe (Spouse)
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Contact Phone
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  +1 (555) 123-4567
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Relationship
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  Spouse
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Insurance Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Insurance Provider
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  BlueCross BlueShield
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Policy Number
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  BCBS-2024-CR-001
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Group Number
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  GRP-12345
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  Coverage Status
                </p>
                <p className="mt-1" style={{ fontWeight: 500 }}>
                  Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
