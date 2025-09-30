import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { XIcon } from "lucide-react";
import Button from "@/components/ui/Button";

describe("Button component", () => {
  it("renders with default props", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary", "border-primary");
  });

  it("renders with secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole("button", { name: /secondary/i });
    expect(button).toHaveClass("border-secondary");
  });

  it("renders with icon size", () => {
    render(
      <Button size="icon">
        <XIcon />
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("size-10");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByRole("button", { name: /click/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
