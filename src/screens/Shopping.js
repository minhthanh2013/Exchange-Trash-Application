import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import shoppingData from '../assets/data/shoppingData';
import colors from '../assets/colors/colors';
// import searchBar from './searchBar'
Feather.loadFont();
MaterialCommunityIcons.loadFont();
// export default class Shopping extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       shopData: shoppingData
//     };
//   }
//   // ---------------
//   // componentDidMount() {
//   //   this.renderIngredientsItem()
//   //   //console.log(this.state.shopData)
//   // }
//   // getData(){
//   //   //console.log(shoppingData)
//   //   this.setState({
//   //     shopData: shoppingData
//   //   })
//   // }
// renderIngredientsItem(){
//     {console.log("----------------------------------3 stage----------------------")}

//     //console.log(this.state.shopData.map(item))
//     //{this.state.shopData.map((item) =>{
//       return(
//         <View>
//           {this.state.shopData.map((item) =>{
//           <TouchableOpacity
//           key={item.id}
          
//           onPress={() =>
//             this.props.navigation.navigate('ShoppingDetails', {
//               item: item,
//             })
//           }>
//           <View
//             style={[
//               styles.categoryItemWrapper,
//               {
//                 backgroundColor: colors.white,
//                 flex: 1,
//                 marginLeft: item.id == 1 ? 20 : 0,
//               },
//             ]}>
//             <Image source={item.image} style={styles.categoryItemImage} />
           
//             <View
//               style={[
//                 styles.categorySelectWrapper,
//               ]}>
//               <Text style={styles.categoryIngredientTitle}>{item.title}</Text>
//               <View style={{flexDirection: 'row',  alignSelf: 'center'}}>
//               <Text style={[styles.categoryIngredientTitle, {color:colors.green}]}>{item.price} </Text>
//               <MaterialCommunityIcons
//                           name="leaf"
//                           size={16}
//                           color={colors.green}
//                           style={{marginTop: 11}}
//               />
//               </View>
//             </View>
          
//           </View>
//         </TouchableOpacity>
//           } )}
//         </View>
//       )
//    // } )}
    
//   }

//   // ----------------------
// renderCategoryItem(){
//     {console.log("----------------------------------2 stage----------------------")}
//     console.log(this.state.shopData)
//     //console.log(this.state.shopData.map(item))
//     {this.state.shopData.map((item) =>{
      
//       return (
//         <View
//           style={[{marginTop: 25,}]}>
//             {console.log("line 99 " + item.title)}
//           <Text style={styles.categoriesTitle}>{item.title}</Text>
          
//           <FlatList
//             data={item.list}
//             renderItem={this.renderIngredientsItem()}
//             keyExtractor={(item) => item.id}
//             horizontal={true}
//           />
//         </View>
//       );
//     })}
    
//   };
// render(){
  
//     return (
//       <View style={styles.container}>
//         {console.log("----------------------------------1 stage----------------------")}
//         <FlatList
          
//           style={{marginBottom: 20}} 
//           ListHeaderComponent=
//           {<>
//             {/* Header */}
//             <SafeAreaView>
//               <View style={styles.headerWrapper}>
//                 <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
//                   <View style={styles.headerLeft}>
//                     <Feather name="chevron-left" size={17} color={colors.textDark} />
//                   </View>
//                 </TouchableOpacity>
//                 <View style={{flexDirection: 'row'}}> 
//                   <Feather name="menu" size={24} color={colors.textDark} style={{marginRight: 20}}/>
//                   <TouchableOpacity
//                     onPress={() =>
//                       this.props.navigation.navigate('ShoppingCart')
//                     }>
//                       <Feather name="shopping-bag" size={24} color={colors.textDark} />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </SafeAreaView>
  
//             {/* Titles */}
//             <View style={[styles.titlesWrapper, {flexDirection:'row'}]}>
//               <Text style={styles.titlesTitle}>Bách hóa xanh </Text>
//               <MaterialCommunityIcons
//                   name="leaf"
//                   size={30}
//                   color={colors.green}
//                   style={{marginTop: 11}}
//               />
//             </View>
                  
//             {/* Search */}
//             <View style={styles.searchWrapper}>
//               <Feather name="search" size={22} color={colors.textDark} />
//               <View style={styles.search}>
//                 <TextInput style={styles.searchText} placeholder="Tìm kiếm"></TextInput>
//               </View>
//             </View>
//           </>}
         
//           contentInsetAdjustmentBehavior="automatic"
//           showsVerticalScrollIndicator={false}
//           data={this.state.shopData}
//           renderItem={this.renderCategoryItem()}
//           keyExtractor={(item) => item.id}
//           horizontal={false}
//         />
//       </View>
//     );

  
  
// }


// }
export default Shopping = ({ navigation }) => {
  function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
}
  var string=''
  const renderIngredientsItem = ({ item }) => {
    return(
      <View>
        <TouchableOpacity
        key={item.id}
        onPress={() =>
          navigation.navigate('ShoppingDetails', {
            item: item,
          })
        }>
        <View
          style={[
            styles.categoryItemWrapper,
            {
              backgroundColor: colors.white,
              flex: 1,
              marginLeft: item.id == 1 ? 20 : 0,
            },
          ]}>
          <Image source={item.image} style={styles.categoryItemImage} />
         
          <View
            style={[
              styles.categorySelectWrapper,
            ]}>
            <Text style={styles.categoryIngredientTitle}>{item.title}</Text>
            <View style={{flexDirection: 'row',  alignSelf: 'center'}}>
            <Text style={[styles.categoryIngredientTitle, {color:colors.green}]}>{item.price} </Text>
            <MaterialCommunityIcons
                        name="leaf"
                        size={16}
                        color={colors.green}
                        style={{marginTop: 11}}
            />
            </View>
          </View>
          
        </View>
      </TouchableOpacity>
      </View>
    );
  };

  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[{marginTop: 25,}]}>
        <Text style={styles.categoriesTitle}>{item.title}</Text>
        <FlatList
          data={item.list}
          renderItem={renderIngredientsItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{marginBottom: 20}} 
        ListHeaderComponent=
        {<>
          {/* Header */}
          <SafeAreaView>
            <View style={styles.headerWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.headerLeft}>
                  <Feather name="chevron-left" size={17} color={colors.textDark} />
                </View>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}> 
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ShoppingCart')
                  }>
                    <Feather name="shopping-bag" size={24} color={colors.textDark} />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>

          {/* Titles */}
          <View style={[styles.titlesWrapper, {flexDirection:'row'}]}>
            <Text style={styles.titlesTitle}>Bách hóa xanh </Text>
            <MaterialCommunityIcons
                name="leaf"
                size={30}
                color={colors.green}
                style={{marginTop: 11}}
            />
          </View>

          {/* Search */}
          <View style={styles.searchWrapper}>
            <Feather name="search" size={22} color={colors.textDark} />
            <View style={styles.search}>
              <TextInput style={styles.searchText} placeholder="Tìm kiếm"
            onChangeText={(text)=>{
              {string=text}
              
              
              //const list = [1,2,3,4,5,6,7,8,9,10]
              
              //let result = linearSearch(list, 8);
              //console.log(result); 
              //result = linearSearch(list, 19);
              //console.log(result); 
            }}>

              </TextInput>
              {/* <searchBar/> */}
            </View>
            <TouchableOpacity
            style={styles.buttonSearch}
            onPress={()=>{
              
              var temp= removeVietnameseTones(string)
              var temp_lower= temp.charAt(0).toLowerCase() + temp.slice(1);
              //Linear search
              for(var i=0;i<shoppingData.length;i++){
                for(var j=0;j<3;j++){
                  var prossedStr=removeVietnameseTones(shoppingData[i].list[j].title)
                  var prossedStr_lower=prossedStr.charAt(0).toLowerCase() + prossedStr.slice(1);
                  if(temp==prossedStr|| temp_lower==prossedStr_lower)
                  {
                    console.log("Đã tìm thấy")
                    navigation.navigate("ShoppingDetails",
                    {
                      item: shoppingData[i].list[j]
                    })
                  }
                  else{
                    console.log("Fail")
                  }
                }
              }
            }}
            >
              <Text style={styles.searchTextButton}>Tìm kiếm</Text>
            </TouchableOpacity>
          </View>
        </>}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        data={shoppingData}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.green,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
    fontSize: 17,

  },
  searchText: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 14,
    marginBottom: 0,
    color: colors.textLight,
    paddingVertical: 0,
  },
  categoriesWrapper: {
    marginTop: 10,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 15,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    width: 150,
    height: 240,
  },
  categoryItemImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 150,
    borderRadius: 20,
  },
  categoryIngredientTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 8,
    borderRadius: 10,
  },
  buttonSearch: {
    backgroundColor: colors.green,
    padding: 7,
    borderRadius: 5,
  },
  searchTextButton: {
    color: colors.white,
    fontSize: 13,
  }
});
