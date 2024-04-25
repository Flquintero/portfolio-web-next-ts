import Tabs from '@/components/functional/tabs/Tabs';

export default function HomeContent() {
  const menuOptions = [
    { tabText: 'Professional Experience' },
    { tabText: 'Side Projects' },
    { tabText: 'Consulting / Mentorship' },
    { tabText: 'Certifications' },
    { tabText: 'Education' },
  ];
  return (
    <section className="w-full lg:max-w-2xl mx-auto">
      <Tabs tabOptions={menuOptions} />
    </section>
  );
}
