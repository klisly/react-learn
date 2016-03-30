'use strict'
import React, {
    AsyncStorage,
    Image,
    StyleSheet,
    Text,
    View,
    Component,
    Animated,
    Dimensions,
} from 'react-native';

var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;
var ANIMATION_INTERVAL = 1000;

class SplashScreen extends Component {
 
 constructor(props: any) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(       // Uses easing functions
      this.state.fadeAnim, // The value to drive
      {
        toValue: 1,        // Target
        duration: ANIMATION_INTERVAL,    // Configuration
      }
    ).start();             // Don't forget start!
  }

  render() {
    return (
      <Animated.Image
          pointerEvents="none"
          style={[
            {
              width:WINDOW_WIDTH,
              height:WINDOW_HEIGHT,
              opacity: this.state.fadeAnim,
            }, styles.container]}
          source={require('./images/splash.jpg')}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  splash: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
module.exports =  SplashScreen;