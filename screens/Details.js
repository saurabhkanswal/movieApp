import React from 'react'
import {View} from 'react-native'
import MovieDetail from '../componets/MovieDetail'

const Details = ({route})=>{
    return(
        <View>
            <MovieDetail movieid={route.params.movieid}/>
        </View>
    );
}

export default Details;