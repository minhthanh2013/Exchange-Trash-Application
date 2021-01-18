import * as React from 'react';
import {

  StyleSheet,
  Image

} from 'react-native';
import {firebaseApp} from '../components/Firebase'
import "firebase/database";
export default class ProfileAva extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          url: ''
        };
      }
    componentDidMount() {
        var user = firebaseApp.auth().currentUser;
        const ref = firebaseApp.storage().ref('users/'+user.uid+'.jpg');
        //const geturl = ref.getDownloadURL();
        ref.getDownloadURL().then((geturl) =>{
            this.setState({
                url: geturl
              })
          })
        // firebaseApp.database().ref('users/' +  user.uid ).child('avatar_uri').on("value",(abc)=>{
        //     console.log(abc.val())
          
          
        // })
    }
    render(){
        return(
        < Image
              //source={{uri:this.state.url}}
              source={{uri:this.state.url}}
              style={styles.userImage}
            //blurRadius={10}
            />
        )
    }
}
const styles = StyleSheet.create({
    userImage: {
        borderColor: '#FFF',
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
      }
})
