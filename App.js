/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const data = [
  'https://images.unsplash.com/photo-1598026871673-92bd25bdf3ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
  'https://images.unsplash.com/photo-1610124805637-0d40adf7c808?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
  'https://images.unsplash.com/photo-1601742245452-3e7e22f35241?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
  'https://images.unsplash.com/photo-1609930690138-612502ea84b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1609042551767-9e4cc8a3d9f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
  'https://images.unsplash.com/photo-1608191366070-ed804a516a8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1509620627792-e9f7ac3e2f8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
];

const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default () => {
  const scrollY = React.useRef(new Animated.Value(0)).current
  return (
  <View style={{ flex: 1, backgroundColor: '#000' }}>
    <StatusBar hidden />
    <View style={StyleSheet.absoluteFillObject}>
      {data.map((item, index) => {
        const inputRange = [(index - 1) * height, index * height, (index + 1) * height];
        const opacity = scrollY.interpolate({ inputRange, outputRange: [0, 1, 0] })
        return <Animated.Image
         key={`image-${index}`}
            source={{ uri: item }}
            blurRadius={20}
            style={[StyleSheet.absoluteFillObject, { opacity }]}
          />
})}
    </View>
    <Animated.FlatList
      pagingEnabled
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }]
      )}
      // horizontal={true}
      keyExtractor={(_, index) => index.toString()}
      data={data}
      renderItem={({ item }) => (
        <View style={{ height,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowRadius: 20
        }}>
          <Image
            source={{ uri: item }}
            style={{
               height: imageH,
               width: imageW,
               resizeMode: 'cover',
               borderRadius: 20,
              }}
          />
        </View>
      )}
    />
  </View>
)
};
