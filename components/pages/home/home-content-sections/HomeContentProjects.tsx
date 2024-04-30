import HomeContentListItem from './shared/HomeContentListItem';
import {
  experienceItems,
  experienceText,
} from '@/data/HomeContentExperienceData';
import type { IHomeContentListItem } from '@/types/components/HomeContentListItem';

const HomeContentSideProjects = () => {
  return (
    <article className="home-content-section-wrapper">
      <p className="home-content-section-text">{experienceText}</p>
      {experienceItems.map((experienceItem: IHomeContentListItem) => (
        <HomeContentListItem
          key={experienceItem.company}
          listItem={experienceItem}
        />
      ))}
    </article>
  );
};

export default HomeContentSideProjects;
