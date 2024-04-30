import HomeContentListItem from './shared/HomeContentListItem';
import {
  experienceItems,
  experienceText,
} from '@/data/HomeContentExperienceData';
import type { HomeContentExperience } from '@/types/components/HomeContentListItem';

const HomeContentExperience = () => {
  return (
    <article className="home-content-section-wrapper">
      <p className="home-content-section-text">{experienceText}</p>
      {experienceItems.map((experienceItem: HomeContentExperience) => (
        <HomeContentListItem
          key={experienceItem.company}
          listItem={experienceItem}
        />
      ))}
    </article>
  );
};

export default HomeContentExperience;
