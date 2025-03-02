interface Props {
  isActive: boolean;
  isSuccess: boolean;
}

export const StepperConnectorLine = ({ isActive, isSuccess }: Props) => {
  return (
    <>
      <span
        className={`
          absolute 
          top-[calc(1.25rem+2px)] xl:top-[calc(1.5rem+2px)] 
          -right-[2px] 
          h-[2px] 
          mt-[-1px] 
          soft-bg-hover
          w-[calc(100%-2.5rem)] xl:w-[calc(100%-3rem)] 
        `}
      >
        <span
          className={`absolute top-0 left-0 h-full bg-accent transition-all duration-500 ease-in-out ${
            isSuccess && !isActive ? "w-full" : "w-0"
          }`}
        ></span>
      </span>
    </>
  );
};
