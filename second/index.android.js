/**
 * Android app enter
 */
var React = require('react-native');
var {
    AppRegistry,
    Component,
    StyleSheet,
    Navigator,
    BackAndroid,
    Text,
    View
    }  = React;

var TimerMixin = require('react-timer-mixin');
var SplashScreen = require('./SplashScreen');
var MainScreen = require('./MainScreen');
var SubScreen = require('./SubScreen');

var _navigator;
var SPLASH_INTERVAL = 3000;
BackAndroid.addEventListener('hardwareBackPress', function () {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});
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

    renderScene(route, navigationOperations, onComponentRef) {
        _navigator = navigationOperations;
        if (route.name === 'home') {
            return (
                <View style={styles.container}>
                    <MainScreen navigator={navigationOperations}/>
                </View>
            );
        } else if (route.name === 'story') {
            return (
                <View style={styles.container}>
                    <SubScreen
                        style={{flex: 1}}
                        navigator={navigationOperations}
                        story={route.story}/>
                </View>
            );
        }
        
    }

    render() {
        if (this.state.splashed) {
            var initialRoute = {name: 'home'};
            return (
                <Navigator
                    style={styles.container}
                    initialRoute={initialRoute}
                    configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                    renderScene={this.renderScene}
                />
            );
        } else {
            return (
                <SplashScreen />
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
