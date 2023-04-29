import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../features/productsSlice';

const ProductsScreen = ({ navigation }) => {
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          style={styles.itemContainer}
          key={item.id}
          onPress={() => {
            //dispatch action here
            dispatch(setSelectedProduct(item.id));
            navigation.navigate('Product Details');
          }}
        >
          <Image style={styles.image} source={{ uri: item.image }} />
        </Pressable>
      )}
      numColumns={2}
    />
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
