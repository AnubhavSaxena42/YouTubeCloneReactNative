import React from 'react'
import { View, Text } from 'react-native'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import comments from '../../assets/data/comments.json'
import VideoComment from '../VideoComment/VideoComment'
const VideoComments = () => {
    return (
        <View style={{backgroundColor:'#141414', flex:1}}>
            <BottomSheetFlatList
                data={comments}
                renderItem={(item)=>{
                    return <VideoComment comment={item.item}/>
                }}
            />
        </View>
    )
}

export default VideoComments
