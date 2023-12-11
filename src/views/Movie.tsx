import React, {useEffect, useState} from 'react';
import {FavoriSlice} from '../redux/Slice';
import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity,  Pressable} from 'react-native';
import {useDispatch} from 'react-redux';


export const MovieSearch = () => {
    const [movies, setMovies] = useState([]); 
    const [searchMovie, setSearchMovie] = useState(''); 
    const navigation = useNavigation(); 
    const dispatch = useDispatch();

    const fetchData = async () => {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchMovie}`);

        const responseJson = await response.json();
        setMovies(responseJson);
    };

    useEffect(() => {fetchData()}, []);

    const handleMovieName=()=>{fetchData()};

    const saveToFavorites = (item) => {dispatch(FavoriSlice.actions.addToFavorites(item))}

    return (
        <SafeAreaView style={{ backgroundColor: 'black' }}>
            <View style={styles.textInputArea}>
                <TextInput placeholder='Search movie name here..' style={{width: 300, height: 50, borderRadius: 10, borderWidth: 4, borderColor: 'green', backgroundColor: 'white',
                    }}
                    value={searchMovie}
                    onChangeText={(text) => setSearchMovie(text)}
                />
                <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity onPress={handleMovieName} style={{width: 50, height: 50, backgroundColor: 'green', borderRadius: 10, borderWidth: 3, borderColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{width: 40, height: 40, alignItems: 'center', justifyContent: 'center'}} source={require('../assets/icons/SearchIcon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('favorites')}>
                        <Image style={{width: 50, height: 50}} source={require('../assets/icons/Favorite.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.contentList}> {movies.map((item, index) => (
                    <View style={styles.area} key={index}>
                        <Text style={styles.text}>{item.show.name}</Text>
                        <Image style={{ width: 300, height: 500, borderRadius: 10 }} source={{ uri: item.show.image.medium }} />
                        <TouchableOpacity onPress={() => saveToFavorites(item)}>
                            <Image style={{ width: 40, height: 40, marginVertical: 10 }} source={require('../assets/icons/Star.png')} />
                            <Text style={{ color: 'orange' }}>SAVE</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default MovieSearch;

const styles = StyleSheet.create({
    contentList: {
        flexGrow: 1,
        backgroundColor: 'black'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
        marginBottom: 20
    },
    area: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30
    },
    textInputArea: {
        margin: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    }
});