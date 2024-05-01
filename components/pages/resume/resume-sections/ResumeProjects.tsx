import ResumeListItem from './shared/ResumeListItem';
import { projectsItems, projectsText } from '@/data/ResumeProjectsData';
import type { IResumeListItem } from '@/types/components/ResumeListItem';

const ResumeSideProjects = () => {
  return (
    <article className="resume-section-wrapper">
      <p className="resume-section-text">{projectsText}</p>
      {projectsItems.map((projectItem: IResumeListItem) => (
        <ResumeListItem key={projectItem.subtitle} listItem={projectItem} />
      ))}
    </article>
  );
};

export default ResumeSideProjects;
