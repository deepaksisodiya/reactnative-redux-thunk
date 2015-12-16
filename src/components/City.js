/**
 * Created by deepaksisodiya on 16/12/15.
 */

'use strict';

var React = require('react-native');
var {
  Text,
  View,
  } = React;

var City = React.createClass({
  render: function() {
    return (
      <View>
        <Text>{ this.props.value }</Text>
      </View>
    );
  }
});

module.exports = City;