import { useState } from 'react';
import { Upload, FileText, Save, Plus, Trash2 } from 'lucide-react';

export function MedicalHistory() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([
    'Medical_History_Form_2026.pdf'
  ]);

  const handleFileUpload = () => {
    // File upload logic will be implemented when Supabase is connected
    console.log('File upload clicked');
  };

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1>Medical History</h1>
        <p className="text-muted-foreground mt-1">Complete your medical history information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Past Medical Conditions</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Have you been diagnosed with any chronic conditions?</label>
                <textarea
                  rows={3}
                  placeholder="e.g., Diabetes, Hypertension, Asthma..."
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                ></textarea>
              </div>

              <div>
                <label className="block mb-2">Previous Hospitalizations</label>
                <textarea
                  rows={3}
                  placeholder="List dates and reasons for previous hospital stays..."
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Surgical History</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Previous Surgeries</label>
                <textarea
                  rows={3}
                  placeholder="List any surgeries you've had, including dates..."
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                ></textarea>
              </div>

              <div>
                <label className="block mb-2">Complications from Surgery (if any)</label>
                <textarea
                  rows={2}
                  placeholder="Describe any complications..."
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Family Medical History</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Hereditary Conditions</label>
                <textarea
                  rows={3}
                  placeholder="Any conditions that run in your family (heart disease, cancer, diabetes, etc.)..."
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Mother's Medical History</label>
                  <textarea
                    rows={2}
                    placeholder="Notable conditions..."
                    className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  ></textarea>
                </div>

                <div>
                  <label className="block mb-2">Father's Medical History</label>
                  <textarea
                    rows={2}
                    placeholder="Notable conditions..."
                    className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Lifestyle Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Smoking Status</label>
                  <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Never smoked</option>
                    <option>Former smoker</option>
                    <option>Current smoker</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Alcohol Consumption</label>
                  <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>None</option>
                    <option>Occasional</option>
                    <option>Moderate</option>
                    <option>Frequent</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2">Exercise Frequency</label>
                <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Sedentary (little or no exercise)</option>
                  <option>Light (1-2 days/week)</option>
                  <option>Moderate (3-4 days/week)</option>
                  <option>Active (5+ days/week)</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Dietary Restrictions or Preferences</label>
                <textarea
                  rows={2}
                  placeholder="e.g., Vegetarian, gluten-free, kosher..."
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Additional Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Current Symptoms or Concerns</label>
                <textarea
                  rows={3}
                  placeholder="Describe any current health concerns..."
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                ></textarea>
              </div>

              <div>
                <label className="block mb-2">Immunization History</label>
                <textarea
                  rows={2}
                  placeholder="List recent vaccinations and dates..."
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                ></textarea>
              </div>

              <div>
                <label className="block mb-2">Other Notes</label>
                <textarea
                  rows={3}
                  placeholder="Any other relevant medical information..."
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Medical History
            </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-lg p-6 sticky top-8">
            <h2 className="mb-4">Upload Documents</h2>
            <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
              Upload your medical history form.
            </p>

            <button
              onClick={handleFileUpload}
              className="w-full border-2 border-dashed border-border rounded-lg p-6 hover:bg-accent transition-colors cursor-pointer mb-4"
            >
              <div className="flex flex-col items-center gap-2">
                <Upload className="w-8 h-8 text-muted-foreground" />
                <p style={{ fontWeight: 500 }}>Click to upload</p>
                <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                  PDF, JPG, PNG up to 10MB
                </p>
              </div>
            </button>

            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <p style={{ fontSize: '14px', fontWeight: 500 }} className="mb-2">
                  Uploaded Files
                </p>
                {uploadedFiles.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-accent rounded-lg"
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <p className="truncate" style={{ fontSize: '13px' }}>
                        {file}
                      </p>
                    </div>
                    <button className="p-1 hover:bg-destructive/10 rounded transition-colors">
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p style={{ fontSize: '13px' }} className="text-blue-900">
                <strong>Tip:</strong> Having a complete medical history helps your healthcare providers make better informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
