import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import products from '../data/products';

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer} key={item.id}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    aspectRatio: 1,
  },

  itemContainer: {
    width: '50%',
    padding: 1,
  },
});

export default ProductsScreen;
