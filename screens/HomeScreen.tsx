import React from "react";
import { View, FlatList, StyleSheet } from "react-native"; 
import VideoListItem from "../components/VideoListItem/VideoListItem";
import Videos from '../assets/data/videos.json'
const HomeScreen = (props: any) => {
  return (
    <View>
        <FlatList
          data={Videos}
          renderItem={({item})=>{
            return <VideoListItem video={item}/>
          }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default HomeScreen;
