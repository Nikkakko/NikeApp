import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';

import { ProductDetailsScreen, ProductsScreen, ShoppingCart } from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from './features/cartSlice';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: 'white' },
        }}
      >
        <Stack.Screen
          name='Products'
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                style={{ flexDirection: 'row' }}
              >
                <FontAwesome5 name='shopping-cart' size={18} color='gray' />
                <Text style={{ marginLeft: 5, fontWeight: '500' }}>
                  {numberOfItems}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name='Product Details'
          component={ProductDetailsScreen}
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen name='Cart' component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Navigation;
