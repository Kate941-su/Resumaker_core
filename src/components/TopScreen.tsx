import { useState } from "react"
import { ResumeData } from "@/types/resume"
import * as yaml from 'yaml'
import { FileText } from "lucide-react"
import { Dropzone, DropzoneEmptyState, DropzoneContent } from "./ui/shadcn-io/dropzone"
import { PDFViewer } from "@react-pdf/renderer"
import ResumeTemplate from "./templates/Simple"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { safeMapResumeData } from "@/types/resume"


export default function TopScreen() {
  const [yamlData, setYamlData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [resumeData, setResumeData] = useState<ResumeData | null>(null)
  const [radioIndex, setRadioIndex] = useState<Templeate>("simple")
  const isDev = import.meta.env.DEV

  const handleDrop = async (acceptedFiles: File[]) => {
    setError(null)
    try {
      if (acceptedFiles.length === 0) {
        setError('No files accepted')
        return
      }
      const file = acceptedFiles[0]

      const isValidYaml = file.name.toLowerCase().endsWith('.yaml') || file.name.toLowerCase().endsWith('.yml')
      const isValidJson = file.name.toLowerCase().endsWith('.json')

      // Validate file type
      if (!isValidYaml && !isValidJson) {
        setError('Please upload a YAML file (.yaml or .yml)')
        return
      }

      // Read file content
      const text = await file.text()

      // Parse YAML or JSON content
      let parsedData
      try {
        parsedData = isValidYaml ? yaml.parse(text) : JSON.parse(text)
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
          const mappedData: ResumeData = safeMapResumeData({
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
          });
          setResumeData(mappedData);
        } catch (e) {
          let error = e as Error
          console.warn('Could not map YAML data to resume format:', error.message);
          setError(error.message)
        }
      }
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
            <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Select Template</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Templates</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={radioIndex} onValueChange={ (index) => {
                  const template = index as Templeate
                  setRadioIndex(template)
                  }}>
                  <DropdownMenuRadioItem value="simple">Simple</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-scroll">

      <Dropzone
            accept={{
              'text/yaml': ['.yaml', '.yml'],
              'application/x-yaml': ['.yaml', '.yml'],
              'application/json': ['.json']
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

        <div className="w-full p-4">
          {/* Error Display */}
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600">{error}</p>
            </div>
          )}
          {/* Success Display */}
          {yamlData && isDev && (
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
        <div className="flex justify-center p-4">
          
          <Carousel className="w-96">
            <CarouselContent className="-ml-1">
              <CarouselItem className="pl-1">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-2">
                      <div>
                      <img 
                        src="/dist/assets/imgs/template_simple.png" 
                        alt="Simple Template" 
                        className="w-full h-full object-contain rounded"
                      />
                      <div className="text-sm text-gray-500 text-center">Simple Template</div>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </main>
    </div>
  )
}