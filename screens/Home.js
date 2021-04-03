import React, { Component } from 'react'
import { Text, StyleSheet, View , StatusBar} from 'react-native'
import  firebase from "firebase";
import { firebaseConfig } from './Firebase'
import { Container, Header, Content, Form,Item, Input, Label, Button, ListItem, List } from "native-base";
import Constants from 'expo-constants';



export default class Home extends Component {

    state={
        text:"",
        mylist:[]
    }

// ==============================================
// Accessing firebase data in console

    componentDidMount(){
        const myitems =   firebase.database().ref("myWishes");
        myitems.on("value",datasnap=>{
          //  console.log(Object.values(datasnap.val()));
          if(datasnap.val()){
                this.setState({mylist:Object.values(datasnap.val())})

          }  
        })
       
    }


// ==============================================
// Pushing data to firebase

    saveItem (){
        // console.log(this.state.text);
        const myWishes =   firebase.database().ref("myWishes");
        myWishes.push().set({
            text:this.state.text,
            time:Date.now()
            
        })
        this.setState({text:""})
    }

// ================================================
// Remove Data from Firebase

    removeItem(){
        firebase.database().ref("myWishes").remove()
        this.setState({mylist:[{text:"Removed Sucessfully"}]})
    }

    render() {
        console.log(this.state)

        const myItems = this.state.mylist.map(item=>{
            return(
                <ListItem style={{justifyContent:"space-between"}} key={item.time} >
                    <Text>{item.text}</Text>
                    <Text>{new Date(item.time).toLocaleTimeString()}</Text>
                    <Text>{new Date(item.time).toLocaleTimeString()}</Text>
                </ListItem>

            )

            
        })
        return (
            <View style={styles.container}>
                {/* <StatusBar style="light"/> */}
                <Item floatingLabel>
                    <Label> Username</Label>
                    <Input 
                    value={ this.state.text}
                    onChangeText={(text)=>this.setState({text})}/>
                </Item>
                <View style={{flexDirection:"row" , padding :20, justifyContent :"space-around"}}>
                    <Button onPress={()=>this.saveItem()} rounded success style={styles.btn}>
                        <Text style={{color:"#FFF"}}>Add</Text>
                    </Button>
                    <Button onPress={()=>this.removeItem()} rounded danger style={styles.btn}>
                        <Text  style={{color:"#FFF"}}>Delete</Text>
                    </Button>
                </View>

                <List>
                    {myItems}
                </List>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex :1,
        backgroundColor : "powderblue",
        paddingTop: Constants.statusBarHeight,
        justifyContent :"center",

    },
    btn:{
        padding:10,
        width : 120,
        justifyContent : "center"
    }
})
