import HomeContentListItem from './shared/HomeContentListItem';

const HomeContentExperience = () => {
  const experienceData = [1, 2, 3, 4];
  return (
    // Abstract wrapper styling to global.css
    <div className="px-7 md:p-0 mt-8">
      {experienceData.map((item: number) => (
        <HomeContentListItem key={item} />
      ))}
    </div>
  );
};

export default HomeContentExperience;
