import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from './styles'

// ICONES
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import qrcode from '../../assets/qrcode.png';
import back from '../../assets/back.png';

export default function Header({showNotification, showBack, pressNotification, late, navigation}){
    function goBack(){
        navigation.navigate('Home')
    }
    
    return(
        <View style={styles.header}>

            {showBack?
            <TouchableOpacity style={styles.leftIcon} onPress={goBack}>
                <Image source={back} style={styles.leftIconImage} resizeMode='contain'/>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.leftIcon}>
                <Image source={qrcode} style={styles.leftIconImage} resizeMode='contain'/>
            </TouchableOpacity>
            }

            <Image source={logo} style={styles.logo} resizeMode='contain'/>

            {showNotification && 
            <TouchableOpacity style={styles.notification} onPress={pressNotification}>
            <Image source={bell} style={styles.notificationImage} resizeMode='contain' />
            {late > 0 &&
            <View style={styles.circle}>
            <Text style={styles.notificationText}>
                {late}
            </Text>
            </View>
            }
            </TouchableOpacity>
            }
        </View>
    )
}