import { LuArrowRight } from "react-icons/lu";

interface Props {
  title?: string;
  content?: string;
  path?: string;
  icon?: any;
}
const Card = ({ title, content, path, icon }: Props) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden bg-white dark:bg-bodydark">
      <div className="px-5 py-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <span className="font-bold text-xl mb-2">{title}</span>
            {icon}
          </div>
          <a href={path}>
            <LuArrowRight size={25} />
          </a>
        </div>
        <p className=" text-base">{content}</p>
      </div>
    </div>
  );
};

export default Card;
