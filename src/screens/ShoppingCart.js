import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';
import ShoppingCartTotals from '../components/ShoppingCartTotals';
import { SafeAreaView } from 'react-native-safe-area-context';

const ShoppingCart = () => {
  const checkOut = () => {};
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <CartListItem cartItem={item} key={item.id} />
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={ShoppingCartTotals}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderTopWidth: 1,
    padding: 20,
  },

  button: {
    width: '80%',
    backgroundColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default ShoppingCart;
