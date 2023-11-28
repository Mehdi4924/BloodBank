import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loader from '../../components/Loader';

const Reports = () => {
  const [loading, setloading] = useState(false);
  const down = () => {
    setloading(true);
    const url =
      'https://github.com/vinzscam/react-native-file-viewer/raw/master/docs/react-native-file-viewer-certificate.pdf';
    function getUrlExtension(url) {
      return url.split(/[#?]/)[0].split('.').pop().trim();
    }

    const extension = getUrlExtension(url);
    const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.${extension}`;

    const options = {
      fromUrl: url,
      toFile: localFile,
    };
    RNFS.downloadFile(options)
      .promise.then(() => FileViewer.open(localFile))
      .then(() => {
        setloading(false);
      })
      .catch(error => {});
  };

  return (
    <View style={styles.container}>
      <Loader animating={loading} />
      <TouchableOpacity onPress={() => down()} style={styles.pdfBack}>
        <Ionicons
          name="ios-document-text-outline"
          size={Theme.hp('4%')}
          color={Theme.primary}
        />
        <View style={{marginLeft: Theme.wp('3%')}}>
          <Text style={{color: Theme.black}}>Blood Group Report</Text>
          <Text style={{color: Theme.grey, fontSize: Theme.hp('1.6%')}}>
            16 January 2022
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => down()} style={styles.pdfBack}>
        <Ionicons
          name="ios-document-text-outline"
          size={Theme.hp('4%')}
          color={Theme.primary}
        />
        <View style={{marginLeft: Theme.wp('3%')}}>
          <Text style={{color: Theme.black}}>CBC Report</Text>
          <Text style={{color: Theme.grey, fontSize: Theme.hp('1.6%')}}>
            16 January 2022
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => down()} style={styles.pdfBack}>
        <Ionicons
          name="ios-document-text-outline"
          size={Theme.hp('4%')}
          color={Theme.primary}
        />
        <View style={{marginLeft: Theme.wp('3%')}}>
          <Text style={{color: Theme.black}}>Maleria Report </Text>
          <Text style={{color: Theme.grey, fontSize: Theme.hp('1.6%')}}>
            16 January 2022
          </Text>
        </View>
      </TouchableOpacity>
      {/* <Image
        source={Images.reportImage}
        style={{height: 230, width: 270, marginTop: Theme.hp('10%')}}
      />
      <Text style={{textAlign: 'center',color:Theme.black, marginTop: Theme.hp('2%')}}>
        No Report Found
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Theme.white,
  },
  pdfBack: {
    flexDirection: 'row',
    backgroundColor: '#ffbfbf',
    borderRadius: 8,
    elevation: 5,
    marginTop: Theme.hp('2%'),
    width: Theme.wp('95%'),
    padding: Theme.hp('2%'),
    alignSelf: 'center',
    // backgroundColor: Theme.lightWhite,
  },
});

export default Reports;
