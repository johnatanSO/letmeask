import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAKOzYkdmKz-O7WbbpvkuPmNWIegF2JxxE",
  authDomain: "letmeask-db602.firebaseapp.com",
  databaseURL: "https://letmeask-db602-default-rtdb.firebaseio.com",
  projectId: "letmeask-db602",
  storageBucket: "letmeask-db602.appspot.com",
  messagingSenderId: "59878609515",
  appId: "1:59878609515:web:7359247ad5a01ed946172e"
};
export const app = initializeApp(firebaseConfig)