import ResumeListItem from './shared/ResumeListItem';
import {
  certificationsItems,
  certificationsText,
} from '@/data/ResumeCertificationsData';
import type { IResumeListItem } from '@/types/components/ResumeListItem';

const ResumeCertifications = () => {
  return (
    <article className="resume-section-wrapper">
      <p className="resume-section-text">{certificationsText}</p>
      {certificationsItems.map((projectItem: IResumeListItem) => (
        <ResumeListItem key={projectItem.subtitle} listItem={projectItem} />
      ))}
    </article>
  );
};

export default ResumeCertifications;
