import { NewsStore } from "./NewsStore";
import { CommentStore } from "./commentStore";

/**
 * Root Store Class with
 */
export default class RootStore {
  newsStore: NewsStore;
  commentStore: CommentStore;

  constructor() {
    this.newsStore = new NewsStore(this);
    this.commentStore = new CommentStore(this);
  }
}
