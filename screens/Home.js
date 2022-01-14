import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {COLORS, icons, FONTS, SIZES, images} from '../constants';

const ScrollableCard = ({navigation, productLists}) => {
  const renderCard = ({item}) => (
    <TouchableOpacity
      style={{marginLeft: SIZES.padding}}
      onPress={() => navigation.navigate('ItemDetail', {item})}>
      <View style={{width: SIZES.width / 2}}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: SIZES.height * 0.5,
            borderRadius: SIZES.radius,
            marginTop: SIZES.base,
          }}
        />
      </View>
      <View
        style={{position: 'absolute', top: '5%', left: '10%', right: '10%'}}>
        <Text style={{color: COLORS.lightGray2, ...FONTS.h3}}>Furniture</Text>
        <Text style={{color: COLORS.white, ...FONTS.h2, marginTop: SIZES.base}}>
          {item.productName}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          borderRadius: 10,
          backgroundColor: COLORS.transparentLightGray,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        <Text style={{...FONTS.h3}}>$ {item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={productLists}
        renderItem={renderCard}
        keyExtractor={item => item.productId.toString()}
      />
    </View>
  );
};

const ScrollableTab = ({tabList, selectedTab, onPress}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{marginHorizontal: SIZES.padding}}
        onPress={() => onPress(item)}>
        <Text style={{color: COLORS.secondary, ...FONTS.body2}}>
          {item.name}
        </Text>

        {selectedTab.id === item.id && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 1,
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: COLORS.blue,
              }}></View>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const Home = () => {
  const navigation = useNavigation();
  const [tabs, setTabs] = useState([
    {
      id: 0,
      name: 'Chair',
      title: 'chairs',
      productLists: [
        {
          productId: 1,
          productName: 'Chair Green Color',
          price: 10.0,
          image: images.greenChair,
        },
        {
          productId: 2,
          productName: 'Chair Peach Color',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 3,
          productName: 'Chair White Color',
          price: 10.0,
          image: images.whiteChair,
        },
      ],
    },
    {
      id: 1,
      name: 'Cupboard',
      title: 'cupboards',
      productLists: [
        {
          productId: 4,
          productName: 'Product 4',
          price: 10.0,
          image: images.greenChair,
        },
        {
          productId: 5,
          productName: 'Product 5',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 6,
          productName: 'Product 6',
          price: 10.0,
          image: images.whiteChair,
        },
      ],
    },
    {
      id: 2,
      name: 'Table',
      title: 'tables',
      productLists: [
        {
          productId: 7,
          productName: `Product 7`,
          price: 10.0,
          image: images.greenChair,
        },
        {
          productId: 8,
          productName: `Product 8`,
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 9,
          productName: `Product 9`,
          price: 10.0,
          image: images.whiteChair,
        },
      ],
    },
    {
      id: 3,
      name: 'Accessories',
      title: 'accessories',
      productLists: [
        {
          productId: 10,
          productName: `Product 10`,
          price: 10.0,
          image: images.greenChair,
        },
        {
          productId: 11,
          productName: `Product 11`,
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 12,
          productName: `Product 12`,
          price: 10.0,
          image: images.whiteChair,
        },
      ],
    },
  ]);

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const renderTitle = title => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
        }}>
        <Text
          style={{
            color: COLORS.black,
            ...FONTS.largeTitle,
            fontWeight: '200',
          }}>
          Colection of
        </Text>
        <Text
          style={{
            color: COLORS.black,
            ...FONTS.largeTitle,
            fontWeight: '200',
          }}>
          {title}
        </Text>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={{paddingHorizontal: SIZES.padding}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{flex: 1, alignItems: 'flex-start'}}
            onPress={() => console.log('pressed')}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, alignItems: 'flex-end'}}
            onPress={() => console.log('pressed')}>
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderPromotionCard = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: '70%',
          marginHorizontal: SIZES.padding,
          padding: SIZES.radius,
          backgroundColor: COLORS.white,
          borderRadius: 20,
          marginBottom: SIZES.padding,
          ...styles.shadow,
        }}>
        <View
          style={{
            width: 50,
            alignItems: 'center',
            backgroundColor: COLORS.lightGray2,
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Image
            source={images.sofa}
            resizeMode="contain"
            style={{width: '60%', height: '60%'}}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.h2}}>Special Offer</Text>
          <Text style={{...FONTS.body3}}>Adding to your cart</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.radius,
          }}>
          <TouchableOpacity
            onPress={() => console.log('pressed')}
            style={{
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
              height: '70%',
              width: 40,
              borderRadius: 10,
            }}>
            <Image source={icons.chevron} style={{width: 20, height: 20}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderTitle(selectedTab.name)}
      <ScrollableTab
        tabList={tabs}
        selectedTab={selectedTab}
        onPress={item => setSelectedTab(item)}
      />
      <View>
        <ScrollableCard
          navigation={navigation}
          productLists={selectedTab.productLists}
        />
      </View>
      {/* Footer */}
      <View
        style={{
          maxHeight: '20%',
          height: '20%',
          justifyContent: 'flex-end',
        }}>
        {renderPromotionCard()}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.37,
    shadowRadius: 5.65,
    elevation: 9,
  },
});
