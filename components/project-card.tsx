import { ProjectListItem } from "./project-list-item";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  image: string;
  imageSize?: "small";
  codeUrl?: string;
  paper?: string | null;
  slides?: string | null;
}

export function ProjectCard({
  slug,
  title,
  description,
  tags,
  date,
  image,
  imageSize,
  codeUrl,
  paper,
  slides,
}: ProjectCardProps) {
  return <ProjectListItem {...{ slug, title, description, tags, date, image, imageSize, codeUrl, paper, slides }} />;
}
