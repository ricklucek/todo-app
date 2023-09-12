import React, {useState} from 'react'
import {Text, Image, ScrollView, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Switch, Alert} from 'react-native'
import DateTimeInputAndroid from '../../components/DateTimeInput/index.android';

import styles from './styles'

import api from '../../services/api'

// COMPONENTS
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// ICONS
import typeIcons from '../../utils/typeicons';

export default function Task({navigation}){
    const [done, setDone] = useState(false);
    const [type, setType] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11:11:111:11');

    async function New(){

        if(!title || !type || !description || !date || !hour){
            Alert.alert('Confira os campos e tente novamente!')
        }
        await api.post('/task', {
            macaddress,
            type,
            title,
            description,
            when: `${date}T${hour}.000`
        }).then(() =>{

            navigation.navigate('Home');
        }).catch(error => {
            return Alert.alert(error)
        })
    }

    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true} navigation={navigation}/>

            <ScrollView style={{width:'100%'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                    typeIcons.map((icon, index) => (
                        icon != null &&
                        <TouchableOpacity onPress={() => setType(index)}>
                            <Image source={icon} style={[styles.imageIcon, type && type != index && styles.typeIconInative]}/>
                        </TouchableOpacity>
                    ))   
                    }
                </ScrollView>
            

                <Text style={styles.label}>Título</Text>
                <TextInput style={styles.input} maxLength={30} placeholder='Lembre-me de fazer...' onChangeText={(text) => setTitle(text)} value={title}/>

                <Text style={styles.label}>Detalhes</Text>
                <TextInput style={styles.inputArea} multiline={true} maxLength={300} placeholder='Descrição da Tarefa...' onChangeText={(text) => setDescription(text)} value={description}/>

                <DateTimeInputAndroid type={'date'} save={setDate}/>
                <DateTimeInputAndroid type={'time'} save={setHour}/>
                
                <View style={styles.inLine}>
                    <View style={styles.inputInline}>
                        <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done? '#00761B': '#EE6B26'}/>
                        <Text style={styles.switchLabel}>Concluído</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.removeLabel}>Excluir</Text>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
            <Footer icon={'save'} onPress={New}/>
        </KeyboardAvoidingView>
    )
}