var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
}  = React;

class UserDetail extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.splash}>
          UserDetail
          {this.props.index}
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
  splash: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
module.exports =  UserDetail;
