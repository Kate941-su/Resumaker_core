import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { ResumeData } from '../types/resume';

// Register fonts for better typography
Font.register({
  family: 'Helvetica',
  src: 'http://fonts.gstatic.com/s/abeezee/v9/mE5BOuZKGln_Ex0uYKpIaw.ttf',
});

// Create styles that match the KaitoKitaya.pdf format
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
  },
  
  // Header Section
  header: {
    marginBottom: 20,
    borderBottom: '2px solid #2563eb',
    paddingBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
    fontFamily: 'Helvetica-Bold',
  },
  title: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 8,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  contactItem: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 3,
  },
  
  // Section Styles
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    borderBottom: '1px solid #d1d5db',
    paddingBottom: 3,
    fontFamily: 'Helvetica-Bold',
  },
  
  // Summary Section
  summary: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
    textAlign: 'justify',
  },
  
  // Experience Section
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    fontFamily: 'Helvetica-Bold',
  },
  company: {
    fontSize: 10,
    color: '#4b5563',
    fontWeight: 'bold',
  },
  dateRange: {
    fontSize: 9,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  location: {
    fontSize: 9,
    color: '#6b7280',
    marginBottom: 4,
  },
  description: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.4,
    marginBottom: 4,
  },
  achievements: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.3,
    marginLeft: 10,
  },
  achievementItem: {
    marginBottom: 2,
  },
  
  // Education Section
  educationItem: {
    marginBottom: 10,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  degree: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    fontFamily: 'Helvetica-Bold',
  },
  school: {
    fontSize: 10,
    color: '#4b5563',
    fontWeight: 'bold',
  },
  educationDate: {
    fontSize: 9,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  gpa: {
    fontSize: 9,
    color: '#6b7280',
    marginTop: 2,
  },
  
  // Skills Section
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillCategory: {
    marginBottom: 8,
    width: '50%',
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
    fontFamily: 'Helvetica-Bold',
  },
  skillList: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.3,
  },
  
  // Projects Section
  projectItem: {
    marginBottom: 10,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  projectName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    fontFamily: 'Helvetica-Bold',
  },
  projectDate: {
    fontSize: 9,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  projectDescription: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.4,
    marginBottom: 3,
  },
  technologies: {
    fontSize: 8,
    color: '#6b7280',
    fontStyle: 'italic',
  },
});

interface ResumeTemplateProps {
  data: ResumeData;
}

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills, projects } = data;

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>{personalInfo.title}</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>{personalInfo.email}</Text>
            {personalInfo.phone && <Text style={styles.contactItem}>{personalInfo.phone}</Text>}
            <Text style={styles.contactItem}>{personalInfo.location}</Text>
            {personalInfo.linkedin && <Text style={styles.contactItem}>{personalInfo.linkedin}</Text>}
            {personalInfo.github && <Text style={styles.contactItem}>{personalInfo.github}</Text>}
            {personalInfo.website && <Text style={styles.contactItem}>{personalInfo.website}</Text>}
          </View>
        </View>

        {/* Summary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.summary}>{summary}</Text>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((exp) => (
            <View key={exp.id} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <View>
                  <Text style={styles.jobTitle}>{exp.title}</Text>
                  <Text style={styles.company}>{exp.company}</Text>
                  {exp.location && <Text style={styles.location}>{exp.location}</Text>}
                </View>
                <Text style={styles.dateRange}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </Text>
              </View>
              <Text style={styles.description}>{exp.description}</Text>
              {exp.achievements.length > 0 && (
                <View style={styles.achievements}>
                  {exp.achievements.map((achievement, index) => (
                    <Text key={index} style={styles.achievementItem}>
                      • {achievement}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu) => (
            <View key={edu.id} style={styles.educationItem}>
              <View style={styles.educationHeader}>
                <View>
                  <Text style={styles.degree}>{edu.degree} in {edu.field}</Text>
                  <Text style={styles.school}>{edu.school}</Text>
                  {edu.location && <Text style={styles.location}>{edu.location}</Text>}
                </View>
                <Text style={styles.educationDate}>
                  {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                </Text>
              </View>
              {edu.gpa && <Text style={styles.gpa}>GPA: {edu.gpa}</Text>}
              {edu.description && <Text style={styles.description}>{edu.description}</Text>}
            </View>
          ))}
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <View key={category} style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>{category}</Text>
                <Text style={styles.skillList}>
                  {categorySkills.map(skill => skill.name).join(' • ')}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projects.map((project) => (
            <View key={project.id} style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.projectDate}>
                  {project.startDate} - {project.current ? 'Present' : project.endDate}
                </Text>
              </View>
              <Text style={styles.projectDescription}>{project.description}</Text>
              <Text style={styles.technologies}>
                Technologies: {project.technologies.join(', ')}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ResumeTemplate;
