import { useState } from "react";
import { LuInfo } from "react-icons/lu";

interface Props {
  info: string;
}

const InfoButton = ({ info }: Props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      className="inline-block relative"
    >
      <LuInfo size={18} />
      {showInfo && (
        <div
          className="text-lg w-64 h-auto absolute top-full left-1/2 transform -translate-x-1/2 bg-bodydark dark:bg-body text-white dark:text-primary p-2 rounded"
          style={{ zIndex: 999 }}
        >
          {info}
        </div>
      )}
    </div>
  );
};

export default InfoButton;
