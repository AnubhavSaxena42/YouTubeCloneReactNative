import React, { useRef } from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";

type VideoPlayerProps = {
  videoURI: string;
  thumbnailURI: string;
};

const VideoPlayer = (props: VideoPlayerProps) => {
  const { videoURI, thumbnailURI } = props;
  /*
  const videoRef = useRef<Video>(null);
  const onRefAssign = (videoElement:Video) => {
    console.warn("video is mounted");
    const playbackObject = videoElement
    const source = {uri:videoURI}
    const initialStatus = {}
    playbackObject.loadAsync()
  };
*/
  console.log(videoURI);
  return (
    <View>
      <Video
        source={{ uri: videoURI }}
        style={{ width: "100%", aspectRatio: 16 / 9 }}
        posterSource={{ uri: thumbnailURI }}
        posterStyle={{ resizeMode: "cover" }}
        useNativeControls
        usePoster={true}
        resizeMode="contain"
      />
    </View>
  );
};

export default VideoPlayer;
