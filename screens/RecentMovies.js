import React, {useState, useEffect} from 'react';
import { Text, 
  StyleSheet,
  View } from 'react-native';
import Axios from 'axios'
import MovieDetail from '../componets/MovieDetail'


const key = 'faf981d79c94b75d3c34a1b45c9330b9'
const recentMovieURL = `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`;

const RecentMovies= ()=> {
  const [recentMovies, setRecentMovies] = useState(null)

  const fetchDetails = async()=>{
    try {

      const {data} = await Axios.get(recentMovieURL)
      const recentMovies = data;
      setRecentMovies(recentMovies);
    } catch (error) {
      console.warn(error);
    }
  }
  // console.log(recentMovies)
  useEffect(() => {
    fetchDetails();
  }, [])
  // console.log(recentMovies.id)
  if(!recentMovies){
    return(
      <View>
        <Text>LOADING...</Text>
      </View>
    );
  }else{
    return (
      <View style={styles.container}>
        <View>
            <MovieDetail movieid={recentMovies.id}/>
        </View>
      </View>
    );
  }

   
  }

  const styles = StyleSheet.create({
    
      container: {
        flex: 1,
        // width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white'
      },
      
     
      
  })

 

export default RecentMovies;