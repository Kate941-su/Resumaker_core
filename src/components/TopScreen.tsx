import { useState } from "react"
import { ResumeData } from "@/types/resume"
import * as yaml from 'yaml'
import { FileText } from "lucide-react"
import { Dropzone, DropzoneEmptyState, DropzoneContent } from "./ui/shadcn-io/dropzone"
import { PDFViewer } from "@react-pdf/renderer"
import ResumeTemplate from "./templates/Simple"
import { Button } from "./ui/button"


export default function TopScreen() {
  const [yamlData, setYamlData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [resumeData, setResumeData] = useState<ResumeData | null>(null)

  const handleDrop = async (acceptedFiles: File[]) => {
    setError(null)
    try {
      if (acceptedFiles.length === 0) {
        setError('No files accepted')
        return
      }
      const file = acceptedFiles[0]

      // Validate file type
      if (!file.name.toLowerCase().endsWith('.yaml') && !file.name.toLowerCase().endsWith('.yml')) {
        setError('Please upload a YAML file (.yaml or .yml)')
        return
      }

      // Read file content
      const text = await file.text()

      // Parse YAML content
      let parsedData
      try {
        parsedData = yaml.parse(text)
        console.log('Parsed YAML data:', parsedData)
      } catch (parseError) {
        console.error('YAML parsing error:', parseError)
        setError('Invalid YAML format. Please check your file.')
        return
      }
      // Store both raw content and parsed data
      setYamlData({
        content: text,
        parsed: parsedData,
        fileName: file.name,
        fileSize: file.size
      })
      // Update resume data if YAML contains resume information
      if (parsedData && typeof parsedData === 'object') {
        const personalInfo = parsedData.resume.personal_info
        const summary = parsedData.resume.summary
        const experience = parsedData.resume.experience
        const education = parsedData.resume.education
        const skills = parsedData.resume.skills
        const others = parsedData.resume.others
        try {
          // Try to map YAML data to ResumeData structure
          const mappedData: ResumeData = {
            personal_info: {
              name: personalInfo.name,
              position: personalInfo.title,
              email: personalInfo.email,
              phone: personalInfo.phone,
              location: personalInfo.location,
              websites: personalInfo.websites,
            },
            summary: summary || "",
            experience: experience || [],
            education: education || [],
            skills: skills || [],
            others: others || []
          };
          setResumeData(mappedData);
        } catch (mappingError) {
          console.warn('Could not map YAML data to resume format:', mappingError);
        }
      }

      console.log('File name:', file.name)
      console.log('File size:', file.size)
      console.log('Parsed data keys:', Object.keys(parsedData))

    } catch (err) {
      console.error('Error processing file:', err)
      setError('Error reading file. Please try again.')
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white shadow-sm border-b flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">PDF Resume Generator</h1>
                <p className="text-sm text-gray-600">Create professional resumes with ease</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-scroll">
        <div className="w-full p-4">
          {/* Error Display */}
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600">{error}</p>
            </div>
          )}
          <Button onClick={() => { }}>
            Parse
          </Button>

          {/* Success Display */}
          {yamlData && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-600 mb-2">
                ✅ Successfully loaded: {yamlData.fileName} ({Math.round(yamlData.fileSize / 1024)} KB)
              </p>
              {yamlData.parsed && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600 mb-2">Parsed YAML data:</p>
                  <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto max-h-32">
                    {JSON.stringify(yamlData.parsed, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          )}

          <Dropzone
            accept={{
              'text/yaml': ['.yaml', '.yml'],
              'application/x-yaml': ['.yaml', '.yml']
            }}
            maxFiles={1}
            maxSize={1024 * 1024 * 5} // 5MB
            minSize={1}
            onDrop={handleDrop}
            onError={(error) => {
              console.error('Dropzone error:', error)
              setError('File upload error. Please try again.')
            }}
          >
            <DropzoneEmptyState
            />
            <DropzoneContent />
          </Dropzone>
        </div>
        {
          resumeData ?
            <PDFViewer
              className="w-full h-full"
              style={{ width: '100%', height: '100%' }}
            >
              <ResumeTemplate data={resumeData} />
            </PDFViewer>
            :
            <div></div>
        }

      </main>
    </div>
  )
}