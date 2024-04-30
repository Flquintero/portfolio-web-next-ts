import Image from 'next/image';
import type { IHomeContentListItem } from '@/types/components/HomeContentListItem';

type HomeContentListItemProps = {
  listItem: IHomeContentListItem;
};

const HomeContentListItem = ({ listItem }: HomeContentListItemProps) => {
  const renderLogo = (logoFile: string): string =>
    `/experience-logos/${logoFile}`;
  return (
    <section className="w-full flex border py-3 mb-5 shadow-sm rounded-lg">
      <div className="min-w-20 flex justify-center items-center">
        <Image
          src={renderLogo(listItem.logo)}
          className="rounded-full"
          width="40"
          height="40"
          alt="Linkedin Icon"
        />
      </div>
      <div className="flex grow flex-col justify-center md:justify-start md:flex-row">
        <div>
          <div className="text-xs md:text-sm">{listItem.title}</div>
          <div className="text-xs md:text-sm font-light">
            {listItem.company}
          </div>
        </div>
      </div>
      <div className="min-w-24 flex justify-center items-center mx-5 text-xs font-light">
        <span>{listItem.date}</span>
      </div>
    </section>
  );
};
export default HomeContentListItem;
