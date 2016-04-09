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
var drawer_width = WINDOW_WIDTH * 4 / 5;
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
          activeOpacity = {1}
          style={styles.drawer_item_btn}
          onPress={ () => this.props.onHandleOption(OPTION_INDEX_TANGSHI)}>
          <Text style={styles.drawer_item_text}>
            唐诗
          </Text>
          <View style = {styles.space_extra}/>
          <Image
              style={styles.drawer_item_arrow}
              source={require('./images/ic_right_arrow.png')}
              >
          </Image>
        </TouchableOpacity>
          <TouchableOpacity
            activeOpacity = {1}
            style={styles.drawer_item_btn}
            onPress={ () => this.props.onHandleOption(OPTION_INDEX_SONGCI)}>
            <Text style={styles.drawer_item_text}>
              宋词
            </Text>
            <View style = {styles.space_extra}/>
            <Image
                style={styles.drawer_item_arrow}
                source={require('./images/ic_right_arrow.png')}
                >
            </Image>
          </TouchableOpacity>
        <TouchableOpacity
          activeOpacity = {1}
          style={styles.drawer_item_btn}
          onPress={ () => this.props.onHandleOption(OPTION_INDEX_YUANQU)}>
          <Text style={styles.drawer_item_text}>
            元曲
          </Text>
          <View style = {styles.space_extra}/>
          <Image
              style={styles.drawer_item_arrow}
              source={require('./images/ic_right_arrow.png')}
              >
          </Image>
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
    backgroundColor: '#FAFAFA',
  },
  drawer_info_bg:{
    justifyContent: 'center',
    alignItems: 'center',
    width:drawer_width,
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
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    width:drawer_width,
    height: 48,
    paddingLeft:12,
    paddingRight:24,
    backgroundColor:"#FAFAFA"
  },
  drawer_item_text: {
    fontSize: 20,
    textAlign: 'center',
    color:"black",
    marginTop:8,
    marginBottom:8,
    marginLeft:8,
    marginRight:8
  },
  drawer_item_arrow: {
    width:12,
    height:12,
    marginTop:8,
    marginBottom:8,
    marginLeft:8,
    marginRight:8
  },
  space_extra: {
    flex:1
  },
});
module.exports =  DrawerScreen;
