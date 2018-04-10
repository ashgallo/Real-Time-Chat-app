import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { addMessage } from '../actions/messages';
import ChatMessage from './ChatMessage';
import { Segment, Header, Form, TextArea, Button } from 'semantic-ui-react';
