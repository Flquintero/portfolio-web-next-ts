'use client';

import { useCallback, useState } from 'react';
import TabsItem from './TabsItem';

type TabMenuProps = {
  tabOptions: TabItem[];
};

type TabItem = {
  tabText: string;
  renderComponent?: JSX.Element;
};

const TabsMenu = ({ tabOptions }: TabMenuProps) => {
  const [currentTabItemIndex, setCurrentTabItemIndex] = useState(0);
  const handleClick = useCallback((newIndex: number): void => {
    setCurrentTabItemIndex(newIndex);
  }, []);
  return (
    <div className="w-full flex justify-between text-center">
      {tabOptions.map((tabItem: TabItem, index: number) => (
        <TabsItem
          key={tabItem.tabText}
          tabText={tabItem.tabText}
          onClick={handleClick}
          tabIndex={index}
          currentTabIndex={currentTabItemIndex}
        />
      ))}
    </div>
  );
};

export default TabsMenu;
