import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

interface Props {
  percentageValue?: string;
}

export const PercentageValue = ({ percentageValue }: Props) => {
  function checkNegative(string: string): boolean {
    return string.startsWith("-");
  }
  return (
    <div>
      {percentageValue === undefined ? (
        <p className="text-base text-red flex flex-row items-center"></p>
      ) : checkNegative(percentageValue || " ") ? (
        <p className="text-base text-red dark:text-reddark flex flex-row items-center gap-1">
          {<BiSolidDownArrow />} {`${percentageValue}%`}
        </p>
      ) : (
        <p className="text-base text-green dark:text-greendark flex flex-row items-center gap-2">
          {<BiSolidUpArrow />} {`${percentageValue}%`}
        </p>
      )}
    </div>
  );
};
