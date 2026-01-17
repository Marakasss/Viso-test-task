import { Project } from "../../generated/prisma/client.ts";

export function getProjectsService() {
  return Object.values(Project);
}
