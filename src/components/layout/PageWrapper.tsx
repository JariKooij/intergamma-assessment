import { cn } from "@/utils/cn";

interface IPageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className }: IPageWrapperProps) => {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="wrapper-spacing">{children}</div>
    </div>
  );
};

export default PageWrapper;
