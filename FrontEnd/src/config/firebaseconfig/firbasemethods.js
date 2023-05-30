import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, set, ref, onValue, push, query, get, limitToLast, limitToFirst, equalTo, startAfter, endAt } from "firebase/database";
import app from "./firebaseconfig";

const auth = getAuth(app);
const db = getDatabase(app);

let signUpUser = (obj) => {
  console.log("obj", obj);
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        obj.id = res.user.uid;
        const reference = ref(db, `instituteUsers/${obj.id}`);
        set(reference, obj)
          .then(() => {
            resolve("Data Send Successfully in Database and User Created");
          })
          .catch((err) => {
            reject(err.message);
          });
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};
let loginUser = (obj) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, obj.userName, obj.password)
      .then((res) => {
        const reference = ref(db, `instituteUsers/${res.user.uid}`);
        onValue(reference, (data) => {
          if (data.exists()) {
            resolve(data.val());
          } else {
            reject("Data Not Found :(");
          }
        });
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

let checkAuth = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
        localStorage.setItem("userId", uid);
        resolve(uid);
      } else {
        reject("User Not Logged In");
      }
    });
  });
};

let userLogOut = async () => {

  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("Signed out successfully")
    return true;
  }).catch((error) => {
    console.log('error', error);
    return false;
    // An error happened.
  });
};

let fbGet = (nodeName) => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, nodeName);
    onValue(reference, (dt) => {
      if (dt.exists()) {
        resolve(dt.val())
      } else {
        reject('No Data Found')
      }
    })
  })
}

let getFBData = (nodeName, id) => {
  let reference = ref(db, `${nodeName}/${id ? id : ""}`);
  return new Promise((resolve, reject) => {
    onValue(reference, (dt) => {
      if (dt.exists()) {
        if (id) {
          resolve(dt.val());
        } else {
          resolve(Object.values(dt.val()));
        }
      } else {
        reject("no Data Found");
      }
    });
  });
};
let postFBData = (nodeName, obj, id) => {
  return new Promise((resolve, reject) => {
    if (id) {
      let reference = ref(db, `${nodeName}/${id ? id : ""}/`);
      set(reference, obj)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      let keyRef = ref(db, `${nodeName}`);
      obj.id = push(keyRef).key;
      let postRef = ref(db, `${nodeName}/${obj.id}`);
      set(postRef, obj);
    }
  });
};
let fbCustomPost = (nodeName, obj) => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, `${nodeName}/`);
    set(reference, obj)
      .then(() => {
        resolve("data send Successfully");
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

let editFBData = () => { };
let deleteFBData = () => { };

// -------  GETTING ALL DATA WITH QUERY  -------

let AllDataWithQuery = (nodeName) => {
  return new Promise((resolve, reject) => {
    const Data = query(ref(db, `${nodeName}/`), limitToLast(5));
    get(Data)
      .then(() => {
        resolve("data send Successfully")
      })
      .catch((err) => { reject(err.message); })
  })

}

export {
  signUpUser,
  loginUser,
  userLogOut,
  fbGet,
  getFBData,
  postFBData,
  fbCustomPost,
  editFBData,
  deleteFBData,
  checkAuth,
  AllDataWithQuery
};
