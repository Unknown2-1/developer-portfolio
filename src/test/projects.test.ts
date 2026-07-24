import { describe, it, expect } from "vitest";
import { projects, getProjectBySlug, getFeaturedProjects, getStatusLabel } from "@/config/projects";

describe("Projects Configuration", () => {
  describe("projects", () => {
    it("should have at least one project", () => {
      expect(projects.length).toBeGreaterThan(0);
    });

    it("should have unique slugs", () => {
      const slugs = projects.map((p) => p.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    it("should have required fields for each project", () => {
      projects.forEach((project) => {
        expect(project.slug).toBeDefined();
        expect(project.name).toBeDefined();
        expect(project.description).toBeDefined();
        expect(project.status).toBeDefined();
        expect(project.role).toBeDefined();
        expect(project.githubUrl).toBeDefined();
        expect(project.githubUrl).toContain("github.com");
        expect(project.technologies).toBeDefined();
        expect(project.technologies.length).toBeGreaterThan(0);
      });
    });

    it("should have valid GitHub URLs", () => {
      projects.forEach((project) => {
        expect(project.githubUrl).toMatch(/^https:\/\/github\.com\/.+/);
      });
    });

    it("should not have placeholder URLs", () => {
      projects.forEach((project) => {
        if (project.liveUrl) {
          expect(project.liveUrl).not.toContain("example.com");
          expect(project.liveUrl).not.toContain("placeholder");
        }
      });
    });

    it("should have at least one featured project", () => {
      const featured = getFeaturedProjects();
      expect(featured.length).toBeGreaterThan(0);
    });
  });

  describe("getProjectBySlug", () => {
    it("should return project for valid slug", () => {
      const project = getProjectBySlug("vaultshare");
      expect(project).toBeDefined();
      expect(project?.slug).toBe("vaultshare");
    });

    it("should return undefined for invalid slug", () => {
      const project = getProjectBySlug("nonexistent");
      expect(project).toBeUndefined();
    });
  });

  describe("getFeaturedProjects", () => {
    it("should only return featured projects", () => {
      const featured = getFeaturedProjects();
      featured.forEach((project) => {
        expect(project.featured).toBe(true);
      });
    });
  });

  describe("getStatusLabel", () => {
    it("should return correct labels", () => {
      expect(getStatusLabel("live")).toBe("Live");
      expect(getStatusLabel("completed")).toBe("Completed");
      expect(getStatusLabel("in-development")).toBe("In Development");
    });
  });
});
