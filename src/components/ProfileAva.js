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
              style={styles.profileImage}
            />
        )
    }
}
const styles = StyleSheet.create({
profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  }
})
