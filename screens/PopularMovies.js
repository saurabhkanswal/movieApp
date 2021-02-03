import React, {useState, useEffect} from 'react';
import { Text, 
  StyleSheet,
  ScrollView,
  View,
  Pressable } from 'react-native';
import Axios from 'axios'
import Movie from '../componets/Movie'
import { Service } from 'axios-middleware';

// Middleware logging message in console
const service = new Service(Axios);

service.register({

  onRequest(config) {
    console.log('Request to API: SUCESS');
    return config;
  },
  onSync(promise) {
    console.log('Sync Done');
    return promise;
  },
  onResponse(response) {
    console.log('Response back from API: SUCCESS');
    return response;
  }
});

console.log('Ready to fetch.');






const key = 'faf981d79c94b75d3c34a1b45c9330b9'
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;




const popularMovies= ({navigation})=> {

const [popularMovies, setPopularMovies] = useState(null)

const fetchDetails = async()=>{
    try {

          const {data} = await Axios.get(URL);
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
            <Pressable  onPress={() => navigation.navigate('Details',{movieid: movieDetail.id})} key={movieDetail.id}>
            <Movie details={movieDetail} key={movieDetail.id}/>
            </Pressable>
          ))}
        </View>
      </View>
      </ScrollView>
    );
  }}

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