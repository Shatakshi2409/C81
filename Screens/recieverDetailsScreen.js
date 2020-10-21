import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RecieverDetailsScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userId:firebase.auth().currentUser.email,
            recieverId:this.props.navigation.getParam('details')['user_Id'],
            requestId:this.props.navigation.getParam('details')['request_Id'],
            bookName:this.props.navigation.getParam('details')['book_name'],
            reasonToRequest:this.props.navigation.getPram('details')['reason_to_request'],
            recieverName:'',
            recieverContact:'',
            recieverAddress:'',
            recieverRequestDocId:''
        }
    }
    getRecieverDetails(){
        
    }
    render(){
        return(
<View><Text>Reciever Screen</Text></View>
        )
    }
}