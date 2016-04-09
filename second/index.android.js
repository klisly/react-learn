/**
 * Android app enter
 */
var React = require('react-native');
var {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
    }  = React;

var TimerMixin = require('react-timer-mixin');
var SplashScreen = require('./SplashScreen');
var MainScreen = require('./MainScreen');

var SPLASH_INTERVAL = 1000;

class second extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: '',
            splashed: false,
            headers: '',
            contentSize: 1,
            downloaded: 0,
        };
    }

    onSplashDone() {

    }

    componentDidMount() {
        setTimeout(
            () => {
                this.setState({splashed: true});
            },
            SPLASH_INTERVAL
        );
    }

    render() {
        if (this.state.splashed) {
            return (
              <View style={styles.container}>
                  <MainScreen />
              </View>
            );
        } else {
            return (
              <View style={styles.container}>
                <SplashScreen />
              </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('second', () => second);
