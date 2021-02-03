import React from 'react'
import { Text, 
    StyleSheet,
    Image,
    View } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';


const Movie = ({details})=>{
    // console.log(details)
    // console.log(details.poster_path)
    return(
       
        <View style={styles.container}>
            <View>
            <Image
                source={{
                    uri: `http://image.tmdb.org/t/p/w185${details.poster_path}`
                }}
                style = {styles.imageStyle}
            />
            </View>
            <Text style={styles.fontStyle}>{details.original_title}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 300,
        marginBottom: 25
    },
    fontStyle: {
        fontSize: 15,
        color: 'white',
        
      },
    imageStyle: {
        width: 170, 
        height: 250,
        marginBottom: 7
    }
})

export default Movie;