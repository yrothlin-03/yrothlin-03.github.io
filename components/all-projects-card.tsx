import { ProjectListItem } from "./project-list-item";

interface AllProjectsCardProps {
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
  ongoing?: boolean;
}

export function AllProjectsCard({
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
  ongoing,
}: AllProjectsCardProps) {
  return <ProjectListItem {...{ slug, title, description, tags, date, image, imageSize, codeUrl, paper, slides, ongoing }} />;
}
