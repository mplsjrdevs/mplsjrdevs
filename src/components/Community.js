//import React from 'react';
import React, { Component } from 'react';
import { Button, Collapse } from '@blueprintjs/core';
import { Dimensions, FlatList, View, Text } from 'react-native';

const data = [
  { id: 'a', value: 'A' },
  { id: 'b', value: 'B' },
  { id: 'c', value: 'C' },
  { id: 'd', value: 'D' },
  { id: 'e', value: 'E' },
  { id: 'f', value: 'F' }
];
const numColumns = 3;
const size = Dimensions.get('window').width / numColumns;
const styles = StyleSheet.create({
  itemContainer: {
    width: size,
    height: size
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: 'lightblue'
  }
});

export class Community extends React.Component {
  state = {
    isOpen: false
  };
  render() {
    return function Grid(props) {
      return (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item.value}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={numColumns}
        />
      );
    };
  }
}
export default Community;
