var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Button,
  Text,
  DrawerLayoutAndroid,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
}  = React;
var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;
var tweens = require('./tweens');
var OPTION_INDEX_DRAWER= -1;
var OPTION_INDEX_TANGSHI = 0;
var OPTION_INDEX_SONGCI= 1;
var OPTION_INDEX_YUANQU= 2;

var DrawerScreen = require('./DrawerScreen');
var SubScreen = require('./SubScreen');

var toolbarActions = [
  {title: 'Create', icon: require('./images/ic_menu_white.png'), show: 'always'},
  {title: 'Filter'},
  {title: 'Settings', icon: require('./images/ic_menu_white.png'), show: 'always'},
];

var MainScreen = React.createClass({
  statics: {
    title: '指尖诗社',
    description: '指尖诗社为诗词爱好者保留的自留地！！！'
  },
  getInitialState: function() {
    return {
      title:'指尖诗社',
      actionText: '指尖诗社',
      toolbarSwitch: false,
      colorProps: {
        titleColor: '#3b5998',
        subtitleColor: '#6a7180',
      },
    };
  },
  openDrawer: function() {
    this.drawer.openDrawer();
  },
  closeDrawer: function() {
    this.drawer.closeDrawer();
  },
  onHandleDrawerOption: function(type){
    this.setState({index:type});
    this.closeDrawer();
  },
  onClickMore: function() {
    this.drawer.openDrawer();
  },
  renderScene(route, navigationOperations, onComponentRef) {
      _navigator = navigationOperations;
      if (route.index === OPTION_INDEX_TANGSHI) {
        alert("click index OPTION_INDEX_TANGSHI ");
          return (
            <View style={styles.container}>
              <SubScreen navigator={navigationOperations}/>
            </View>
          );
      } else if (route.index === OPTION_INDEX_SONGCI) {
        alert("click index OPTION_INDEX_SONGCI ");
          return (
              <View style={styles.container}>
                <Text style={styles.drawer}>
                  {this.state.title}
                </Text>
              </View>
          );
      } else if (route.index === OPTION_INDEX_DRAWER) {
        alert("click index OPTION_INDEX_DRAWER ");
          return (
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
          );
      }

  },
  render: function() {
      var drawerView = <DrawerScreen onHandleOption={this.onHandleDrawerOption}/>;
      var initialRoute = {index : this.state.index };

      return (
         <DrawerLayoutAndroid
            drawerWidth={WINDOW_WIDTH * 2 / 3}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            ref={(drawer) => {this.drawer = drawer}}
            renderNavigationView={() => drawerView}
            >
            <View style={styles.toolbar}>
              <TouchableOpacity onPress={this.openDrawer}>
                <Image
                  style={styles.toolbar_menu_navicon}
                  source={require('./images/ic_menu_white.png')} />
              </TouchableOpacity>

              <Text style={styles.toolbar_menu_title}>
                  {this.state.title}
              </Text>
              <View style = {styles.toolbar_extra}/>
              <TouchableOpacity onPress={this.onClickMore}>
                <Image
                  style={styles.toolbar_menu_action}
                  source={require('./images/ic_more_white.png')} />
              </TouchableOpacity>
            </View>


        </DrawerLayoutAndroid>
      );
  }
});

const styles = StyleSheet.create({
  nav_container: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00a2ed',
    height: 48,
  },
  toolbar_menu_navicon: {
    backgroundColor: '#00a2ed',
    height: 32,
    width: 32,
    marginTop:8,
    marginBottom:8,
    marginLeft:8,
    marginRight:8
  },
  toolbar_menu_action: {
    backgroundColor: '#00a2ed',
    height: 32,
    width: 32,
    marginTop:8,
    marginBottom:8,
    marginLeft:8,
    marginRight:8
  },
  toolbar_menu_title: {
    fontSize: 20,
    textAlign: 'center',
    color:'white',
    marginLeft:4,
    fontWeight:'800'
  },
  toolbar_extra: {
    flex:1
  },
  drawer: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
module.exports =  MainScreen;
