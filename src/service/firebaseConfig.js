import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDKD7J8v-uhpXF3gZYyzCdU6Wr7D0_ZGzY",
  authDomain: "todolist-4f9ee.firebaseapp.com",
  databaseURL: "https://todolist-4f9ee-default-rtdb.firebaseio.com",
  projectId: "todolist-4f9ee",
  storageBucket: "todolist-4f9ee.appspot.com",
  messagingSenderId: "901218266786",
  appId: "1:901218266786:web:8390064646181538fbb1fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default database;

