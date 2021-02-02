import React, {useState, useEffect} from 'react';
import { Text, 
  StyleSheet,
  ScrollView,
  View,
  Pressable } from 'react-native';
import Axios from 'axios'
import Movie from '../componets/Movie'

const key = 'faf981d79c94b75d3c34a1b45c9330b9'
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;

const popularMovies= ({navigation})=> {
const [popularMovies, setPopularMovies] = useState(null)

  const fetchDetails = async()=>{
    try {

          const {data} = await Axios.get(URL)
          const popularMovies = data;
          setPopularMovies(popularMovies);
          
    } catch (error) {
      console.warn(error);
    }
  }
  // console.log(recentMovies.results)
  useEffect(() => {
    fetchDetails();
  }, [])

  if(!popularMovies){
    return(
      <View>
        <Text>LOADING...</Text>
      </View>
    );
  }else{
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.movieContainer}>
          {popularMovies.results.map((movieDetail)=>(
            <View key={movieDetail.id}>
            <Pressable  onPress={() => navigation.navigate('Details',{movieid: movieDetail.id})}>
            <Movie details={movieDetail} key={movieDetail.id}/>
            </Pressable>
            </View>
          ))}
        </View>
      </View>
      </ScrollView>
    );
  }

   
  }

  const styles = StyleSheet.create({
    
      container: {
        flex: 1,
        backgroundColor: '#121212',
      },

      movieContainer: {
        width: '107%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: 30
      },

  })

 

export default popularMovies;