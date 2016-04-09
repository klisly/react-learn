// jscs:disable
var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  BackAndroid,
  TouchableOpacity,
  Dimensions,
  View,
}  = React;
var OPTION_INDEX_TANGSHI = 0;
var OPTION_INDEX_SONGCI= 1;
var OPTION_INDEX_YUANQU= 2;
var OPTION_INDEX_USERINFO= 3;
var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

var DrawerScreen = React.createClass( {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.drawer_info_bg}>
          <TouchableOpacity
            style={styles.drawer_info_bg}
            activeOpacity = {1}
            onPress={() => this.props.onHandleOption(OPTION_INDEX_USERINFO)}
            >
            <Image
                style={styles.drawer_avatar}
                source={require('./images/default_avatar.png')}
                >
            </Image>
            <Text style={styles.drawer_nick_name}>
              昵称
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity = {0.8}
          style={[styles.drawer_item_btn,
            {
              backgroundColor:"#35223A"
            }
          ]}
          onPress={ () => this.props.onHandleOption(OPTION_INDEX_TANGSHI)}>
          <Text style={styles.drawer_item_text}>
            唐诗
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity = {0.8}
          style={[styles.drawer_item_btn,
            {
              backgroundColor:"#472B42"
            }
          ]}
          onPress={ () => this.props.onHandleOption(OPTION_INDEX_SONGCI)}>
          <Text style={styles.drawer_item_text}>
            宋词
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity = {0.8}
          style={[styles.drawer_item_btn,
            {
              backgroundColor:"#6B404F"
            }
          ]}
          onPress={ () => this.props.onHandleOption(OPTION_INDEX_YUANQU)}>
          <Text style={styles.drawer_item_text}>
            元曲
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#90645D',
  },
  drawer_info_bg:{
    justifyContent: 'center',
    alignItems: 'center',
    width:WINDOW_WIDTH,
    backgroundColor:"#00a2ed"
  },
  drawer_avatar: {
    height: WINDOW_WIDTH * 1 / 4,
    width:WINDOW_WIDTH * 1 / 4,
    borderRadius: WINDOW_WIDTH * 1 / 8,
    marginBottom:WINDOW_WIDTH * 1 / 48,
    marginTop:WINDOW_WIDTH * 1 / 24
  },
  drawer_nick_name: {
    fontSize: 16,
    flex:1,
    textAlign: 'center',
    color:"white",
    fontStyle:"normal",
    marginBottom:WINDOW_WIDTH * 1 /24,
  },
  drawer_item_btn:{
    paddingTop:WINDOW_WIDTH * 1 / 48,
    paddingBottom:WINDOW_WIDTH * 1 / 48,
    width:WINDOW_WIDTH,
    backgroundColor:"#35223A"
  },
  drawer_item_text: {
    fontSize: 20,
    flex:1,
    textAlign: 'center',
    margin: 10,
    color:"white"
  }
});
module.exports =  DrawerScreen;
