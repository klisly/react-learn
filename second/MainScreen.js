var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Button,
  Text,
  DrawerLayoutAndroid,
  Navigator,
  BackAndroid,
  View,
  Image,
  ListView,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
}  = React;

var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;
var tweens = require('./tweens');
var OPTION_INDEX_NONE = -1;
var OPTION_INDEX_TANGSHI = 0;
var OPTION_INDEX_SONGCI= 1;
var OPTION_INDEX_YUANQU= 2;
var OPTION_INDEX_USERINFO= 3;

var GiftedListView = require('react-native-gifted-listview');
var DrawerScreen = require('./DrawerScreen');
var ItemDetail = require('./ItemDetail');
var UserDetail = require('./UserDetail');
var _navigator;
BackAndroid.addEventListener('hardwareBackPress', function () {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});
var MainScreen = React.createClass({

  getInitialState: function() {
    return {
      title:'精选',
      index:OPTION_INDEX_TANGSHI,
    };
  },
  openDrawer: function() {
    this.drawer.openDrawer();
  },
  closeDrawer: function() {
    this.drawer.closeDrawer();
  },
  onHandleDrawerOption: function(type){
    if(type === OPTION_INDEX_NONE){
      return;
    }
    var title = "精选";
    if(type === OPTION_INDEX_TANGSHI){
      title = "唐诗";
    } else if(type === OPTION_INDEX_SONGCI){
      title = "宋词";
    } else if(type === OPTION_INDEX_YUANQU){
      title = "元曲";
    } else if(type === OPTION_INDEX_USERINFO){
      title = "个人主页";
    }
    this.setState(
      {
        index:type,
        title:title
      }
    );
    this.refs.navigator.push({index:type});
    this.closeDrawer();
  },
  onClickMore: function() {
    this.drawer.openDrawer();
  },
  renderScene:function(route, navigator) {
    if (route.index === OPTION_INDEX_USERINFO) {
      return (
        <UserDetail
          style={styles.container}
          navigator={navigator} />
      );
    } else if (route.index === OPTION_INDEX_TANGSHI
      || route.index === OPTION_INDEX_SONGCI
      || route.index === OPTION_INDEX_YUANQU
    ) {
      return (
        <ItemDetail
          navigator={navigator}
          index = {route.index} />
      );
    }
  },
  componentDidMount:function() {
   var navigator = this.refs.navigator;
   BackAndroid.addEventListener('hardwareBackPress', function() {
       if (navigator && navigator.getCurrentRoutes().length > 1) {
         navigator.pop();
         return true;
       }
       return false;
   });
 },
 componentWillUnmount:function() {
   BackAndroid.removeEventListener('hardwareBackPress');
 },
  render: function() {
      var drawerView = <DrawerScreen onHandleOption={this.onHandleDrawerOption}/>;
      var initialRoute = {index : OPTION_INDEX_TANGSHI};

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
            <Navigator
                ref="navigator"
                initialRoute={initialRoute}
                configureScene={(route) => {
                  if (route.sceneConfig) {
                    return route.sceneConfig;
                  }
                  return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={this.renderScene}
            />

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
    height: 26,
    width: 26,
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
    fontWeight:'400'
  },
  toolbar_extra: {
    flex:1
  },
  drawer: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  row: {
      height:60,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  list: {
      alignSelf:'stretch'
  },
  separator: {
      height: 1,
      backgroundColor: '#CCC'
  },
});
module.exports =  MainScreen;
