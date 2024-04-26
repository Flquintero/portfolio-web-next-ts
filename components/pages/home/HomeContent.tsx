import Tabs from '@/components/functional/tabs/Tabs';
import HomeContentExperience from './home-content-sections/HomeContentExperience';
import HomeContentProjects from './home-content-sections/HomeContentProjects';
import HomeContentConsulting from './home-content-sections/HomeContentConsulting';
import HomeContentCertifications from './home-content-sections/HomeContentCertifications';
import HomeContentEducation from './home-content-sections/HomeContentEducation';

const HomeContent = () => {
  const menuOptions = [
    {
      tabText: 'Professional Experience',
      renderComponent: <HomeContentExperience />,
    },
    {
      tabText: 'Side Projects',
      renderComponent: <HomeContentProjects />,
    },
    {
      tabText: 'Consulting / Mentorship',
      renderComponent: <HomeContentConsulting />,
    },
    {
      tabText: 'Certifications',
      renderComponent: <HomeContentCertifications />,
    },
    {
      tabText: 'Education',
      renderComponent: <HomeContentEducation />,
    },
  ];
  return (
    <section className="w-full lg:max-w-2xl mx-auto px-8">
      <Tabs tabOptions={menuOptions} />
    </section>
  );
};

export default HomeContent;
