import React, {useState,useEffect} from 'react'
import { Text, View, ActivityIndicator, FlatList } from 'react-native'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Jobs.styles'
import JobCard from '../../components/JobCard/JobCard';

const Jobs = ({navigation}) => {
    const [page,setPage] = useState(1);
    const {data,error,loading} = useFetch(`${API_URL}?page=${page}`);

    if (loading) {
      return (
        <ActivityIndicator
          size="large"
          color="#f44336"
          style={{flex: 1, justifyContent: 'center'}}
        />
      );
    }
    const handleSelect = (id, name) => {
      navigation.navigate('Detail', {id, name});
    }

    const renderItem = (({item})=> <JobCard job={item} onSelect={() => handleSelect(item.id, item.company.name)}/>)
    return (
      <View style={styles.container}>
        <FlatList 
          data={data?.results}
          renderItem={renderItem}
        />
      </View>
    )
}

export default Jobs
