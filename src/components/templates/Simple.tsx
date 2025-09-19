import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";
import { ResumeData } from "../../types/resume";

// Register fonts for better typography
Font.register({
  family: "Abeezee",
  src: "http://fonts.gstatic.com/s/abeezee/v9/mE5BOuZKGln_Ex0uYKpIaw.ttf",
});

// Create styles that match the KaitoKitaya.pdf format
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.4,
  },

  // Header Section
  header: {
    marginBottom: 20,
    borderBottom: "2px solid #2563eb",
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dummyHeader: {
    marginBottom: 20,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  center: {
    width: "50%",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 10,
    fontFamily: "Helvetica-Bold",
  },
  dummyBlankItem: {
    fontSize: 9,
    marginBottom: 3,
    color: "#FFFFFF",
  },
  title: {
    fontSize: 14,
    color: "#4b5563",
    marginBottom: 8,
  },
  contactInfo: {
    flexDirection: "column",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width: "25%",
  },
  contactItem: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 3,
  },

  // Section Styles
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    color: "#2563eb",
    fontWeight: "bold",
    marginBottom: 8,
    borderBottom: "1px solid #2563eb",
    paddingBottom: 3,
    fontFamily: "Helvetica-Bold",
  },

  // Summary Section
  summary: {
    fontSize: 10,
    color: "#374151",
    lineHeight: 1.5,
    textAlign: "justify",
  },

  // Experience Section
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1f2937",
    fontFamily: "Helvetica-Bold",
  },
  company: {
    fontSize: 10,
    color: "#4b5563",
    fontWeight: "bold",
  },
  dateRange: {
    fontSize: 9,
    color: "#6b7280",
    fontStyle: "italic",
  },
  location: {
    fontSize: 9,
    color: "#6b7280",
    marginBottom: 4,
  },
  description: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.4,
    marginBottom: 4,
  },
  achievements: {
    fontSize: 9,
    color: "#374151",
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 3,
  },
  degree: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1f2937",
    fontFamily: "Helvetica-Bold",
  },
  school: {
    fontSize: 10,
    color: "#4b5563",
    fontWeight: "bold",
  },
  educationDate: {
    fontSize: 9,
    color: "#6b7280",
    fontStyle: "italic",
  },
  gpa: {
    fontSize: 9,
    color: "#6b7280",
    marginTop: 2,
  },

  // Skills Section
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillCategory: {
    marginBottom: 8,
    width: "50%",
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 4,
    fontFamily: "Helvetica-Bold",
  },
  skillList: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.3,
  },

  // Projects Section
  projectItem: {
    marginBottom: 10,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  projectName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1f2937",
    fontFamily: "Helvetica-Bold",
  },
  projectDate: {
    fontSize: 9,
    color: "#6b7280",
    fontStyle: "italic",
  },
  projectDescription: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.4,
    marginBottom: 3,
  },
  technologies: {
    fontSize: 8,
    color: "#6b7280",
    fontStyle: "italic",
  },
  companyInfo: {
    flexDirection: "column",
    width: "25%",
  },
  centerCompany: {
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
  },
  dateInfo: {
    width: "25%",
    alignItems: "flex-end",
  }
});

interface ResumeTemplateProps {
  data: ResumeData;
}

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
  const { personal_info, summary, experience, education, skills, others } =
    data;

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
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>{personal_info.email}</Text>
            <Text style={styles.contactItem}>{personal_info.location}</Text>
            <Text style={styles.contactItem}>{personal_info.phone}</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.name}>{personal_info.name}</Text>
            <Text style={styles.title}>{personal_info?.position}</Text>
          </View>
          {personal_info.websites && personal_info.websites.length > 0 ? (
            <View style={styles.contactInfo}>
              {personal_info.websites.map((webSite, index) => (
                <Link key={index} style={styles.contactItem} src={webSite}>
                  {webSite}
                </Link>
              ))}
            </View>
          ) : (
            <View style={styles.contactInfo}>
              <Text style={styles.contactItem}></Text>
              <Text style={styles.contactItem}></Text>
            </View>
          )}
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
                <View style={styles.companyInfo}>
                  <Text style={styles.jobTitle}>{exp.title}</Text>
                  <Text style={styles.description}>{exp.description}</Text>
                </View>
                <View style={styles.centerCompany}>
                  <Text style={styles.company}>{exp.company}</Text>
                  {exp.location && (
                    <Text style={styles.location}>{exp.location}</Text>
                  )}
                </View>
                <View style={styles.dateInfo}>
                  <Text style={styles.dateRange}>
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </Text>
                </View>
              </View>
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
                  <Text style={styles.degree}>
                    {edu.degree} in {edu.field}
                  </Text>
                  <Text style={styles.school}>{edu.school}</Text>
                  {edu.location && (
                    <Text style={styles.location}>{edu.location}</Text>
                  )}
                </View>
                <Text style={styles.educationDate}>
                  {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                </Text>
              </View>
              {edu.gpa && <Text style={styles.gpa}>GPA: {edu.gpa}</Text>}
              {edu.description && (
                <Text style={styles.description}>{edu.description}</Text>
              )}
            </View>
          ))}
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {Object.entries(skillsByCategory).map(
              ([category, categorySkills]) => (
                <View key={category} style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>{category}</Text>
                  <Text style={styles.skillList}>
                    {categorySkills.map((skill) => skill.name).join(" • ")}
                  </Text>
                </View>
              )
            )}
          </View>
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Others</Text>
          {others.map((other) => (
            <View key={other.id} style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectName}>{other.name}</Text>
                <Text style={styles.projectDate}>
                  {other.startDate} -{" "}
                  {other.current ? "Present" : other.endDate}
                </Text>
              </View>
              <Text style={styles.projectDescription}>
                {other.description}
              </Text>
              <Text style={styles.technologies}>
                Technologies: {other.tags.join(", ")}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ResumeTemplate;
