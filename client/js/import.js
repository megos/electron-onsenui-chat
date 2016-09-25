const React    = require('react');
const ReactDOM = require('react-dom');
const ons      = require('onsenui');
const Ons      = require('react-onsenui');
const socket   = require('socket.io-client')('http://localhost:3000');

const USER_KEY = 'user';

let user_name;