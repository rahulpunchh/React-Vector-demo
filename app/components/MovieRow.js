/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Heart } from "../util/icons";
import Icon from "react-native-vector-icons/FontAwesome";

export default class MovieRow extends Component {
  render() {
    //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
    let url = `https://image.tmdb.org/t/p/w300${this.props.data.poster_path}`;

    return (
      <View style={styles.container}>
        <View style={{ height: 2, backgroundColor: "blue" }} />

        <Image style={{ width: 100, height: 100 }} source={{ uri: url }} />
        <View style={{ flex: 1, flexDirection: "column", marginLeft: 5 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#005678",
                fontSize: 16,
                flex: 1,
                fontWeight: "bold"
              }}
            >
              {this.props.data.original_title}
              <Text
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  color: "#000000",
                  fontSize: 8,
                  textDecorationLine: "none"
                }}
              >
                ( {this.props.data.release_date})

              </Text>
            </Text>

            <Icon
              style={{
                textAlign: "right",
                flexDirection: "row"
              }}
              name="star"
              color="#ff0000"
              backgroundColor="black"
              onPress={this.loginWithFacebook}
            >
              <Text> {this.props.data.vote_average}</Text>
            </Icon>

          </View>
          <Text style={{ color: "#000000", fontSize: 8 }}>
            {this.props.data.overview}
          </Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    margin: 2,
    alignItems: "center"
  }
});
