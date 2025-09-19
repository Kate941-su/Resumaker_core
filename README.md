# PDF Resume Generator

A modern, extensible React application for generating professional PDF resumes. Built with TypeScript, React-PDF, and a plugin-based architecture that allows contributors to create custom resume templates.

※ Please check how to write yaml or json files as well at DATA_FORMAT_GUIDE.md

## 🚀 Features

- **📄 Multiple Input Formats**: Upload YAML or JSON files for easy data management
- **🎨 Plugin Architecture**: Create custom resume templates using React-PDF
- **💾 Data Persistence**: Save and export resume data in YAML/JSON format
- **🔄 Real-time Preview**: See your resume as you build it
- **📱 Responsive Design**: Works perfectly on all devices
- **⚡ Fast Generation**: Optimized PDF creation with React-PDF

## 🏗️ App Structure

```
pdf-generator/
├── src/
│   ├── components/
│   │   ├── templates/           # Resume template plugins
│   │   │   └── Simple.tsx      # Default template
│   │   ├── ui/                 # Reusable UI components
│   │   └── TopScreen.tsx       # Main application interface
│   ├── types/
│   │   └── resume.ts           # TypeScript interfaces
│   ├── data/
│   │   └── sampleResume.ts     # Sample data
│   └── lib/
│       └── utils.ts            # Utility functions
├── dist/assets/imgs/           # Template preview images
├── sample.yaml                 # Sample YAML resume data
├── sample.json                 # Sample JSON resume data
└── README.md
```

## 🎯 Why YAML/JSON?

**Easy Maintenance**:

- Human-readable format
- Version control friendly
- Easy to edit and update

**Easy Export**:

- Standard data formats
- Compatible with other tools
- Simple to backup and share

**Developer Friendly**:

- No complex database setup
- Direct file editing
- Git-based workflow

## 🔌 Plugin Development

### Creating Custom Templates

Contributors can create new resume templates by building React-PDF components:

```tsx
// src/components/templates/MyTemplate.tsx
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "../../types/resume";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  // Your custom styles here
});

const MyTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Your custom layout here */}
        <Text>{data.personal_info.name}</Text>
        {/* Add more sections */}
      </Page>
    </Document>
  );
};

export default MyTemplate;
```

### Template Guidelines

1. **Follow the Interface**: Use the `ResumeData` interface from `src/types/resume.ts`
2. **Responsive Design**: Ensure your template works on A4 pages
3. **Professional Styling**: Use appropriate fonts, spacing, and colors
4. **Complete Sections**: Include all resume sections (experience, education, skills, etc.)
5. **Add Preview Image**: Include a preview image in `dist/assets/imgs/`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd pdf-generator

# Install dependencies
npm install

# Start development server
npm run dev
```

### Usage

1. **Upload Data**: Drag and drop a YAML or JSON file with your resume data
2. **Select Template**: Choose from available templates
3. **Preview**: See your resume in real-time
4. **Download**: Generate and download your PDF

## 📝 Data Format

### YAML Example

```yaml
resume:
  personal_info:
    name: "Your Name"
    position: "Your Title"
    email: "your.email@example.com"
    location: "Your Location"
    phone: "+1234567890"
    websites:
      - "https://linkedin.com/in/yourprofile"
      - "https://github.com/yourusername"
  summary: "Your professional summary..."
  experience:
    - title: "Job Title"
      company: "Company Name"
      location: "Location"
      startDate: "Jan 2023"
      current: true
      description: "Job description"
      achievements:
        - "Achievement 1"
        - "Achievement 2"
  # ... more sections
```

### JSON Example

```json
{
  "resume": {
    "personal_info": {
      "name": "Your Name",
      "position": "Your Title",
      "email": "your.email@example.com",
      "location": "Your Location",
      "phone": "+1234567890",
      "websites": [
        "https://linkedin.com/in/yourprofile",
        "https://github.com/yourusername"
      ]
    },
    "summary": "Your professional summary...",
    "experience": [
      {
        "title": "Job Title",
        "company": "Company Name",
        "location": "Location",
        "startDate": "Jan 2023",
        "current": true,
        "description": "Job description",
        "achievements": ["Achievement 1", "Achievement 2"]
      }
    ]
  }
}
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 1. Create a Pull Request

- Fork the repository
- Create a feature branch
- Make your changes
- Submit a pull request

### 2. Add New Templates

- Create a new template component in `src/components/templates/`
- Follow the React-PDF guidelines
- Add a preview image
- Update the template selector

### 3. Improve Features

- Add new functionality
- Fix bugs
- Improve performance
- Enhance UI/UX

## 📋 TODO List

### High Priority

- [ ] **Error Handling**: Implement comprehensive error handling for file uploads and PDF generation
- [ ] **Type Validation**: Add runtime validation for resume data structure
- [ ] **More Export Formats**: Support for DOCX, HTML, and other formats

### Medium Priority

- [ ] **Template Gallery**: Visual template selection interface
- [ ] **Data Validation**: Client-side validation for required fields
- [ ] **Batch Processing**: Generate multiple resumes at once
- [ ] **Cloud Storage**: Integration with Google Drive, Dropbox

### Low Priority

- [ ] **AI Integration**: AI-powered resume optimization suggestions
- [ ] **Collaboration**: Multi-user editing capabilities
- [ ] **Analytics**: Resume performance tracking
- [ ] **Mobile App**: React Native mobile application

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Adding New Features

1. **Create Component**: Add new components in `src/components/`
2. **Update Types**: Modify interfaces in `src/types/`
3. **Add Styling**: Use Tailwind CSS for consistent design
4. **Test Thoroughly**: Ensure compatibility across browsers

## 🎨 Customization

### Styling Templates

- Use React-PDF's `StyleSheet.create()` for styling
- Follow professional design principles
- Ensure print-friendly layouts
- Test on different screen sizes

### Adding New Fields

1. Update `ResumeData` interface in `src/types/resume.ts`
2. Modify template components to include new fields
3. Update sample data files
4. Test with various data inputs

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🆘 Support

If you encounter any issues:

1. Check the troubleshooting section
2. Review existing issues
3. Create a new issue with detailed information
4. Join our community discussions

---

**Built with ❤️ using React, TypeScript, and React-PDF**

_Contributors welcome! Create plugins, fix bugs, and help make this project better._
