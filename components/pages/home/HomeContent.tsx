import Tabs from '@/components/functional/tabs/Tabs';
import { menuOptions } from '@/data/HomeContentSectionsMenuData';

const HomeContent = () => {
  return (
    <section className="w-full lg:max-w-2xl mx-auto px-2 md:px-8">
      <Tabs tabOptions={menuOptions} />
    </section>
  );
};

export default HomeContent;
