import ResumeListItem from './shared/ResumeListItem';
import { educationItems, educationText } from '@/data/ResumeEducationData';
import type { IResumeListItem } from '@/types/components/ResumeListItem';

const ResumeEducation = () => {
  return (
    <article className="resume-section-wrapper">
      <p className="resume-section-text">{educationText}</p>
      {educationItems.map((projectItem: IResumeListItem) => (
        <ResumeListItem key={projectItem.subtitle} listItem={projectItem} />
      ))}
    </article>
  );
};

export default ResumeEducation;
