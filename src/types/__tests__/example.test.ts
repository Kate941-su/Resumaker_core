// Example test file to demonstrate testing setup
// This file can be removed once you're familiar with the testing structure

describe("Example Tests", () => {
  it("should demonstrate basic test functionality", () => {
    // This is a simple test to verify Jest is working
    expect(1 + 1).toBe(2);
  });

  it("should handle string operations", () => {
    const name = "John Doe";
    expect(name).toContain("John");
    expect(name.length).toBeGreaterThan(0);
  });

  it("should handle array operations", () => {
    const skills = ["JavaScript", "TypeScript", "React"];
    expect(skills).toHaveLength(3);
    expect(skills).toContain("TypeScript");
  });

  it("should handle object operations", () => {
    const person = {
      name: "Jane Doe",
      email: "jane@example.com",
      location: "San Francisco, CA",
    };

    expect(person).toHaveProperty("name");
    expect(person.name).toBe("Jane Doe");
    expect(person.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });
});
