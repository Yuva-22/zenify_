import { View, Text,StyleSheet ,Image,FlatList,TouchableOpacity } from 'react-native'
import React ,{useState,useEffect} from 'react'
import {Montserrat_700Bold,Montserrat_400Regular,Montserrat_500Medium,useFonts} from '@expo-google-fonts/montserrat'
import * as Contacts from 'expo-contacts'
import { getAlluser } from '../firebase/users'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({navigation,route}) => {

  
  const [contacts, setContacts] = useState([]);

  const [registerdContacts , setRegisteredContacts] = useState([]);

  // const {currentUserId} = route.params;

  // console.log(currentUserId,"in home.js")
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
      //console.log(contacts)
    
    })();
  }, []);

   let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular,
    Montserrat_500Medium
  })

  const chatHandler = (userName) =>{
    navigation.navigate('chatScreen',{userName,currentUserId})
    console.log(userName)
  }

  const getUser =  () => {

    const users =  getAlluser();
    console.log(users)
    //setRegisteredContacts(users);
    //console.log("registeredContacts",registerdContacts)

  //  const selectedContacts = await contacts.filter((contact) => contact.phoneNumbers[0].number == 9361147619);

   console.log(contacts[0].phoneNumbers[0].number)
   console.log(contacts[0]);

    //console.log("selectedcontacts", selectedContacts);
  }




  return (

    
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

          <Image
          source={require('../assets/search3.png')}
          style={styles.search}/>
          <Text style={styles.headerText}>Chats</Text>
           <Image
          source={require('../assets/hamburger.png')}
          style={styles.hamburger}/>

      </View>
      <View>
        <TouchableOpacity onPress={getUser}>
          <Text>GetUsers</Text>
        </TouchableOpacity>
        <FlatList/>
      {/* <TouchableOpacity delayPressIn={50} onPress={chatHandler}>
        <View style={styles.chatContainer}>
          <TouchableOpacity delayPressIn={50}>
          <Image source={require('../assets/Vectoravatar2.png')} style={styles.avatar}/>
          </TouchableOpacity>
          <View style={styles.chatTextContainer}>
            <View style={styles.chatRow}>
              <Text style={styles.userName}>Sriram</Text>
              <Text style={styles.date}>28-07-2023</Text>
            </View>
            <View>
              <Text style={styles.lastMessage}>Last meassage from person</Text>
            </View>   
          </View>
        </View>
      </TouchableOpacity> */}
      
        {/* <View style={styles.chatContainer}>
          <Image source={require('../assets/Vectoravatar2.png')} style={styles.avatar}/>
          <View style={styles.chatTextContainer}>
            <View style={styles.chatRow}>
              <Text style={styles.userName}>Sriram</Text>
              <Text style={styles.date}>28-07-2023</Text>
            </View>
            <View>
              <Text style={styles.lastMessage}>Last meassage from person</Text>
            </View>   
          </View>
        </View> */}

        <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          
        <TouchableOpacity delayPressIn={50} onPress={() =>{chatHandler(item.name)}}>
        <View style={styles.chatContainer}>
          <TouchableOpacity delayPressIn={50}>
          <Image source={require('../assets/Vectoravatar2.png')} style={styles.avatar}/>
          </TouchableOpacity>
          <View style={styles.chatTextContainer}>
            <View style={styles.chatRow}>
              <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
              <Text style={styles.date}>28-07-2023</Text>
            </View>
            <View>
              <Text style={styles.lastMessage}>Last meassage from person</Text>
            </View>   
          </View>
        </View>
      </TouchableOpacity>
        )}
      />


      </View>

    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({

  container:{
    backgroundColor:'#F1F0FC',
    flex:1,
    zIndex:10,
    padding:20
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:30
    

  },
  search:{
    height:30,
    width:30
  },
  headerText:{
    fontSize:30,
    color:'#6965FB',
    fontFamily:'Montserrat_400Regular'
  },
  hamburger:{
    width:40,
    height:40
  },
  chatContainer:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    padding:20,
    borderRadius:20,
    marginBottom:7,
    

  },
  avatar:{
    height:40,
    width:40
  },
  chatRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    
    
  },
  chatTextContainer:{
    marginLeft:20,
    marginRight:10,
    flex:1
  },
  userName:{
    color:'#42373B',
    fontSize:18,
    fontWeight:'500',
    marginBottom:8
  },
  date:{
    color:'#7684B0',
    fontSize:12
  },
  lastMessage:{
    color:'#7684B0'
  }

})

export default Home