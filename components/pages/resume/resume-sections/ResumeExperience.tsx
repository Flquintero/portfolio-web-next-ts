import ResumeListItem from './shared/ResumeListItem';
import { experienceItems, experienceText } from '@/data/ResumeExperienceData';
import type { IResumeListItem } from '@/types/components/ResumeListItem';

const HomeContentExperience = () => {
  return (
    <article className="resume-section-wrapper">
      <p className="resume-section-text">{experienceText}</p>
      {experienceItems.map((experienceItem: IResumeListItem) => (
        <ResumeListItem
          key={experienceItem.subtitle}
          listItem={experienceItem}
        />
      ))}
    </article>
  );
};

export default HomeContentExperience;
