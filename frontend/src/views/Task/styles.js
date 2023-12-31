import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-end'
    },
    imageIcon:{
        width:40,
        height:40,
        margin:10
    },
    label:{
        color:'#707070',
        fontSize:18,
        paddingHorizontal:10,
        marginTop:20,
        marginBottom:5
    },
    input:{
        fontSize:18,
        width:'95%',
        padding:10,
        borderBottomColor:'#EE6B26',
        marginHorizontal:10,
        borderBottomWidth:1
    },
    inputArea:{
        width:'95%',
        padding:10,
        borderColor:'#EE6B26',
        marginHorizontal:10,
        borderWidth:1,
        borderRadius:10,
        height:150,
        textAlignVertical:'top'
    },
    inLine:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        marginBottom:30
    },
    inputInline:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    switchLabel:{
        fontWeight:'bold',
        color:'#EE6B26',
        textTransform:'uppercase',
        paddingLeft:10
    },
    removeLabel:{
        fontWeight:'bold',
        color:'#20295F',
        textTransform:'uppercase',
        paddingLeft:10
    },
    typeIconInative:{
        opacity:0.5,
        
    }
})

export default styles