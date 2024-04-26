'use client';
import TabsMenuItemDesktop from './TabsMenuItemDesktop';
import type { TabItem } from '@/types/components/Tabs';

type TabsMenuDesktop = {
  tabOptions: TabItem[];
  currentTabItemIndex: number;
  onClick: (newIndex: number) => void;
};

const TabsMenuDesktop = ({
  tabOptions,
  currentTabItemIndex,
  onClick,
}: TabsMenuDesktop) => {
  return (
    <div className="w-full flex justify-between text-center">
      {tabOptions.map((tabItem: TabItem, index: number) => (
        <TabsMenuItemDesktop
          key={tabItem.tabText}
          tabText={tabItem.tabText}
          onClick={onClick}
          tabIndex={index}
          currentTabIndex={currentTabItemIndex}
        />
      ))}
    </div>
  );
};

export default TabsMenuDesktop;
