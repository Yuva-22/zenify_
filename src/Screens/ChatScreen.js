import { View, Text ,StyleSheet, TextInput ,Image ,ScrollView, TouchableOpacity } from 'react-native'
import React ,{useLayoutEffect,useState} from 'react'
import Header from './Header'


import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const ChatScreen = ({navigation,route}) => {

  
  const [contentHeight, setContentHeight] = useState(0);
  const [textValue,setTextValue] = useState(null)
  const navigate = useNavigation();
  
  const {userName} = route.params;
  const currentUserId = route.params;
  
  const sendText = () =>{
    console.log(textValue)
  }
  const previousPage = () =>{
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header title={userName} previousPage={previousPage}/>,
    });
  }, [navigation]);


  const handleContentSizeChange = (event) => {
    const { contentSize } = event.nativeEvent;
    setContentHeight(contentSize.height);
  };

   const maxLines = 4;
  const singleLineHeight = 30; // You may need to adjust this value based on your font size and styles

  // Calculate the number of lines based on content height and threshold
  const numberOfLines = contentHeight <= singleLineHeight ? 1 : Math.min(Math.floor(contentHeight / singleLineHeight), maxLines);

  return (
    <SafeAreaView style={styles.container}>
      <Text>ChatScreen</Text>

      <View style={styles.chatContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput 
        style={[styles.chatInput, { height: Math.min(maxLines * singleLineHeight, contentHeight) }]}
         value={textValue}
         onChangeText={setTextValue}
         placeholder='Type here!'
         placeholderTextColor="#7684B0"
         multiline={true}
         numberOfLines={numberOfLines}
         onContentSizeChange={handleContentSizeChange}>

        </TextInput>
        <TouchableOpacity onPress={sendText} style={styles.sendImageContainer}>
        
           <Image source={require('../assets/Vectorsend.png')} style={styles.sendImage} />

        </TouchableOpacity>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'',
    paddingVertical:20,
    paddingHorizontal:20,
    flex:1
  },
  chatInput:{
    backgroundColor:'rgba(154, 150, 230, 0.3)',
    paddingHorizontal:20,
    paddingVertical:15,
    borderRadius:15,
    paddingRight:20,
    fontSize: 18, 
    flex:1, // Takes as much space as possible in the row
    height: 55, 
    
   
  },
  sendImage:{
    height:25,
    width:30,
    marginLeft:5
    
    
  },
  sendImageContainer:{

    height:50,
    width:50,
    backgroundColor:'rgba(43, 41, 158, 0.8)',
    borderRadius:100,
    marginLeft:10,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'

  },

  chatContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    borderRadius: 8,
    position:'absolute',
    bottom:20,
    width:'100%',
    marginHorizontal:20
  },
  scrollContainer:{
    flexGrow:1,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end'
  }
})

export default ChatScreen