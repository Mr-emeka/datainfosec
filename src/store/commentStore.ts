import { observable, action, makeObservable } from "mobx";
import RootStore from "./index";
import { db } from "../helpers/firebase";

export class CommentStore {
  private rootStore: RootStore;

  @observable comments: any[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      comments: observable,
    });
  }
  @action getComments(uuid: any) {
    db.ref(`comments/${uuid}`).once("value", (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.keys(snapshot.val() || {}).map(
          (k) => snapshot.val()[k]
        );
        this.comments = data;
      }
    });
  }
  @action postComment(uuid: any, comment: string, setComment: any) {
    db.ref(`comments/${uuid}`)
      .push(comment)
      .then((res) => {
        this.comments.push(comment);
        setComment("");
      });
  }
}
