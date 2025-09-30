import { cn } from "@/utils/cn";

describe("cn utility", () => {
  it("merges multiple class names", () => {
    expect(cn("bg-red-500", "text-white")).toBe("bg-red-500 text-white");
  });

  it("removes conflicting Tailwind classes", () => {
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
  });

  it("handles conditional classes", () => {
    expect(cn("text-sm", false && "text-lg")).toBe("text-sm");
  });

  it("merges classes with arrays and objects", () => {
    expect(cn(["text-sm", { "font-bold": true, italic: false }])).toBe(
      "text-sm font-bold",
    );
  });
});
