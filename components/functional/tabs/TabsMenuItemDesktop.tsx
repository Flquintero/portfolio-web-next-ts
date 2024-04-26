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
      className={`mx-1 lg:mx-0 ${isCurrentTab ? 'opacity-100' : 'opacity-25'}`}
      onClick={() => onClick(tabIndex)}
    >
      <h3 className="text-md lg:text-lg">{tabText}</h3>
    </button>
  );
};

export default TabsItem;
