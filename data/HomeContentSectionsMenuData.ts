import HomeContentExperience from '@/components/pages/home/home-content-sections/HomeContentExperience';
import HomeContentProjects from '@/components/pages/home/home-content-sections/HomeContentProjects';
import HomeContentConsulting from '@/components/pages/home/home-content-sections/HomeContentConsulting';
import HomeContentCertifications from '@/components/pages/home/home-content-sections/HomeContentCertifications';
import HomeContentEducation from '@/components/pages/home/home-content-sections/HomeContentEducation';
import type { TabItem } from '@/types/components/Tabs';

export const menuOptions: TabItem[] = [
  {
    tabText: 'Professional Experience',
    renderComponent: HomeContentExperience(),
  },
  {
    tabText: 'Side Projects',
    renderComponent: HomeContentProjects(),
  },
  {
    tabText: 'Consulting / Mentorship',
    renderComponent: HomeContentConsulting(),
  },
  {
    tabText: 'Certifications',
    renderComponent: HomeContentCertifications(),
  },
  {
    tabText: 'Education',
    renderComponent: HomeContentEducation(),
  },
];
