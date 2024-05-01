import ResumeExperience from '@/components/pages/resume/resume-sections/ResumeExperience';
import ResumeProjects from '@/components/pages/resume/resume-sections/ResumeProjects';
import ResumeConsulting from '@/components/pages/resume/resume-sections/ResumeConsulting';
import ResumeCertifications from '@/components/pages/resume/resume-sections/ResumeCertifications';
import ResumeEducation from '@/components/pages/resume/resume-sections/ResumeEducation';
import type { TabItem } from '@/types/components/Tabs';

export const menuOptions: TabItem[] = [
  {
    tabText: 'Professional Experience',
    renderComponent: ResumeExperience(),
  },
  {
    tabText: 'Side Projects',
    renderComponent: ResumeProjects(),
  },
  {
    tabText: 'Consulting / Mentorship',
    renderComponent: ResumeConsulting(),
  },
  {
    tabText: 'Certifications',
    renderComponent: ResumeCertifications(),
  },
  {
    tabText: 'Education',
    renderComponent: ResumeEducation(),
  },
];
