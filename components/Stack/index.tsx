interface StackProps {
  children: React.ReactNode;
  className?: string;
}

export const Stack = ({children, className}: StackProps) => {
  return (
    <div
      className={`flex flex-col gap-6 lg:gap-12 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};
