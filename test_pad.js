// JavaScript file for the web page "World Peace Issue Tracker"
// Created by Harrison Kong
// Copyright (C) Coursera 2020

// Your web app's Firebase configuration
// Your web app's Firebase configuration
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCgtqtRUmrdm80HPJXNqsjrkBd3BiyqXJ4",
    authDomain: "syed-world-peace.firebaseapp.com",
    databaseURL: "https://syed-world-peace.firebaseio.com",
    projectId: "syed-world-peace",
    storageBucket: "syed-world-peace.appspot.com",
    messagingSenderId: "669616038452",
    appId: "1:669616038452:web:d14a32fe573df24ffe2061",
    measurementId: "G-FNVPNNTH4N"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const rootRef = firebase.database().ref("issues/");

// Paste the web app's configuration above this line
// Our code starts below

// GET A ROOT REFERENCE to issues HERE (type along)

// Task 3 ------------------------------------------

// rootRef.push ({
//   description: "Logo does not show up on screen 3",
//   resolved: "yes",
//   severity: "minor"
// });
//
// rootRef.push ({
//   description: "Screen flashes on save",
//   resolved: "no",
//   severity: "moderate"
// });

// Task 6 ------------------------------------------

// var recordRef = firebase.database().ref("issues/change-me");
//
// recordRef.update ({
//    "resolved": "yes"
// });

// Task 7 ------------------------------------------

// var recordRef = firebase.database().ref("issues/delete-me");
//
// recordRef.remove()
//    .catch(function(error) {
//      alert("Delete failed: " + error.message)
//    });
