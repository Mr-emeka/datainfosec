import { observable, action, makeObservable, runInAction } from "mobx";
import RootStore from "./index";
import { baseURL } from "../helpers";
import { NewsProps } from "../types";

export class NewsStore {
  private rootStore: RootStore;

  @observable feeds: NewsProps[] = [];
  @observable news: NewsProps = {};
  @observable topFeeds: NewsProps[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      feeds: observable,
      news: observable,
      topFeeds: observable,
    });
  }

  /**get all news  */

  @action async getFeeds() {
    let response = await fetch(
      `${baseURL}/all?api_token=${process.env.REACT_APP_NEWS_API_KEY}&locale=us&language=en`
    );
    // let news: NewsProps[] = await response.json();
    let feeds = await response.json();
    console.log(feeds);
    runInAction(() => {
      this.feeds = feeds.data;
    });
  }

  /**get top stories(News) */

  @action async getTopStories() {
    let response = await fetch(
      `${baseURL}/top?api_token=${process.env.REACT_APP_NEWS_API_KEY}&locale=us&language=en`
    );
    // let news: NewsProps[] = await response.json();
    let feeds = await response.json();
    console.log(feeds);
    runInAction(() => {
      this.topFeeds = feeds.data;
    });
  }

  /** get news by id */

  @action async getNewsById(uuid: string) {
    let response = await fetch(
      `${baseURL}/uuid/${uuid}?api_token=${process.env.REACT_APP_NEWS_API_KEY}&locale=us&language=en`
    );
    let news = await response.json();
    console.log(news);
    runInAction(() => {
      this.news = news;
    });
  }
}