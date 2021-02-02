import React, {useEffect, useState} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native'
import Axios from 'axios'

const key = 'faf981d79c94b75d3c34a1b45c9330b9'

const MovieDetail = (props)=>{
    const getMovieURL = `https://api.themoviedb.org/3/movie/${props.movieid}?api_key=${key}&language=en-US` 
    const [movieDetail, setMovieDetail] = useState(null);
    const fetchDetails = async()=>{
        try {
            const {data} = await Axios.get(getMovieURL)
            const movieDetail = data;
            setMovieDetail(movieDetail);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDetails();
      }, [])
    //  console.log(movieDetail.adult)
      if(!movieDetail){
          return(
              <View>
              <Text>LOADING..</Text>
              </View>
          );
      }else{
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                   <Image
                   source={movieDetail.poster_path
                    ? {uri: `https://image.tmdb.org/t/p/w185${movieDetail.poster_path}`}
                    : {uri: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80'}
                    }
                    style={styles.imageStyle}
                   />
                   <Text
                    style={styles.titleStyle}
                   >{movieDetail.original_title}</Text>
                </View>
                <View style={styles.body}>
                   <Text style={styles.bodyTitleStyle}>Status:  <Text style={styles.bodyInfoStyle}>{movieDetail.status}</Text></Text>
                   <Text style={styles.bodyTitleStyle}>Adult:  <Text style={styles.bodyInfoStyle}>{movieDetail.adult ? 'yes, it is a adult movie' : 'Not a Adult Movie'}</Text></Text>
                   <Text style={styles.bodyTitleStyle}>Release Date:  <Text style={styles.bodyInfoStyle}>{movieDetail.release_date ? movieDetail.release_date : 'Not avialable'}</Text></Text>
                </View>
            </View>
        );
      }
    
    
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#121212'
    },
    header: {
       alignItems: 'center',
       justifyContent: 'center'
    },
    imageStyle: {
        width: 180,
        height: 250,
        marginTop: 150
    },
    titleStyle: {
        fontSize: 22,
        fontWeight: "bold",
        color: 'white',
        marginTop: 15,
        textAlign: 'center'
    },

    body: {
        marginLeft: 50,
        marginTop: 60
    },  

    bodyTitleStyle: {
        fontSize: 20,
        color: '#b3b3b3'
    },
    bodyInfoStyle: {
        color: '#535353'
    }
})

export default MovieDetail;