import { View, Text,TouchableOpacity ,StyleSheet,Image} from 'react-native'
import React from 'react'

const Header = ({title,previousPage}) => {

    // const [fontsLoaded] = useFonts({
       
    // })

  return (
    
        <View style={styles.container} >
            <TouchableOpacity onPress={previousPage} style={styles.backarrowContainer}>
            <Image source={require('../assets/backarrow2.png')} style={styles.backarrow} />
            </TouchableOpacity>
            <Image source={require('../assets/Vectoravatarwhite.png')} style={styles.avatar}/>
            <Text style={{ fontSize: 25,color:'white' }}>{title}</Text>
            {/* You can add user profile picture here */}
        </View>
    
  )
}

const styles= StyleSheet.create({
    container:{
        flexDirection: 'row',
        
        padding: 5,
        paddingVertical:15,
        backgroundColor:'rgba(43, 41, 158, 0.7)',
        color:'white',
        
        
    },
    avatar:{
        height:40,
        width:40,
        marginRight:20,
        marginLeft:5,
        
    },
    backarrow:{
        height:20,
        width:15,
        marginRight:10,
        marginLeft:10,
        
        
    },
    backarrowContainer:{
        padding:10,
        paddingVertical:12,
    }
})

export default Header