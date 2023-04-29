import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../features/cartSlice';

const ProductDetailsScreen = () => {
  const { selectedProduct } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const product = selectedProduct;
  const width = useWindowDimensions().width;

  const addToCart = () => {
    dispatch(
      addCartItem({
        product,
      })
    );
  };

  return (
    <View>
      {/* Image Carousel */}
      <ScrollView>
        <FlatList
          data={product?.images}
          renderItem={({ item }) => (
            <Image
              style={{
                width: width,
                aspectRatio: 1,
              }}
              source={{ uri: item }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View
          style={{
            padding: 20,
          }}
        >
          {/* Title */}
          <Text style={styles.title}>{product?.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product?.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product?.description}</Text>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },

  button: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 30,
    width: '90%',
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

export default ProductDetailsScreen;
