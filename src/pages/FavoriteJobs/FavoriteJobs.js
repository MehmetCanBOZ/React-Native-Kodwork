import React from 'react';
import {useSelector} from 'react-redux';

import {View, FlatList, Text} from 'react-native';

import FavoriteJobCard from '../../components/FavoriteJobCard/FavoriteJobCard';


const FavoriteJobs = ({navigation}) => {
  const favorites = useSelector(favorite => favorite.favoriteList);

  const handleJobSelect = (id, name) => {
    navigation.navigate('Detail', {id, name});
  };

  const renderFavorites = ({item}) => {
    return (
      <FavoriteJobCard
        job={item}
        onSelect={() => handleJobSelect(item.id, item.company.name)}
      />
    );
  };

  return (
    <View>
      {favorites.length > 0 ? (
        <FlatList data={favorites} renderItem={renderFavorites} />
      ) : (
        <Text>Empty</Text>
      )}
    </View>
  );
};

export default FavoriteJobs;