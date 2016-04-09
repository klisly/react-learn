var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
}  = React;

class ItemDetail extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.splash}>
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
module.exports =  ItemDetail;
