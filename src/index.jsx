var React = require('react');
var ReactDOM = require('react-dom');
var firebase = require('firebase');
var App = require('./components/App.jsx');

var config = {
  apiKey: "AIzaSyAKZQWBbnb5N3Ovkx5afBQuvnyVudSobwo",
  authDomain: "grapevine-84264.firebaseapp.com",
  databaseURL: "https://grapevine-84264.firebaseio.com",
  storageBucket: "grapevine-84264.appspot.com",
  messagingSenderId: "209626311092"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('renderTarget'));