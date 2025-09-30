import { cn } from "@/utils/cn";

interface IPageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className }: IPageWrapperProps) => {
  return (
    <div className={cn("flex justify-center py-6", className)}>
      <div className="max-w-wrapper mx-4 w-full sm:mx-16">{children}</div>
    </div>
  );
};

export default PageWrapper;
