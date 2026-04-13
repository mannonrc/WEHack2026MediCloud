import { useState } from 'react';
import { Upload, FileText, Save, Plus, Trash2, CheckCircle2 } from 'lucide-react';

export function MedicalHistory() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([
    'Medical_History_Form_2026.pdf',
    'Family_Medical_History.pdf'
  ]);

  const handleFileUpload = () => {
    // File upload logic will be implemented when Supabase is connected
    console.log('File upload clicked');
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Medical History</h1>
          <p className="text-muted-foreground mt-1">Christina's completed medical history</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <span className="text-green-800" style={{ fontSize: '14px', fontWeight: 500 }}>
            Completed
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2>Past Medical Conditions</h2>
              <button className="text-primary hover:underline" style={{ fontSize: '14px' }}>
                Edit
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                  Have you been diagnosed with any chronic conditions?
                </p>
                <div className="px-4 py-3 bg-accent rounded-lg">
                  <p>Hypertension (diagnosed 2019), Type 2 Diabetes Mellitus (diagnosed 2020)</p>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                  Previous Hospitalizations
                </p>
                <div className="px-4 py-3 bg-accent rounded-lg">
                  <p>March 2021 - Suspected diabetic complication monitoring (3 days observation). August 2018 - Minor surgery for benign cyst removal.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2>Surgical History</h2>
              <button className="text-primary hover:underline" style={{ fontSize: '14px' }}>
                Edit
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                  Previous Surgeries
                </p>
                <div className="px-4 py-3 bg-accent rounded-lg">
                  <p>August 2018 - Benign cyst removal (outpatient procedure). October 2010 - Appendectomy.</p>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                  Complications from Surgery (if any)
                </p>
                <div className="px-4 py-3 bg-accent rounded-lg">
                  <p>No complications reported. Recovery proceeded as expected for both procedures.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2>Family Medical History</h2>
              <button className="text-primary hover:underline" style={{ fontSize: '14px' }}>
                Edit
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                  Hereditary Conditions
                </p>
                <div className="px-4 py-3 bg-accent rounded-lg">
                  <p>Family history of Type 2 Diabetes (maternal grandmother, mother), Hypertension (father), and Heart Disease (paternal grandfather).</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                    Mother's Medical History
                  </p>
                  <div className="px-4 py-3 bg-accent rounded-lg">
                    <p>Type 2 Diabetes, managed with medication. Osteoarthritis.</p>
                  </div>
                </div>

                <div>
                  <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                    Father's Medical History
                  </p>
                  <div className="px-4 py-3 bg-accent rounded-lg">
                    <p>Hypertension, Coronary Artery Disease. History of myocardial infarction in 2015.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2>Lifestyle Information</h2>
              <button className="text-primary hover:underline" style={{ fontSize: '14px' }}>
                Edit
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                    Smoking Status
                  </p>
                  <div className="px-4 py-3 bg-accent rounded-lg">
                    <p style={{ fontWeight: 500 }}>Never smoked</p>
                  </div>
                </div>

                <div>
                  <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                    Alcohol Consumption
                  </p>
                  <div className="px-4 py-3 bg-accent rounded-lg">
                    <p style={{ fontWeight: 500 }}>Occasional</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                  Exercise Frequency
                </p>
                <div className="px-4 py-3 bg-accent rounded-lg">
                  <p style={{ fontWeight: 500 }}>Moderate (3-4 days/week)</p>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                  Dietary Restrictions or Preferences
                </p>
                <div className="px-4 py-3 bg-accent rounded-lg">
                  <p>Low-sodium diet due to hypertension. Avoiding shellfish due to allergy. Following diabetic meal plan with controlled carbohydrate intake.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2>Additional Information</h2>
              <button className="text-primary hover:underline" style={{ fontSize: '14px' }}>
                Edit
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                  Current Symptoms or Concerns
                </p>
                <div className="px-4 py-3 bg-accent rounded-lg">
                  <p>Occasional headaches, possibly stress-related. Blood glucose levels generally well-controlled. Blood pressure readings stable with current medication.</p>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                  Immunization History
                </p>
                <div className="px-4 py-3 bg-accent rounded-lg">
                  <p>COVID-19 booster (March 2026), Annual Flu vaccine (October 2025), Tdap booster (2022), Pneumococcal vaccine (2023).</p>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground mb-2" style={{ fontSize: '14px' }}>
                  Other Notes
                </p>
                <div className="px-4 py-3 bg-accent rounded-lg">
                  <p>Patient is compliant with medication regimen. Regular monitoring of blood pressure and glucose levels at home. Follows up with primary care physician quarterly and endocrinologist semi-annually.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <p className="text-green-800" style={{ fontSize: '14px' }}>
              Medical history record completed and saved on April 1, 2026
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-lg p-6 sticky top-8">
            <h2 className="mb-4">Upload Documents</h2>
            <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
              Upload Christina's medical history form.
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
          </div>
        </div>
      </div>
    </div>
  );
}
