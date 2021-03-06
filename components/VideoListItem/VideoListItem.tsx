import React from "react";
import { View, Text, Image,Pressable, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";
type VideoListItemProps = {
    video:{
        id:string;
        createdAt:string;
        title:string;
        thumbnail:string;
        videoUrl:string;
        duration:number;
        views:number;
        user:{
            name:string;
            image:string;
        },
        
    },
}
const VideoListItem = (props: VideoListItemProps) => {
    const {video} = props;
    const minutes = Math.floor(video.duration/60);
    const seconds = video.duration%60;
    const navigation= useNavigation()
    const openVideoPage =()=>{
      navigation.navigate("VideoScreen")
    
       }
    let viewsString = video.views.toString();
    if(video.views>1000000){
        viewsString=(video.views/1000000).toFixed(1) + 'M'
    } else if(video.views>1000){
        viewsString=(video.views/1000).toFixed(1) + 'K'
    }
    return (
    <Pressable onPress={openVideoPage} style={styles.videoCard}>
      <View>
        <Image
          style={styles.thumbnail}
          source={{
            uri:video.thumbnail ,
          }}
        />
        <View style={styles.durationContainer}>
          <Text style={styles.durationText}>{minutes}:{seconds<10?'0':''}{seconds}</Text>
        </View>
      </View>
      <View style={styles.titleRow}>
        <Image
          style={styles.avatar}
          source={{
            uri: video.user.image,
          }}
        />
        <View style={styles.middleContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>{video.user.name}  {viewsString}  {video.createdAt}</Text>
        </View>
        <Entypo name="dots-three-vertical" size={18} color="white" />
      </View>
    </Pressable>
  );
};


export default VideoListItem;
