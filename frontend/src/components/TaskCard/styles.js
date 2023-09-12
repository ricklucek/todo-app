import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
        marginVertical:10,
        width: '90%',
        height: 80,
        borderColor: '#000',
        borderWidth:1,
        borderRadius:5
    },
    cardLeft:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    typeActive: {
        width: 50,
        height:50
    },
    cardTitle: {
        marginLeft:10,
        fontWeight:'bold',
    },
    cardRight:{
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    cardDate:{
        color:'#EE6B26',
        fontWeight:'bold',
    },
    cardTime:{
        color:'#707070',
    },
    done:{
        opacity:0.5
    }
    
})

export default styles;