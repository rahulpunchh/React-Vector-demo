/**
 * Created by Rahul Purohit on 4/22/2017.
 AIzaSyBy2kEoffwyt3KkS6wKoAa4Xox1pbrmaj4
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ToastAndroid,
  TouchableHighlight,
  Image,
  ListView
} from "react-native";
import { SearchBar } from "react-native-elements";
import axios from "axios";
import MovieRow from "./MovieRow";
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.array = [];
    this.state = {
      rower: this.ds.cloneWithRows(this.array)
    };
  }

  render() {
    var instance = axios.create({
      baseURL: "https://api.themoviedb.org/3/",
      timeout: 1000
    });

    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require("../util/icons/app_bg.png")}
          style={{ flex: 0.1, width: 360 }}
        >
          <View style={styles.TopHeader}>
            <Text style={{ color: "white" }}>My Movies APP</Text>

          </View>
          <View style={{ justifyContent: "flex-start", flex: 0.1, height: 64 }}>
            <SearchBar
              round
              loadingIcon={{ color: "#86939e", padding: 3 }}
              onChangeText={text => {
                instance
                  .get(
                    `/search/movie?api_key=3ac737d856e742490f8cde0ab4d3c6b2&include_adult=false&query=${text}`
                  )
                  .then(response => {
                    this.setState({
                      rower: this.ds.cloneWithRows(response.data.results)
                    });
                  })
                  .catch(function(error) {
                    console.warn(error);
                  });
              }}
              placeholder="Type Here..."
            />
          </View>

          <ListView
            style={{ flex: 0.9, backgroundColor: "red", marginTop: 10 }}
            dataSource={this.state.rower}
            renderRow={rowData => <MovieRow data={rowData} />}
          />
        </Image>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  TopHeader: {
    backgroundColor: "#663a2a",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 64
  }
});
