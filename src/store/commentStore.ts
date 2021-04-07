import { observable, action, makeObservable, computed } from "mobx";
import RootStore from "./index";

export class CommentStore {
  private rootStore: RootStore;

  @observable comments: any[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      comments: observable,
    });
  }

  @action postComment(comment: string) {
    this.comments.push(comment);
  }

  @computed get commentsCount() {
    return this.comments.length;
  }
}
