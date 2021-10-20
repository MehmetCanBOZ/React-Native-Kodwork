import React from 'react'
import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity} from 'react-native'
import HTMLView from 'react-native-htmlview';
import styles from './Details.styles'
import useFetch from '../../hooks/useFetch'
import { API_URL } from '../../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';

const Details = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`${API_URL}/${id}`);
  const favorites = useSelector(favorite => favorite.favoriteList);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#f44336"
        style={{flex: 1, justifyContent: 'center'}}
      />
    );
  }
  const handleFavorite = job => {
    dispatch({type: 'ADD_FAVORITE', payload: {job}});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.locationsTitle}>
          Locations:{' '}
          <Text style={styles.locationText}>
            {data.locations && data.locations.length > 0
              ? data.locations[0].name
              : 'No information'}
          </Text>
        </Text>
        <Text style={styles.LevelTitle}>
          Job Level:{' '}
          <Text style={styles.LevelText}>
            {data.levels && data.levels.length > 0
              ? data.levels[0].name
              : 'No information'}
          </Text>
        </Text>
        <Text style={styles.bodyTitle}>Job Detail </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <HTMLView value={data.contents} stylesheet={styles} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="login" size={25} color="white" style={styles.icon} />
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, favorites.filter(element => element.id === id).length > 0  && styles.buttonDisabled ]}
            onPress={() => handleFavorite(data)}
            disabled={favorites.filter(element => element.id === id).length > 0}
            >
            <Icon name="heart" size={25} color="white" style={styles.icon} />
            <Text style={styles.text}>Favorite</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Details
