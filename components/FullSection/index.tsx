interface FullSectionProps {
  children: React.ReactNode;
  id?: string;
}

export const FullSection = ({children, id}: FullSectionProps) => {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 p-8"
    >
      {children}
    </section>
  );
};
