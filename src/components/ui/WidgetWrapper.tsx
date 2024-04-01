function WidgetWrapper({
  children,
  hug,
}: {
  children: React.ReactNode;
  hug?: boolean;
}) {
  return (
    <div
      className={`flex flex-row justify-between  bg-white h-1/2 md:h-full dark:bg-bodydark rounded-lg px-6 py-2 ${
        hug ? "w-max" : "w-full"
      } `}
    >
      {children}
    </div>
  );
}

export default WidgetWrapper;
