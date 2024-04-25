'use client';

import { useCallback, useState } from 'react';
import TabsMenuDesktop from './TabsMenuDesktop';
import TabsMenuMobile from './TabsMenuMobile';

type TabProps = {
  tabOptions: TabItem[];
};

type TabItem = {
  tabText: string;
  renderComponent?: JSX.Element;
};

const Tabs = ({ tabOptions }: TabProps) => {
  const [currentTabItemIndex, setCurrentTabItemIndex] = useState(0);
  const handleClick = useCallback((newIndex: number): void => {
    setCurrentTabItemIndex(newIndex);
  }, []);
  return (
    <section>
      <div className="hidden md:flex px-5">
        <TabsMenuDesktop
          tabOptions={tabOptions}
          currentTabItemIndex={currentTabItemIndex}
          onClick={handleClick}
        />
      </div>
      <div className="flex md:hidden px-5">
        <TabsMenuMobile />
      </div>
    </section>
  );
};

export default Tabs;
