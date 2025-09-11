"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  // Placeholder content for the left panel
  const pdfViewerPanel = (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>PDF Viewer</CardTitle>
        <CardDescription>Upload a PDF to view it here.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* PDF viewer component will go here later */}
        <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center min-h-[70vh]">
          <p className="text-gray-500">PDF Display Area</p>
        </div>
      </CardContent>
    </Card>
  );

  // Placeholder content for the right panel
  const dataFormPanel = (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Extracted Data</CardTitle>
        <CardDescription>
          Data extracted from the PDF will be editable here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* The data form will go here later */}
        <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center min-h-[70vh]">
          <p className="text-gray-500">Data Form Area</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <main>
      <DashboardLayout
        leftPanel={pdfViewerPanel}
        rightPanel={dataFormPanel}
      />
    </main>
  );
}