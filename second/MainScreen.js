var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Button,
  Text,
  DrawerLayoutAndroid,
  View,
  Dimensions,
  TouchableOpacity,
}  = React;

var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;
var tweens = require('./tweens');
var OPTION_INDEX_TANGSHI = 0;
var OPTION_INDEX_SONGCI= 1;
var OPTION_INDEX_YUANQU= 2;
var DrawerScreen = require('./DrawerScreen');

var MainScreen = React.createClass({
  openDrawer: function() {
    this.drawer.openDrawer();
  },
  closeDrawer: function() {
    this.drawer.closeDrawer();
  },
  onHandleDrawerOption: function(type){
    alert(type);
    this.closeDrawer();
  },
  render: function() {
    var drawerView = <DrawerScreen onHandleOption={this.onHandleDrawerOption}/>;
    return (
       <DrawerLayoutAndroid
          drawerWidth={WINDOW_WIDTH * 2 / 3}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          ref={(drawer) => {this.drawer = drawer}}
          renderNavigationView={() => drawerView}
          >

        <View style={styles.container}>
        <TouchableOpacity onPress={this.openDrawer}>
          <Text style={styles.drawer}>
            打开抽屉
          </Text>
        </TouchableOpacity>
          <Text style={styles.drawer}>
            Welcome to MainScreen!
          </Text>
        
        </View>
      </DrawerLayoutAndroid>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  drawer: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
module.exports =  MainScreen;
