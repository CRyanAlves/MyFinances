import { PercentageValue } from "./percentageValue";

interface Props {
  name: string;
  value: string;
  percentage?: string;
  hidden: boolean;
  sm?: boolean;
  color?: string;
}

function InfoWidget({ name, value, percentage, hidden, sm, color }: Props) {
  const formattedValue = value;

  function hidesValue(formattedValue: string): string {
    return formattedValue.replace(/\d/g, "*");
  }

  const hiddenValue = hidesValue(formattedValue);
  return (
    <div className={`flex flex-col ${sm ? "gap-0" : "gap-[15px] py-3"}`}>
      <h2 className={`${sm ? "text-sm " : "text-base"} py-[6px]`}>
        {name}
      </h2>
      <span className="flex flex-row items-center justify-center">
        {!hidden ? (
          <>
            <p className={`text-xl w-40 font-bold ${color} `}>
              R$ {formattedValue}
            </p>
            <PercentageValue percentageValue={percentage} />
          </>
        ) : (
          <>
            <p className="text-xl w-40 font-bold">
              R$ {hiddenValue}
            </p>
            <PercentageValue percentageValue={percentage} />
          </>
        )}
      </span>
    </div>
  );
}

export default InfoWidget;
