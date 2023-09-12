import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    filter: {
        flexDirection:'row',
        width:'100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems:'center'
    },
    filterTextActived: {
        fontWeight:'bold',
        color:'#EE6B26'
    },
    filterTextInative: {
        fontWeight:'bold',
        color:'#20295F',
        opacity: 0.5
    },
    content:{
        width:'100%',
        marginTop:10
    },
    title:{
        width:'100%',
        borderBottomWidth:1,
        borderColor:'#20295F',
        alignItems:'center'
    },
    titleText:{
        color:'#20295F',
        fontSize:18,
        position: 'relative',
        top:11,
        backgroundColor:'#FFF'
    }
})

export default styles