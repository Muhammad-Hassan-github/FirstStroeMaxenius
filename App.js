import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { floor } from 'react-native-reanimated';
import { Container, Header, Item, Input, Button, Text } from 'native-base';
import {
  HeaderSearchBar,
  HeaderClassicSearchBar
} from "react-native-header-search-bar";




function HomeScreen({ navigation }) {
  const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

  const [searchOff, setSearch] = useState(false)
  return (

    <>

      <View
        style={{
          backgroundColor: 'blue',
          height: 60,
          alignItems: 'center',
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 15,
          paddingRight: 15
        }}
      >

        <View><IconFontAwesome name="navicon" size={30} color="white" onPress={navigation.toggleDrawer}  style={{marginRight:10}}  /></View>
        {searchOff ?
          <Item>
            <Input placeholder="Search" style={{ flex: 0.63,fontSize:25 }} color="white" placeholderTextColor="white" autoFocus={true} />
          </Item>
          :
          <Text style={{ color: 'white', fontSize: 30 , flex: 0.9, textAlign:"center" }}>Any Title</Text>}
        <View  ><Icon name="search" size={30} color="white" onPress={() => setSearch(true)}  /></View>
        <View  ><Icon name="cart-outline" size={30} color="white" /></View>

        {/* <Icon name="chevron-back" size={30} color="white" /> */}
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    </>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <>
      <View
        style={{
          backgroundColor: '#f50057',
          height: 60,
          alignItems: 'center',
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 10,
          paddingRight: 10
        }}
      >
        <View><IconFontAwesome name="navicon" size={30} color="white" onPress={navigation.toggleDrawer} /></View>
        <Text style={{ color: 'white', fontSize: 30, marginLeft: 40 }}>Header</Text>
        <View style={{ float: "right", marginLeft: 80, }}><Icon name="search" size={30} color="white" /></View>
        <View  ><Icon name="cart-outline" size={30} color="white" /></View>
        {/* <Icon name="chevron-back" size={30} color="white" /> */}
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}