import React from "react";
import { View, Image, Text } from "react-native";
interface VideoCommentProps {
  comment: {
    id: string;
    createdAt: string;
    comment: string;
    likes: number;
    dislikes: number;
    replies: number;
    user: {
        name:string;
        image:string;
    }
  };
}
const VideoComment = ({ comment }: VideoCommentProps) => {
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Image
          style={{ width: 35, height: 35, borderRadius: 17.5 }}
          source={{ uri: comment.user.image }}
        />
        <Text style={{ marginLeft: 10, color: "lightgray" }}>
          {comment.comment}
        </Text>
      </View>
    </View>
  );
};

export default VideoComment;
