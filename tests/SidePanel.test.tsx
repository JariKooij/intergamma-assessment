import { render, screen, fireEvent } from "@testing-library/react";
import SidePanel from "@/components/ui/SidePanel";

// Dummy trigger button
const TriggerButton = (props: React.ComponentProps<"button">) => (
  <button {...props}>Open Panel</button>
);

describe("SidePanel", () => {
  it("renders trigger and opens panel on click", () => {
    render(
      <SidePanel title="Test Panel" Trigger={TriggerButton}>
        <p>Panel Content</p>
      </SidePanel>,
    );

    // Panel should be hidden initially
    expect(screen.getByTestId("sidepanel")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    // Click trigger
    fireEvent.click(screen.getByText("Open Panel"));

    // Panel should now be visible
    expect(screen.getByTestId("sidepanel")).toHaveAttribute(
      "aria-hidden",
      "false",
    );
  });

  it("closes panel when overlay is clicked", () => {
    render(
      <SidePanel title="Test Panel" Trigger={TriggerButton}>
        <p>Panel Content</p>
      </SidePanel>,
    );

    fireEvent.click(screen.getByText("Open Panel"));

    const overlay = screen.getByTestId("sidepanel-overlay");

    fireEvent.click(overlay);
    expect(screen.getByTestId("sidepanel")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("closes panel when close button is clicked", () => {
    render(
      <SidePanel title="Test Panel" Trigger={TriggerButton}>
        <p>Panel Content</p>
      </SidePanel>,
    );

    fireEvent.click(screen.getByText("Open Panel"));

    const closeButton = screen.getByLabelText("Close panel");
    fireEvent.click(closeButton);

    expect(screen.getByTestId("sidepanel")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });
});
