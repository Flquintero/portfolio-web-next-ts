'use client';

type TabsItemProps = {
  tabText: string;
  tabIndex: number;
  currentTabIndex: number;
  onClick: (newIndex: number) => void;
};

const TabsItem = ({
  tabText,
  tabIndex,
  currentTabIndex,
  onClick,
}: TabsItemProps) => {
  const isCurrentTab = currentTabIndex === tabIndex;
  return (
    <button
      className={`${isCurrentTab ? 'opacity-100' : 'opacity-25'}`}
      onClick={() => onClick(tabIndex)}
    >
      {tabText}
    </button>
  );
};

export default TabsItem;
