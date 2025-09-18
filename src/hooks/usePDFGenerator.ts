import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { ResumeData } from "@/types/resume";

export const usePDFGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generatePDF = async (
    data: ResumeData,
    filename: string = "resume.pdf"
  ) => {
    setIsGenerating(true);
    setError(null);

    try {
      // Dynamic import to avoid SSR issues
      const { default: ResumePDF } = await import("@/components/ResumePDF");

      // Create PDF blob
      const blob = await pdf(ResumePDF({ data })).toBlob();

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      return { success: true };
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to generate PDF";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    generatePDF,
    isGenerating,
    error,
    clearError: () => setError(null),
  };
};
