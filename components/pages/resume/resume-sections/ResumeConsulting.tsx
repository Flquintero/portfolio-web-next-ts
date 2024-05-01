import ResumeListItem from './shared/ResumeListItem';
import { consultingItems, consultingText } from '@/data/ResumeConsultingData';
import type { IResumeListItem } from '@/types/components/ResumeListItem';

const ResumeConsulting = () => {
  return (
    <article className="resume-section-wrapper">
      <p className="resume-section-text">{consultingText}</p>
      {consultingItems.map((projectItem: IResumeListItem) => (
        <ResumeListItem key={projectItem.subtitle} listItem={projectItem} />
      ))}
    </article>
  );
};

export default ResumeConsulting;
