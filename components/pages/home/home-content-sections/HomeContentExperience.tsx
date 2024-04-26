import HomeContentListItem from './shared/HomeContentListItem';

const HomeContentExperience = () => {
  const experienceData = [1, 2, 3, 4];
  return (
    // Abstract wrapper styling to global.css
    <div className="px-7 md:p-0 mt-4">
      <p className="mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley
      </p>
      {experienceData.map((item: number) => (
        <HomeContentListItem key={item} />
      ))}
    </div>
  );
};

export default HomeContentExperience;
