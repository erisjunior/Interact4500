import { firebaseDatabase } from "./FirebaseUtil";

export default class FirebaseDatabase {
  static getDataList = (nodePath, callback, size = 10) => {
    let query = firebaseDatabase.ref(nodePath).limitToLast(size);

    query.on("value", dataSnapshot => {
      let items = [];

      dataSnapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();

        item["key"] = childSnapshot.key;

        items.push(item);
      });

      callback(items);
    });
  };

  static pushData = (node, objToSubmit) => {
    firebaseDatabase.ref(node).push(objToSubmit);
  };

  static remove = (id, node) => {
    firebaseDatabase.ref(`${node}/${id}`).remove();
  };
}
