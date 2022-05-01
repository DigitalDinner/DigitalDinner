import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Main from './Components/Main';
import Cart from './Components/Cart';
import data from './assets/Data';
import Cart from './Components/Cart';

export default function App() {
  const { dishes } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (dish) => {
    const exist = cartItems.find((itemId) => itemId.id === dish.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
        itemId.id === dish.id ? { ...exist, qty: exist.qty + 1 } : itemId
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((itemId) => itemId.id === dish.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((itemId) => itemId.id !== dish.id));
    } else {
      setCartItems(
        cartItems.map((itemId) =>
        itemId.id === dish.id ? { ...exist, qty: exist.qty - 1 } : itemId
        )
      );
    }
  };
  return (
    <View style={styles.container}>
      <div className="App">
        <Header countCartItems={cartItems.length}></Header>
        <div className="row">
          <Main dishes={dishes} onAdd={onAdd}></Main>
          <Cart
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            ></Cart>
          </div>
        </div>
    </View>
  );
};
