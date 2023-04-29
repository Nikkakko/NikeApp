import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';
import ShoppingCartTotals from '../components/ShoppingCartTotals';

const ShoppingCart = () => {
  const checkOut = () => {};
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        keyExtractor={item => item.id}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable onPress={checkOut} style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default ShoppingCart;
