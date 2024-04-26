'use client';
import Image from 'next/image';
import { TabItem } from '@/types/components/Tabs';

type TabsMenuMobile = {
  tabOptions: TabItem[];
  currentTabItemIndex: number;
  onClick: (newIndex: number) => void;
};

const TabsMenuMobile = ({
  tabOptions,
  currentTabItemIndex,
  onClick,
}: TabsMenuMobile) => {
  const isFirstIndex = currentTabItemIndex === 0;
  const isLastIndex = currentTabItemIndex === tabOptions.length - 1;
  return (
    <div className="w-full px-5 flex justify-between items-center">
      <Image
        className={`${isFirstIndex ? 'opacity-25' : 'opacity-100'}`}
        src="icons/functional/chevron-left.svg"
        width="10"
        height="10"
        alt="Chevron Icon Left"
        onClick={() => (isFirstIndex ? null : onClick(currentTabItemIndex - 1))}
      />

      <h3 className="text-xl">{tabOptions[currentTabItemIndex].tabText}</h3>

      <Image
        className={`${isLastIndex ? 'opacity-25' : 'opacity-100'}`}
        src="icons/functional/chevron-right.svg"
        width="10"
        height="10"
        alt="Chevron Icon Right"
        onClick={() => (isLastIndex ? null : onClick(currentTabItemIndex + 1))}
      />
    </div>
  );
};

export default TabsMenuMobile;
