'use client';

import { useCallback, useState } from 'react';
import TabsMenuItem from './TabsMenuItem';

type TabsMenuDesktop = {
  tabOptions: TabItem[];
  currentTabItemIndex: number;
  onClick: (newIndex: number) => void;
};

type TabItem = {
  tabText: string;
  renderComponent?: JSX.Element;
};

const TabsMenuDesktop = ({
  tabOptions,
  currentTabItemIndex,
  onClick,
}: TabsMenuDesktop) => {
  return (
    <div className="w-full flex justify-between text-center">
      {tabOptions.map((tabItem: TabItem, index: number) => (
        <TabsMenuItem
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
