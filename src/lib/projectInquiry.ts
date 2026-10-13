export interface ProjectInquiry {
  projectType: string;
  projectScale: string;
  summary: string;
}

export function mergeProjectInquiry(existing: string, incoming: string, previous: string) {
  if (previous && existing.includes(previous)) return existing.replace(previous, incoming);
  return existing.trim() ? `${existing.trim()}\n\n${incoming}` : incoming;
}
