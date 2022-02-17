import { useSystemStore } from "@/stores/system-store";
import { setActivePinia, createPinia } from "pinia";

describe("System Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("switch loading", () => {
    const counter = useSystemStore();
    expect(counter.isLoading).toBe(false);
    counter.startLoading();
    expect(counter.isLoading).toBe(true);
    counter.endLoading();
    expect(counter.isLoading).toBe(false);
  });
});
