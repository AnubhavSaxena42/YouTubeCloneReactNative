import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#141414",
    marginTop: StatusBar.currentHeight,
  },
  videoPlayer: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  videoInfoContainer: {
    margin: 10,
  },
  actionText:{
    color:"white",
  },
  actionListContainer:{
    marginVertical:10,
  },
  actionListItem:{
    width:60,
    height:60,
    justifyContent:"space-around",
    alignItems:"center",
  },
  tags:{
      color:'#0094e3',
      fontSize:14,
      fontWeight:'500',
      marginBottom:5,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 10,
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
    fontWeight: "500",
  },
  avatar:{
    width:50,
    height:50,
    borderRadius:25,
  }
});

export default styles;
