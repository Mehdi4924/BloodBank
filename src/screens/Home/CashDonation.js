import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import Theme from '../../utils/Theme';
import {GooglePay} from 'react-native-google-pay';
import Loader from '../../components/Loader';
const allowedCardNetworks = ['VISA', 'MASTERCARD'];

const CashDonation = () => {
  const [Loading, setLoading] = useState(false);
  const [Price, setPrice] = useState('10');
  const [filterType, setFilterType] = useState('credit');
  const picker = useRef('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('PKR');
  const [items, setItems] = useState([
    {label: 'USD', value: 'USD'},
    {label: 'PKR', value: 'PKR'},
    {label: 'EURO', value: 'EUR'},
    {label: 'Riyal', value: 'SAR'},
    {label: 'Dirham', value: 'AED'},
  ]);
  async function Pay() {
    const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];
    const requestData = {
      cardPaymentMethod: {
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          // stripe (see Example):
          gateway: 'stripe',
          gatewayMerchantId: '',
          stripe: {
            publishableKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
            version: '2018-11-08',
          },
          // other:
          gateway: 'example',
          gatewayMerchantId: 'exampleGatewayMerchantId',
        },

        allowedCardNetworks,
        allowedCardAuthMethods,
      },
      transaction: {
        totalPrice: Price,
        totalPriceStatus: 'FINAL',
        currencyCode: value,
      },
      merchantName: 'Sundas Foundation',
    };
    // Set the environment before the payment request
    GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST);
    // Check if Google Pay is available
    GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods).then(
      ready => {
        if (ready) {
          // Request payment token
          GooglePay.requestPayment(requestData)
            .then(token => {
              // Send a token to your payment gateway
            })
            .catch(error => console.log(error.code, error.message));
        }
      },
    );
  }

  return (
    <View style={styles.container}>
      <Loader animating={Loading} />
      <Card elevation={5} style={{marginTop: Theme.hp('3%')}}>
        <TouchableOpacity
          onPress={() => setFilterType(filterType == 'credit' ? '' : 'credit')}
          style={styles.cardBack}>
          <Text style={{color: Theme.black, fontWeight: 'bold'}}>
            Credit or Debit Card
          </Text>
          <AntDesign
            name={filterType == 'credit' ? 'down' : 'right'}
            color={Theme.black}
            size={Theme.hp('2%')}
          />
        </TouchableOpacity>
        {filterType == 'credit' && (
          <View style={{marginBottom: Theme.hp('2%')}}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: Theme.wp('2%'),
              }}>
              <TextInput
                onChangeText={price => setPrice(price)}
                placeholderTextColor={Theme.black}
                placeholder="Enter amount"
                keyboardType="number-pad"
                style={{
                  backgroundColor: Theme.inputBack,
                  width: '47%',
                  color: Theme.black,
                  borderRadius: 40,
                  paddingLeft: Theme.wp('6%'),
                }}
              />
              <DropDownPicker
                dropDownContainerStyle={{
                  borderWidth: 0,
                  width: '47%',
                  marginLeft: Theme.wp('2%'),
                }}
                style={{
                  borderWidth: 0,
                  marginLeft: Theme.wp('2%'),
                  backgroundColor: Theme.inputBack,
                  borderRadius: 40,
                  width: '47%',
                }}
                labelStyle={{color: Theme.black}}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>

            <TouchableOpacity onPress={Pay} style={styles.goglePay}>
              <Text style={{color: Theme.white}}>Pay with Google Pay</Text>
            </TouchableOpacity>
          </View>
        )}
      </Card>
      <Card elevation={5} style={{marginTop: Theme.hp('1%'), zIndex: -1}}>
        <TouchableOpacity
          style={styles.cardBack}
          onPress={() =>
            setFilterType(filterType == 'jazzcash' ? '' : 'jazzcash')
          }>
          <Text style={{color: Theme.black, fontWeight: 'bold'}}>JazzCash</Text>
          <AntDesign
            name={filterType == 'jazzcash' ? 'down' : 'right'}
            color={Theme.black}
            size={Theme.hp('2%')}
          />
        </TouchableOpacity>
        {filterType == 'jazzcash' && (
          <View style={{marginBottom: Theme.hp('2%')}}>
            <Text style={styles.jazcashText}>
              You can pay with JazzCash Wallet using this Number
            </Text>
            <Text
              style={{
                fontSize: Theme.fontSmall,
                color: Theme.black,
                fontWeight: 'bold',
                marginLeft: Theme.wp('4%'),
                marginTop: Theme.hp('1%'),
              }}>
              Account Tittle
            </Text>
            <Text style={{color: Theme.grey, marginLeft: Theme.wp('4%')}}>
              Sundas Foundation
            </Text>
            <Text
              style={{
                fontSize: Theme.fontSmall,
                color: Theme.black,
                fontWeight: 'bold',
                marginLeft: Theme.wp('4%'),
                marginTop: Theme.hp('0.5%'),
              }}>
              Account Number
            </Text>
            <Text style={styles.number}>+92 33304540880</Text>
          </View>
        )}
      </Card>
      <Card elevation={5} style={{marginTop: Theme.hp('1%'), zIndex: -1}}>
        <TouchableOpacity
          onPress={() =>
            setFilterType(filterType == 'easypaisa' ? '' : 'easypaisa')
          }
          style={styles.cardBack}>
          <Text style={{color: Theme.black, fontWeight: 'bold'}}>
            EasyPaisa
          </Text>
          <AntDesign
            name={filterType == 'easypaisa' ? 'down' : 'right'}
            color={Theme.black}
            size={Theme.hp('2%')}
          />
        </TouchableOpacity>
        {filterType == 'easypaisa' && (
          <View style={{marginBottom: Theme.hp('2%')}}>
            <Text style={styles.jazcashText}>
              You can pay with EasyPaisa Wallet using this Number
            </Text>
            <Text
              style={{
                fontSize: Theme.fontSmall,
                color: Theme.black,
                fontWeight: 'bold',
                marginLeft: Theme.wp('4%'),
                marginTop: Theme.hp('1%'),
              }}>
              Account Tittle
            </Text>
            <Text style={{color: Theme.grey, marginLeft: Theme.wp('4%')}}>
              Sundas Foundation
            </Text>
            <Text
              style={{
                fontSize: Theme.fontSmall,
                color: Theme.black,
                fontWeight: 'bold',
                marginLeft: Theme.wp('4%'),
                marginTop: Theme.hp('0.5%'),
              }}>
              Account Number
            </Text>
            <Text style={styles.number}>+92 33304540880</Text>
          </View>
        )}
      </Card>
      <Card elevation={5} style={{marginTop: Theme.hp('1%'), zIndex: -1}}>
        <TouchableOpacity
          onPress={() => setFilterType(filterType == 'upaisa' ? '' : 'upaisa')}
          style={styles.cardBack}>
          <Text style={{color: Theme.black, fontWeight: 'bold'}}>UPaisa</Text>
          <AntDesign
            name={filterType == 'upaisa' ? 'down' : 'right'}
            color={Theme.black}
            size={Theme.hp('2%')}
          />
        </TouchableOpacity>
        {filterType == 'upaisa' && (
          <View style={{marginBottom: Theme.hp('2%')}}>
            <Text style={styles.jazcashText}>
              You can pay with UPaisa Wallet using this Number
            </Text>
            <Text
              style={{
                fontSize: Theme.fontSmall,
                color: Theme.black,
                fontWeight: 'bold',
                marginLeft: Theme.wp('4%'),
                marginTop: Theme.hp('1%'),
              }}>
              Account Tittle
            </Text>
            <Text style={{color: Theme.grey, marginLeft: Theme.wp('4%')}}>
              Sundas Foundation
            </Text>
            <Text
              style={{
                fontSize: Theme.fontSmall,
                color: Theme.black,
                fontWeight: 'bold',
                marginLeft: Theme.wp('4%'),
                marginTop: Theme.hp('0.5%'),
              }}>
              Account Number
            </Text>
            <Text style={styles.number}>+92 33304540880</Text>
          </View>
        )}
      </Card>
      <Text
        style={{
          color: Theme.black,
          textAlign: 'center',
          marginTop: Theme.hp('4%'),
        }}>
        Our Credit Card Merchant Account is active now to donate online. You can
        also donate by signing into your bank account application and entering
        IBAN for local and international transfer. Please email at
        accounts@sundas.org for confirmation of payment and to get receipt. Or
        Whatsapp at +923095550867.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Theme.hp('1%'),
  },
  cardBack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Theme.hp('2%'),
  },
  cardStyle: {
    flexDirection: 'row',
    marginLeft: Theme.wp('3%'),
    marginTop: Theme.hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderWidth: 0.5,
    borderColor: Theme.grey,
    borderRadius: 100,
  },
  title: {
    color: Theme.black,
  },
  select: {
    color: Theme.grey,
    paddingLeft: Theme.wp('4%'),
  },
  goglePay: {
    marginLeft: Theme.wp('2%'),
    width: '95%',
    marginTop: Theme.hp('2%'),
    paddingVertical: Theme.hp('1.5%'),
    borderRadius: 40,
    backgroundColor: Theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jazcashText: {
    color: Theme.black,
    marginLeft: Theme.wp('4%'),
    marginRight: Theme.wp('2%'),
    fontSize: Theme.hp('1.7%'),
  },
  number: {
    color: Theme.primary,
    fontWeight: 'bold',
    marginLeft: Theme.wp('4%'),
    marginTop: Theme.hp('1%'),
    fontSize: Theme.fontSmall,
  },
});

export default CashDonation;
