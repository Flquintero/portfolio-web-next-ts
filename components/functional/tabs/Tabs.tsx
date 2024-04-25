'use client';

import { useCallback, useState } from 'react';
import useDeviceDetection from '@/hooks/useDeviceDetection';
import TabsMenuDesktop from './TabsMenuDesktop';
import TabsMenuMobile from './TabsMenuMobile';
import type { TabItem } from '@/types/components/tabs';

type TabProps = {
  tabOptions: TabItem[];
};

const Tabs = ({ tabOptions }: TabProps) => {
  const device = useDeviceDetection();
  const [currentTabItemIndex, setCurrentTabItemIndex] = useState(0);
  const handleClick = useCallback((newIndex: number): void => {
    setCurrentTabItemIndex(newIndex);
  }, []);
  if (device === 'Mobile')
    return (
      <TabsMenuMobile
        tabOptions={tabOptions}
        currentTabItemIndex={currentTabItemIndex}
        onClick={handleClick}
      />
    );
  if (device === 'Desktop' || device === 'Tablet')
    return (
      <TabsMenuDesktop
        tabOptions={tabOptions}
        currentTabItemIndex={currentTabItemIndex}
        onClick={handleClick}
      />
    );
};

export default Tabs;
