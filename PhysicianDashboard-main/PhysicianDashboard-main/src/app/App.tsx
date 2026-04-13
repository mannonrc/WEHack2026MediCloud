import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";
import { MedicalRecords } from "./components/MedicalRecords";
import { Medications } from "./components/Medications";
import { SharedAccess } from "./components/SharedAccess";
import { Profile } from "./components/Profile";
import { MedicalHistory } from "./components/MedicalHistory";
import { Allergies } from "./components/Allergies";
import { Conditions } from "./components/Conditions";
import { RealTimeData } from "./components/RealTimeData";

export default function App() {
  const [activeSection, setActiveSection] =
    useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "records":
        return <MedicalRecords />;
      case "medications":
        return <Medications />;
      case "allergies":
        return <Allergies />;
      case "conditions":
        return <Conditions />;
              case "rtdata":
        return <RealTimeData />;
      case "appointments":
        return (
          <div className="p-8">
            <h1>Appointments</h1>
            <p className="text-muted-foreground mt-2">
              View and schedule medical appointments
            </p>
          </div>
        );
      case "documents":
        return <MedicalHistory />;
      case "shared":
        return <SharedAccess />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="size-full flex bg-background">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}