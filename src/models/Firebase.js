import * as firebase from 'firebase';
import firebaseConfig from '../config';

class Database {

  constructor(config) {
    this.firebaseApp = firebase.initializeApp(config);
    this.db = this.firebaseApp.database();
  }

  get app() { return this.firebaseApp; }
  get database() { return this.db; }
  // get value at specific path
  get(path) {
    return this.db.ref(path).once('value');
  }

  // set a value at a specific path
  // WARNING: THIS WILL OVERRIDE WHATEVER DATA MAY EXIST AT THIS LOCATION
  // TODO: make this analogous to PUT, make separate POST that generates uid with the
  //       ref.push() method
  set(path, value) {
    return this.db.ref(path).set(value);
  }

  // delete the data at the specified path
  // WARNING: This will delete all child nodes of path as well
  delete(path) {
    const ref = this.db.ref(path);
    return ref.remove();
  }

  // subscribe using firebase on
  // returns an object that allows you to easily dispose of subscribers
  subscribe(path, event, cb) {
    const ref = this.db.ref(path);
    ref.on(event, cb);

    return {
      unsubscribe() { ref.off(event, cb); },
    };
  }
}

export default new Database(firebaseConfig);
