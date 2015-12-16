/**
 * Created by deepaksisodiya on 16/12/15.
 */


'use strict';


import { store } from './../redux/store';

import { getProfile } from './../redux/profile';

var React = require('react-native');
var {
  Text,
  View,
  TouchableHighlight,
  } = React;

var ProfileButton = React.createClass({

  render: function() {
    return (
      <View>
        <TouchableHighlight onPress={ this.getProfileData }>
          <Text>Get Profile</Text>
        </TouchableHighlight>
      </View>
    );
  },

  getProfileData: function() {
    store.dispatch(getProfile());
  }

});

module.exports = ProfileButton;