/**
 * Created by deepaksisodiya on 16/12/15.
 */


'use strict';

import { store } from './../redux/store';

var Name = require('./../components/Name');
var City = require('./../components/City');
var React = require('react-native');
var {
  View,
  } = React;

var CityName = React.createClass({

  getInitialState: function () {
    return store.getState().profile;
  },

  componentDidMount: function () {
    store.subscribe(() => {
      console.log(store.getState());
      this.setState({
        city: store.getState().profile.city,
        name: store.getState().profile.name
      });
    });
  },

  render: function() {
    return (
      <View>
        <Name value={ this.state.name } />
        <City value={ this.state.city } />
      </View>
    );
  }
});

module.exports = CityName;