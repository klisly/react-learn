var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Button,
  Text,
  View
}  = React;

var tweens = require('./tweens');

class MainScreen extends Component {

  render() {
    return (
     
          <View style={styles.container}>
            <Text style={styles.drawer}>
              Welcome to MainScreen!
            </Text>
          
          </View>
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
  drawer: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
module.exports =  MainScreen;
