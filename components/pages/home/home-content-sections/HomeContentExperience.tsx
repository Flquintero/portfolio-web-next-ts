import HomeContentListItem from './shared/HomeContentListItem';
import type { HomeContentExperience } from '@/types/components/HomeContentListItem';

const HomeContentExperience = () => {
  // To Do: Abstract this experience data and text. Also get the right image type not one using linkedin's cdn
  const experienceData: HomeContentExperience[] = [
    {
      title: 'SENIOR FRONTEND DEVELOPER',
      company: 'Sion',
      date: 'Jan 2023 - Present',
      logo: 'sion-logo.jpeg', // To do: create S3 bucket and host these
    },
    {
      title: 'SENIOR FRONTEND DEVELOPER',
      company: 'Andmore',
      date: 'Jan 2020 - Nov 2022',
      logo: 'andmore-logo.jpeg',
    },
    {
      title: 'FRONTEND DEVELOPER',
      company: 'Repzio',
      date: 'Oct 2018 - Jan 2020',
      logo: 'repzio-logo.jpeg',
    },
    {
      title: 'WEB ENGINEER',
      company: 'MotionPoint',
      date: 'Aug 2018 - Oct 2018',
      logo: 'motionpoint-logo.jpeg',
    },
    {
      title: 'CO-FOUNDER & FULL STACK DEVELOPER',
      company: 'Coach HQ',
      date: 'Jul 2016 - Aug 2018',
      logo: 'coachhq-logo.jpeg',
    },
    {
      title: 'FULL STACK DEVELOPER',
      company: 'Tablelist',
      date: 'Dec 2015 - Jul 2016',
      logo: 'tablelist-logo.jpeg',
    },
    {
      title: 'CUSTOMER SUCCESS MANAGER',
      company: 'Tablelist',
      date: 'Jul 2015 - Dec 2015',
      logo: 'tablelist-logo.jpeg',
    },
    {
      title: 'CO-FOUNDER & CUSTOMER SUCCESS MANAGER',
      company: 'NightPro',
      date: 'Feb 2012 - Jul 2015',
      logo: 'tablelistpro-logo.jpeg',
    },
  ];
  const experienceText = `My tech experience started 12 years ago when a friend contacted me to be
  the business side of a startup we eventually founded called NightPro.
  That started a journey that taught me how to talk to customers, learn
  their problems and turn them into a product that was used by leading
  nightclubs around the world. But most importantly it led me to become a
  software engineer. Since then I have had the fortune to work for
  great companies. They have allowed me to expand on my cross functional
  experience and knowledge related to different roles of a scrum team.
  Learn the intricacies of managing teams and deepen my knowledge of
  building complex applications in Javascript frameworks.`;
  return (
    // Abstract wrapper and text styling to global.css
    <article className="px-7 md:p-0 mt-4">
      <p className="mb-6 text-base md:text-md font-light text-justify">
        {experienceText}
      </p>
      {experienceData.map((experienceItem: HomeContentExperience) => (
        <HomeContentListItem
          key={experienceItem.company}
          listItem={experienceItem}
        />
      ))}
    </article>
  );
};

export default HomeContentExperience;
