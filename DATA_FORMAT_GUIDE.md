# Resume Data Format Guide

This guide explains how to structure your YAML or JSON files for the PDF Resume Generator. All data is parsed according to the `ResumeData` interface defined in `src/types/resume.ts`.

## 📋 Data Structure Overview

```yaml
resume:
  personal_info: # Required
  summary: # Optional
  experience: # Required (array)
  education: # Required (array)
  skills: # Required (array)
  others: # Required (array)
```

## 👤 Personal Information (`personal_info`)

**Status**: ✅ **Required**

### Required Fields

- `name` (string): Your full name
- `email` (string): Your email address
- `location` (string): Your current location

### Optional Fields

- `position` (string): Your job title or position
- `phone` (string): Your phone number
- `websites` (string[]): Array of your website URLs (LinkedIn, GitHub, portfolio, etc.)

### Example

```yaml
personal_info:
  name: "John Doe" # Required
  position: "Software Engineer" # Optional
  email: "john.doe@example.com" # Required
  phone: "+1-555-0123" # Optional
  location: "San Francisco, CA" # Required
  websites: # Optional
    - "https://linkedin.com/in/johndoe"
    - "https://github.com/johndoe"
    - "https://johndoe.dev"
```

## 📝 Summary

**Status**: ⚪ **Optional**

A brief professional summary or objective statement.

```yaml
summary: "Passionate software engineer with 5+ years of experience in full-stack development..."
```

## 💼 Experience (`experience`)

**Status**: ✅ **Required** (array, can be empty)

### Required Fields

- `id` (string): Unique identifier
- `title` (string): Job title
- `company` (string): Company name
- `startDate` (string): Start date (format: "MMM YYYY" or "YYYY-MM-DD")
- `current` (boolean): Whether this is your current position
- `achievements` (string[]): Array of achievements and responsibilities

### Optional Fields

- `location` (string): Job location
- `endDate` (string): End date (required if `current: false`)
- `description` (string): Job description

### Example

```yaml
experience:
  - id: "exp-001"
    title: "Senior Software Engineer" # Required
    company: "Tech Corp" # Required
    location: "San Francisco, CA" # Optional
    startDate: "Jan 2023" # Required
    endDate: "Dec 2024" # Optional (required if current: false)
    current: false # Required
    description: "Led development team" # Optional
    achievements: # Required (array)
      - "Led migration of legacy system"
      - "Improved performance by 40%"
      - "Mentored 3 junior developers"
```

## 🎓 Education (`education`)

**Status**: ✅ **Required** (array, can be empty)

### Required Fields

- `id` (string): Unique identifier
- `degree` (string): Degree name
- `field` (string): Field of study
- `school` (string): Institution name
- `startDate` (string): Start date
- `current` (boolean): Whether currently enrolled

### Optional Fields

- `location` (string): School location
- `endDate` (string): End date (required if `current: false`)
- `gpa` (string): Grade point average
- `description` (string): Additional description

### Example

```yaml
education:
  - id: "edu-001"
    degree: "Master of Computer Science" # Required
    field: "Software Engineering" # Required
    school: "Stanford University" # Required
    location: "Stanford, CA" # Optional
    startDate: "Sep 2018" # Required
    endDate: "Jun 2020" # Optional (required if current: false)
    current: false # Required
    gpa: "3.8" # Optional
    description: "Focus on AI and ML" # Optional
```

## 🛠️ Skills (`skills`)

**Status**: ✅ **Required** (array, can be empty)

### Required Fields

- `id` (string): Unique identifier
- `name` (string): Skill name
- `category` (string): Skill category
- `level` (string): Proficiency level (one of: "beginner", "intermediate", "advanced", "expert")

### Example

```yaml
skills:
  - id: "skill-001"
    name: "JavaScript" # Required
    category: "Programming Languages" # Required
    level: "expert" # Required (beginner|intermediate|advanced|expert)
  - id: "skill-002"
    name: "React"
    category: "Frontend Development"
    level: "advanced"
```

## 🚀 Others/Projects (`others`)

**Status**: ✅ **Required** (array, can be empty)

### Required Fields

- `id` (string): Unique identifier
- `name` (string): Project/activity name
- `description` (string): Project description
- `tags` (string[]): Array of technology tags
- `startDate` (string): Start date
- `current` (boolean): Whether currently active

### Optional Fields

- `url` (string): Project URL or repository
- `endDate` (string): End date (required if `current: false`)

### Example

```yaml
others:
  - id: "proj-001"
    name: "E-commerce Platform" # Required
    description: "Full-stack solution" # Required
    tags: ["react", "nodejs", "mongodb"] # Required
    url: "https://github.com/user/project" # Optional
    startDate: "2024-01-01" # Required
    endDate: "2024-08-15" # Optional (required if current: false)
    current: false # Required
```

## 📄 Complete Example

### YAML Format

```yaml
resume:
  personal_info:
    name: "Alex Johnson"
    position: "Full Stack Developer"
    email: "alex.johnson.dev@gmail.com"
    location: "San Francisco, CA"
    phone: "+1-555-0123"
    websites:
      - "https://linkedin.com/in/alex-johnson"
      - "https://github.com/alexjohnson"

  summary: "Passionate developer with 5+ years of experience..."

  experience:
    - id: "exp-001"
      title: "Senior Developer"
      company: "Tech Corp"
      location: "San Francisco, CA"
      startDate: "Jan 2023"
      current: true
      description: "Lead development team"
      achievements:
        - "Led migration to modern stack"
        - "Improved performance by 40%"

  education:
    - id: "edu-001"
      degree: "Master of Computer Science"
      field: "Software Engineering"
      school: "Stanford University"
      startDate: "Sep 2018"
      endDate: "Jun 2020"
      current: false
      gpa: "3.8"

  skills:
    - id: "skill-001"
      name: "JavaScript"
      category: "Programming Languages"
      level: "expert"
    - id: "skill-002"
      name: "React"
      category: "Frontend Development"
      level: "advanced"

  others:
    - id: "proj-001"
      name: "E-commerce Platform"
      description: "Full-stack solution with payment integration"
      tags: ["react", "nodejs", "mongodb"]
      url: "https://github.com/alexjohnson/ecommerce"
      startDate: "2024-01-01"
      current: true
```

### JSON Format

```json
{
  "resume": {
    "personal_info": {
      "name": "Alex Johnson",
      "position": "Full Stack Developer",
      "email": "alex.johnson.dev@gmail.com",
      "location": "San Francisco, CA",
      "phone": "+1-555-0123",
      "websites": [
        "https://linkedin.com/in/alex-johnson",
        "https://github.com/alexjohnson"
      ]
    },
    "summary": "Passionate developer with 5+ years of experience...",
    "experience": [
      {
        "id": "exp-001",
        "title": "Senior Developer",
        "company": "Tech Corp",
        "location": "San Francisco, CA",
        "startDate": "Jan 2023",
        "current": true,
        "description": "Lead development team",
        "achievements": [
          "Led migration to modern stack",
          "Improved performance by 40%"
        ]
      }
    ],
    "education": [
      {
        "id": "edu-001",
        "degree": "Master of Computer Science",
        "field": "Software Engineering",
        "school": "Stanford University",
        "startDate": "Sep 2018",
        "endDate": "Jun 2020",
        "current": false,
        "gpa": "3.8"
      }
    ],
    "skills": [
      {
        "id": "skill-001",
        "name": "JavaScript",
        "category": "Programming Languages",
        "level": "expert"
      }
    ],
    "others": [
      {
        "id": "proj-001",
        "name": "E-commerce Platform",
        "description": "Full-stack solution with payment integration",
        "tags": ["react", "nodejs", "mongodb"],
        "url": "https://github.com/alexjohnson/ecommerce",
        "startDate": "2024-01-01",
        "current": true
      }
    ]
  }
}
```

## ⚠️ Important Notes

### Date Formats

- Use consistent date formats throughout your file
- Recommended: "MMM YYYY" (e.g., "Jan 2023") or "YYYY-MM-DD"
- Avoid ambiguous formats like "01/03/2023"

### Required vs Optional

- **Required sections**: `personal_info`, `experience`, `education`, `skills`, `others`
- **Required fields within sections**: See individual section requirements above
- **Empty arrays**: All array sections can be empty `[]` but must be present

### Data Validation

- Ensure all required fields are present
- Use valid skill levels: "beginner", "intermediate", "advanced", "expert"
- Provide `endDate` when `current: false`
- Use unique IDs for all items with `id` fields

### Common Mistakes

- Missing required fields
- Using invalid skill levels
- Forgetting `endDate` when `current: false`
- Inconsistent date formats
- Missing `id` fields for array items

## 🔧 Troubleshooting

### File Upload Issues

- Ensure file extension is `.yaml`, `.yml`, or `.json`
- Check for valid YAML/JSON syntax
- Verify all required fields are present

### Parsing Errors

- Use a YAML/JSON validator to check syntax
- Ensure proper indentation in YAML files
- Check for missing commas in JSON files

### Template Rendering

- All sections will be rendered even if empty
- Missing required fields may cause rendering issues
- Optional fields will be omitted if not provided
