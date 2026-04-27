import type { ComponentType } from "react";
import {
  About,
  Contact,
  Projects,
  Resume,
  Stack,
} from "../../profile/sections";

export type TerminalCommandId =
  | "about"
  | "projects"
  | "stack"
  | "resume"
  | "contact";

type TerminalCommandDefinition = {
  id: TerminalCommandId;
  label: string;
  Component: ComponentType;
};

const terminalCommandsById: Record<
  TerminalCommandId,
  TerminalCommandDefinition
> = {
  about: { id: "about", label: "About", Component: About },
  projects: { id: "projects", label: "Projects", Component: Projects },
  stack: { id: "stack", label: "Stack", Component: Stack },
  resume: { id: "resume", label: "Resume", Component: Resume },
  contact: { id: "contact", label: "Contact", Component: Contact },
};

export const terminalCommands = Object.values(terminalCommandsById);

export function isTerminalCommandId(value: string): value is TerminalCommandId {
  return value in terminalCommandsById;
}

export function getTerminalCommandComponent(commandId: TerminalCommandId) {
  return terminalCommandsById[commandId].Component;
}
