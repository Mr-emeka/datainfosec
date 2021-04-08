import RootStore from "../../store";

describe("Main Store", () => {
  it("should get all feeds", async () => {
    const { newsStore } = new RootStore();
    expect(newsStore.feeds.length).toBe(0);
    await newsStore.getFeeds();
    expect(newsStore.feeds.length).toBeGreaterThan(0);
  });
  it("should get all topStories", async () => {
    const { newsStore } = new RootStore();
    expect(newsStore.topFeeds.length).toBe(0);
    await newsStore.getTopStories();
    expect(newsStore.topFeeds.length).toBeGreaterThan(0);
  });
  it("should not get feed by uuid", async () => {
    const { newsStore } = new RootStore();
    expect(newsStore.news).toEqual({});
    await newsStore.getNewsById("1");
  });
});
