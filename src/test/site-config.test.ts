import { describe, it, expect } from "vitest";
import { siteConfig } from "@/config/site";

describe("Site Configuration", () => {
  it("should have required fields", () => {
    expect(siteConfig.name).toBeDefined();
    expect(siteConfig.displayName).toBeDefined();
    expect(siteConfig.role).toBeDefined();
    expect(siteConfig.tagline).toBeDefined();
    expect(siteConfig.githubUrl).toBeDefined();
    expect(siteConfig.siteUrl).toBeDefined();
  });

  it("should have valid GitHub URL", () => {
    expect(siteConfig.githubUrl).toMatch(/^https:\/\/github\.com\/.+/);
    expect(siteConfig.githubUrl).toContain("Unknown2-1");
  });

  it("should not have placeholder contact info", () => {
    // Email should be null if not configured
    if (siteConfig.email) {
      expect(siteConfig.email).not.toContain("example.com");
      expect(siteConfig.email).toContain("@");
    }
  });
});
