import { safeMapResumeData, ResumeData } from "../resume";

describe("safeMapResumeData", () => {
  describe("Valid Data", () => {
    it("should validate complete valid resume data", () => {
      const validData = {
        personal_info: {
          name: "John Doe",
          email: "john@example.com",
          location: "San Francisco, CA",
          position: "Software Engineer",
          phone: "+1-555-0123",
          websites: ["https://linkedin.com/in/johndoe"],
        },
        summary: "Experienced software engineer",
        experience: [
          {
            id: "exp-1",
            title: "Senior Developer",
            company: "Tech Corp",
            location: "San Francisco, CA",
            startDate: "Jan 2023",
            current: true,
            description: "Lead development team",
            achievements: [
              "Led migration project",
              "Improved performance by 40%",
            ],
          },
        ],
        education: [
          {
            id: "edu-1",
            degree: "Master of Computer Science",
            field: "Software Engineering",
            school: "Stanford University",
            startDate: "Sep 2018",
            endDate: "Jun 2020",
            current: false,
            gpa: "3.8",
          },
        ],
        skills: [
          {
            id: "skill-1",
            name: "JavaScript",
            category: "Programming Languages",
            level: "expert",
          },
        ],
        others: [
          {
            id: "proj-1",
            name: "E-commerce Platform",
            description: "Full-stack solution",
            tags: ["react", "nodejs"],
            url: "https://github.com/user/project",
            startDate: "2024-01-01",
            current: true,
          },
        ],
      };

      expect(() => safeMapResumeData(validData)).not.toThrow();
      const result = safeMapResumeData(validData);
      expect(result).toEqual(validData);
    });

    it("should validate minimal valid resume data", () => {
      const minimalData = {
        personal_info: {
          name: "Jane Doe",
          email: "jane@example.com",
          location: "New York, NY",
        },
        experience: [],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(minimalData)).not.toThrow();
      const result = safeMapResumeData(minimalData);
      expect(result).toEqual(minimalData);
    });

    it("should validate data with optional fields missing", () => {
      const dataWithOptionalMissing = {
        personal_info: {
          name: "Bob Smith",
          email: "bob@example.com",
          location: "Seattle, WA",
        },
        experience: [
          {
            id: "exp-1",
            title: "Developer",
            company: "Startup Inc",
            startDate: "Jan 2022",
            current: false,
            endDate: "Dec 2023",
            achievements: [],
          },
        ],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(dataWithOptionalMissing)).not.toThrow();
    });
  });

  describe("Invalid Personal Info", () => {
    it("should throw error when name is missing", () => {
      const invalidData = {
        personal_info: {
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow(
        "Invalid personal info"
      );
    });

    it("should throw error when email is missing", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow(
        "Invalid personal info"
      );
    });

    it("should throw error when location is missing", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
        },
        experience: [],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow(
        "Invalid personal info"
      );
    });

    it("should throw error when personal_info is missing", () => {
      const invalidData = {
        experience: [],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow(
        "Invalid personal info"
      );
    });

    it("should throw error when personal_info is null", () => {
      const invalidData = {
        personal_info: null,
        experience: [],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow(
        "Invalid personal info"
      );
    });
  });

  describe("Invalid Experience", () => {
    it("should throw error when experience has missing title", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [
          {
            id: "exp-1",
            company: "Tech Corp",
            startDate: "Jan 2023",
            current: true,
            achievements: [],
          },
        ],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow(
        "Invalid experiences"
      );
    });

    it("should throw error when experience has missing company", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [
          {
            id: "exp-1",
            title: "Developer",
            startDate: "Jan 2023",
            current: true,
            achievements: [],
          },
        ],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow(
        "Invalid experiences"
      );
    });

    it("should throw error when experience has missing startDate", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [
          {
            id: "exp-1",
            title: "Developer",
            company: "Tech Corp",
            current: true,
            achievements: [],
          },
        ],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow(
        "Invalid experiences"
      );
    });

    it("should throw error when experience has missing current field", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [
          {
            id: "exp-1",
            title: "Developer",
            company: "Tech Corp",
            startDate: "Jan 2023",
            achievements: [],
          },
        ],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow(
        "Invalid experiences"
      );
    });

    it("should validate empty experience array", () => {
      const validData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(validData)).not.toThrow();
    });
  });

  describe("Invalid Education", () => {
    it("should throw error when education has missing degree", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [
          {
            id: "edu-1",
            field: "Computer Science",
            school: "Stanford University",
            startDate: "Sep 2018",
            current: false,
          },
        ],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow("Invalid education");
    });

    it("should throw error when education has missing field", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [
          {
            id: "edu-1",
            degree: "Bachelor of Science",
            school: "Stanford University",
            startDate: "Sep 2018",
            current: false,
          },
        ],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow("Invalid education");
    });

    it("should throw error when education has missing school", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [
          {
            id: "edu-1",
            degree: "Bachelor of Science",
            field: "Computer Science",
            startDate: "Sep 2018",
            current: false,
          },
        ],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow("Invalid education");
    });

    it("should throw error when education has missing startDate", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [
          {
            id: "edu-1",
            degree: "Bachelor of Science",
            field: "Computer Science",
            school: "Stanford University",
            current: false,
          },
        ],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow("Invalid education");
    });

    it("should throw error when education has missing current field", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [
          {
            id: "edu-1",
            degree: "Bachelor of Science",
            field: "Computer Science",
            school: "Stanford University",
            startDate: "Sep 2018",
          },
        ],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow("Invalid education");
    });
  });

  describe("Invalid Skills", () => {
    it("should throw error when skill has missing name", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [],
        skills: [
          {
            id: "skill-1",
            category: "Programming Languages",
            level: "expert",
          },
        ],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow("Invalid skills");
    });

    it("should throw error when skill has missing category", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [],
        skills: [
          {
            id: "skill-1",
            name: "JavaScript",
            level: "expert",
          },
        ],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow("Invalid skills");
    });

    it("should throw error when skill has missing level", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [],
        skills: [
          {
            id: "skill-1",
            name: "JavaScript",
            category: "Programming Languages",
          },
        ],
        others: [],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow("Invalid skills");
    });
  });

  describe("Invalid Others/Projects", () => {
    it("should throw error when other has missing name", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [],
        skills: [],
        others: [
          {
            id: "proj-1",
            description: "Full-stack solution",
            tags: ["react", "nodejs"],
            startDate: "2024-01-01",
            current: true,
          },
        ],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow("Invalid others");
    });

    it("should throw error when other has missing description", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [],
        skills: [],
        others: [
          {
            id: "proj-1",
            name: "E-commerce Platform",
            tags: ["react", "nodejs"],
            startDate: "2024-01-01",
            current: true,
          },
        ],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow("Invalid others");
    });

    it("should throw error when other has missing tags", () => {
      const invalidData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [],
        skills: [],
        others: [
          {
            id: "proj-1",
            name: "E-commerce Platform",
            description: "Full-stack solution",
            startDate: "2024-01-01",
            current: true,
          },
        ],
      };

      expect(() => safeMapResumeData(invalidData)).toThrow("Invalid others");
    });
  });

  describe("Edge Cases", () => {
    it("should handle undefined arrays gracefully", () => {
      const dataWithUndefinedArrays = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: undefined,
        education: undefined,
        skills: undefined,
        others: undefined,
      };

      expect(() => safeMapResumeData(dataWithUndefinedArrays)).toThrow(
        "Invalid experiences"
      );
    });

    it("should handle null arrays gracefully", () => {
      const dataWithNullArrays = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: null,
        education: null,
        skills: null,
        others: null,
      };

      expect(() => safeMapResumeData(dataWithNullArrays)).toThrow(
        "Invalid experiences"
      );
    });

    it("should handle mixed valid and invalid data", () => {
      const mixedData = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [
          {
            id: "exp-1",
            title: "Developer",
            company: "Tech Corp",
            startDate: "Jan 2023",
            current: true,
            achievements: [],
          },
          {
            id: "exp-2",
            // Missing required fields
            company: "Another Corp",
            startDate: "Jan 2022",
            current: false,
          },
        ],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(mixedData)).toThrow("Invalid experiences");
    });
  });

  describe("Data Type Validation", () => {
    it("should handle string values correctly", () => {
      const dataWithStringValues = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(dataWithStringValues)).not.toThrow();
    });

    it("should handle empty string values", () => {
      const dataWithEmptyStrings = {
        personal_info: {
          name: "",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [],
        education: [],
        skills: [],
        others: [],
      };

      // Empty string should be considered falsy and cause validation to fail
      expect(() => safeMapResumeData(dataWithEmptyStrings)).toThrow(
        "Invalid personal info"
      );
    });

    it("should handle boolean values correctly", () => {
      const dataWithBooleans = {
        personal_info: {
          name: "John Doe",
          email: "test@example.com",
          location: "San Francisco, CA",
        },
        experience: [
          {
            id: "exp-1",
            title: "Developer",
            company: "Tech Corp",
            startDate: "Jan 2023",
            current: false, // Explicitly false
            achievements: [],
          },
        ],
        education: [],
        skills: [],
        others: [],
      };

      expect(() => safeMapResumeData(dataWithBooleans)).not.toThrow();
    });
  });
});
