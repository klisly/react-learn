var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  IntentAndroid,
  TouchableHighlight,
  Platform
}  = React;
var WINDOW_WIDTH = Dimensions.get('window').width;
var GiftedListView = require('react-native-gifted-listview');
var GiftedSpinner = require('react-native-gifted-spinner');
import { Card, Button, COLOR, TYPO } from 'react-native-material-design';
var ItemDetail = React.createClass({
  /**
   * Will be called when refreshing
   * Should be replaced by your own logic
   * @param {number} page Requested page to fetch
   * @param {function} callback Should pass the rows
   * @param {object} options Inform if first load
   */
  _onFetch(page = 1, callback, options) {
    setTimeout(() => {
      var header = page;
      var rows = {};
      rows[header] = ['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)];
      if (page === 5) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        });
      } else {
        callback(rows);
      }
    }, 1000); // simulating network fetching
  },
  /**
   * When a row is touched
   * @param {object} rowData Row data
   */
  _onPress(rowData) {
    console.log(rowData+' pressed');
  },

  /**
   * Render a row
   * @param {object} rowData Row data
   */
  _renderRowView(rowData) {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor='#c8c7cc'
        onPress={() => this._onPress(rowData)}
      >
        <Text>{rowData}</Text>
      </TouchableHighlight>
    );
  },

  /**
   * Render a row
   * @param {object} rowData Row data
   */
  _renderSectionHeaderView(sectionData, sectionID) {
    if(sectionID == 1){
      return (
          <Image
            style = {styles.header_image}
            source={require('./images/default_item_welcome.jpg')} >
              <View  style = {styles.header_text}>
                <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Welcome</Text>
                <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>React Native Material Design</Text>
              </View>
          </Image>

      );
    } else {
      return this._renderSeparatorView();
    }
  },

  /**
   * Render the refreshable view when waiting for refresh
   * On Android, the view should be touchable to trigger the refreshCallback
   * @param {function} refreshCallback The function to call to refresh the listview
   */
  _renderRefreshableWaitingView(refreshCallback) {
    if (Platform.OS !== 'android') {
      return (
        <View style={styles.refreshableView}>
          <Text style={styles.actionsLabel}>
            ↓
          </Text>
        </View>
      );
    } else {
      return (
        <TouchableHighlight
          underlayColor='#c8c7cc'
          onPress={refreshCallback}
          style={styles.refreshableView}
        >
          <Text style={styles.actionsLabel}>
            ↻
          </Text>
        </TouchableHighlight>
      );
    }
  },

  /**
   * Render the refreshable view when the pull to refresh has been activated
   * @platform ios
   */
  _renderRefreshableWillRefreshView() {
    return (
      <View style={styles.refreshableView}>
        <Text style={styles.actionsLabel}>
          ↻
        </Text>
      </View>
    );
  },

  /**
   * Render the refreshable view when fetching
   */
  _renderRefreshableFetchingView() {
    return (
      <View style={styles.refreshableView}>
        <GiftedSpinner />
      </View>
    );
  },

  /**
   * Render the pagination view when waiting for touch
   * @param {function} paginateCallback The function to call to load more rows
   */
  _renderPaginationWaitingView(paginateCallback) {
    return (
      <TouchableHighlight
        underlayColor='#c8c7cc'
        onPress={paginateCallback}
        style={styles.paginationView}
      >
        <Text style={[styles.actionsLabel, {fontSize: 13}]}>
          Load more
        </Text>
      </TouchableHighlight>
    );
  },

  /**
   * Render the pagination view when fetching
   */
  _renderPaginationFetchigView() {
    return (
      <View style={styles.paginationView}>
        <GiftedSpinner />
      </View>
    );
  },

  /**
   * Render the pagination view when end of list is reached
   */
  _renderPaginationAllLoadedView() {
    return (
      <View style={styles.paginationView}>
        <Text style={styles.actionsLabel}>
          ~
        </Text>
      </View>
    );
  },

  /**
   * Render a view when there is no row to display at the first fetch
   * @param {function} refreshCallback The function to call to refresh the listview
   */
  _renderEmptyView(refreshCallback) {
    return (
      <View style={styles.defaultView}>
        <Text style={styles.defaultViewTitle}>
          Sorry, there is no content to display
        </Text>

        <TouchableHighlight
          underlayColor='#c8c7cc'
          onPress={refreshCallback}
        >
          <Text>
            ↻
          </Text>
        </TouchableHighlight>
      </View>
    );
  },

  /**
   * Render a separator between rows
   */
  _renderSeparatorView() {
    return (
      <View style={styles.separator} />
    );
  },
  render() {
    return (
     <View style={styles.container}>

       <GiftedListView
         rowView={this._renderRowView}
         onFetch={this._onFetch}
         initialListSize={12} // the maximum number of rows displayable without scrolling (height of the listview / height of row)
         firstLoader={true} // display a loader for the first fetching
         pagination={true} // enable infinite scrolling using touch to load more
         paginationFetchigView={this._renderPaginationFetchigView}
         paginationAllLoadedView={this._renderPaginationAllLoadedView}
         paginationWaitingView={this._renderPaginationWaitingView}
         refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
         refreshableViewHeight={50} // correct height is mandatory
         refreshableDistance={40} // the distance to trigger the pull-to-refresh - better to have it lower than refreshableViewHeight
         refreshableFetchingView={this._renderRefreshableFetchingView}
         refreshableWillRefreshView={this._renderRefreshableWillRefreshView}
         refreshableWaitingView={this._renderRefreshableWaitingView}

         emptyView={this._renderEmptyView}

         renderSeparator={this._renderSeparatorView}

         withSections={true} // enable sections
         sectionHeaderView={this._renderSectionHeaderView}

         PullToRefreshViewAndroidProps={{
           colors: ['#fff'],
           progressBackgroundColor: '#003e82',
         }}
       />
     </View>
   );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header_image: {
    flexDirection:"row",
    alignItems:"flex-end",
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH * 0.618,
  },
  header_text: {
    width: WINDOW_WIDTH,
    backgroundColor: '#0000003C',
    paddingTop:12,
    paddingBottom:12,
    paddingLeft:8,
    paddingRight:8
  },
  separator: {
    height: 1,
    backgroundColor: '#CCC'
  },
  refreshableView: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsLabel: {
    fontSize: 20,
    color: '#007aff',
  },
  paginationView: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  defaultView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  defaultViewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  row: {
    padding: 10,
    height: 44,
  },
  header: {
    backgroundColor: '#50a4ff',
    padding: 10,
  },
  headerTitle: {
    color: '#fff',
  },
});
module.exports =  ItemDetail;
