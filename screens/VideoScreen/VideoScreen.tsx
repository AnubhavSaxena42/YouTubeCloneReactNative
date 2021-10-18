import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Image,
  Text,
  FlatList,
} from "react-native";
import video from "../../assets/data/video.json";
import styles from "./styles";
import Videos from "../../assets/data/videos.json";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoListItem from "../../components/VideoListItem/VideoListItem";
const VideoScreen = () => {
  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views / 1000000).toFixed(1) + "M";
  } else if (video.views > 1000) {
    viewsString = (video.views / 1000).toFixed(1) + "K";
  }
  return (
    <View style={styles.container}>
      <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail}/>
      <View style={styles.videoInfoContainer}>
        <Text style={styles.tags}>#100daysofcode #reactnative #letsgoo</Text>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.subtitle}>
          {video.user.name} {viewsString} {video.createdAt}
        </Text>
      </View>
      <View style={styles.actionListContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.actionListItem}>
            <AntDesign name="like2" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.likes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="dislike2" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="export" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "#3d3d3d",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          paddingVertical: 15,
        }}
      >
        <Image style={styles.avatar} source={{ uri: video.user.image }} />
        <View style={{ marginHorizontal: 10, flex: 1 }}>
          <Text style={{ color: "lightgray", fontSize: 18 }}>
            {video.user.name}
          </Text>
          <Text style={{ color: "lightgray", fontSize: 18 }}>
            {video.user.subscribers} subscribers
          </Text>
        </View>
        <Text
          style={{
            color: "red",
            fontSize: 20,
            fontWeight: "bold",
            paddingRight: 10,
          }}
        >
          SUBSCRIBE
        </Text>
      </View>
      {/*comment component*/}
      <View style={{ padding: 10 }}>
        <Text style={{ color: "white" }}>Comments 666</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Image
            style={{ width: 35, height: 35, borderRadius: 17.5 }}
            source={{ uri: video.user.image }}
          />
          <Text style={{ marginLeft: 10, color: "lightgray" }}>
            Hey tech twitter, I'd love to share what I learn and grow with all
            of you together!
          </Text>
        </View>
      </View>
    </View>
  );
};

const VideoScreenWithRecommendations = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => {
          return <VideoScreen />;
        }}
        data={Videos}
        renderItem={({ item }) => {
          return <VideoListItem video={item} />;
        }}
      />
    </SafeAreaView>
  );
};
export default VideoScreenWithRecommendations;
