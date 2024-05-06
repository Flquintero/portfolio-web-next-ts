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
  const dynamicTabStyling = isCurrentTab ? 'border-b border-neutral-800' : '';
  return (
    <button
      className={`mx-1 lg:mx-0 ${dynamicTabStyling}`}
      onClick={() => onClick(tabIndex)}
    >
      <h3 className="text-md lg:text-lg">{tabText}</h3>
    </button>
  );
};

export default TabsItem;
