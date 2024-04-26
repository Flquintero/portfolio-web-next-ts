'use client';

import { useCallback, useState } from 'react';
import useDeviceDetection from '@/hooks/useDeviceDetection';
import TabsMenuDesktop from './TabsMenuDesktop';
import TabsMenuMobile from './TabsMenuMobile';
import type { TabItem } from '@/types/components/Tabs';

type TabProps = {
  tabOptions: TabItem[];
};

const Tabs = ({ tabOptions }: TabProps) => {
  const device = useDeviceDetection();
  const [currentTabItemIndex, setCurrentTabItemIndex] = useState(0);
  const handleClick = useCallback((newIndex: number): void => {
    setCurrentTabItemIndex(newIndex);
  }, []);
  const currentTabContent = tabOptions[currentTabItemIndex].renderComponent;
  if (device === 'Mobile')
    return (
      <div>
        <TabsMenuMobile
          tabOptions={tabOptions}
          currentTabItemIndex={currentTabItemIndex}
          onClick={handleClick}
        />
        {currentTabContent}
      </div>
    );
  if (device === 'Desktop' || device === 'Tablet')
    return (
      <div>
        <TabsMenuDesktop
          tabOptions={tabOptions}
          currentTabItemIndex={currentTabItemIndex}
          onClick={handleClick}
        />
        {currentTabContent}
      </div>
    );
};

export default Tabs;
