import { type Project, type InsertProject, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private messages: Map<number, ContactMessage>;
  private projectId: number;
  private messageId: number;

  constructor() {
    this.projects = new Map();
    this.messages = new Map();
    this.projectId = 1;
    this.messageId = 1;

    // Add sample projects
    const sampleProjects = [
      {
        id: this.projectId++,
        title: "Modern E-commerce Redesign",
        description: "Complete UX/UI overhaul for a leading e-commerce platform",
        imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
        tags: ["UX Design", "UI Design", "E-commerce"],
      },
      {
        id: this.projectId++,
        title: "Financial App Interface",
        description: "Intuitive mobile banking application design",
        imageUrl: "https://images.unsplash.com/photo-1600132806608-231446b2e7af",
        tags: ["Mobile", "Fintech", "UI Design"],
      },
      {
        id: this.projectId++,
        title: "Healthcare Dashboard",
        description: "Patient management system dashboard redesign",
        imageUrl: "https://images.unsplash.com/photo-1716788781066-7dbce308bbe0",
        tags: ["Dashboard", "Healthcare", "UX Research"],
      },
    ];

    sampleProjects.forEach(project => this.projects.set(project.id, project));
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.projectId++;
    const newProject = { ...project, id };
    this.projects.set(id, newProject);
    return newProject;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.messageId++;
    const newMessage = { ...message, id };
    this.messages.set(id, newMessage);
    return newMessage;
  }
}

export const storage = new MemStorage();
