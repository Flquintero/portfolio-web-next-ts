import Image from 'next/image';
import type { IResumeListItem } from '@/types/components/ResumeListItem';

type ResumeListItemProps = {
  listItem: IResumeListItem;
};

const ResumeListItem = ({ listItem }: ResumeListItemProps) => {
  const renderLogo = (logoFile: string): string => `/resume-logos/${logoFile}`;
  return (
    <section className="w-full flex border py-3 mb-5 shadow-sm rounded-lg">
      <div className="min-w-20 flex justify-center items-center">
        <Image
          src={renderLogo(listItem.logo)}
          className="rounded-full"
          width="40"
          height="40"
          alt={`${listItem.title} logo`}
        />
      </div>
      <div className="flex grow flex-col justify-center md:justify-start md:flex-row">
        <div>
          <div className="text-xs md:text-sm">{listItem.title}</div>
          <div className="text-xs md:text-sm font-light">
            {listItem.subtitle}
          </div>
        </div>
      </div>
      <div className="min-w-24 flex justify-center items-center mx-5 text-xs font-light">
        <span>{listItem.date}</span>
      </div>
    </section>
  );
};
export default ResumeListItem;
