import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ShopIcon from '../../assets/images/Shop.svg';

export default function Order() {
  const [activeOrder, setActiveOrder] = useState([
    {
      id: 1,
      orderNumber: '185874',
      date: 'from',
      Orderedby: 'Amina Nguyen',
      totalprice: '$512',
      status: 'ACTIVE',
      count: '7',
    },
  ]);
  const finishedOrder = [
    {
      id: 1,
      orderNumber: '185874',
      date: 'from',
      Orderedby: 'Amina Nguyen',
      totalprice: '$512',
      status: 'FINISHED',
      count: '7',
      content: [
        {
          id: 1,
          image: require('../../assets/images/product5.jpg'),
          title: 'Fresh Sirioin filet steak',
          price: '$512',
          quantity: '6 kg',
          origin: 'Arizona Meat',
        },
        {
          id: 2,
          image: require('../../assets/images/product1.jpg'),
          title: 'Button Mushrooms',
          price: '$58',
          quantity: '2 kg',
          origin: 'Aguero Family Garden',
        },
        {
          id: 3,
          image: require('../../assets/images/featureimage3.jpg'),
          title: 'Fresh Sirioin filet steak',
          price: '$216',
          quantity: '5 kg',
          origin: 'Aguaro Family Garden',
        },
      ],
    },
    {
      id: 2,
      orderNumber: '185874',
      date: 'from',
      Orderedby: 'Amina Nguyen',
      totalprice: '$512',
      status: 'FINISHED',
      count: '7',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentSection}>
        <Text style={styles.listText}>Your orders</Text>
        <ScrollView
          contentContainerStyle={styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}>
          {activeOrder.map(order => {
            return (
              <View style={styles.activeCard} key={order.id}>
                <View style={styles.topSection}>
                  <View style={styles.leftSection}>
                    <View style={styles.iconContainer}>
                      <ShopIcon width={25} height={25} />
                    </View>
                    <View style={styles.detailsSection}>
                      <Text style={styles.orderText}>Order #{order?.id}</Text>
                      <Text style={styles.dateText}>{order?.date}</Text>
                    </View>
                  </View>
                  <View style={styles.rightSection}>
                    <View style={styles.userSection}>
                      <Text style={styles.statusText}>{order?.status}</Text>
                      <View style={styles.userContainer}>
                        <Text style={styles.byText}>by</Text>
                        <Text style={styles.userNameTxt}>
                          {order?.Orderedby}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.dashedLine}></View>
                <View style={styles.bottomSection}>
                  <View style={styles.bottomLeft}>
                    <View style={styles.productListImage}>
                      <Image
                        source={require('../../assets/images/featureimage3.jpg')}
                        style={styles.productImageOne}
                      />
                      <Image
                        source={require('../../assets/images/product1.jpg')}
                        style={styles.productImageTwo}
                      />
                      <Image
                        source={require('../../assets/images/tomato.jpg')}
                        style={styles.productImageThree}
                      />
                      <Text style={styles.productRemainTxt}>+4</Text>
                    </View>
                  </View>
                  <Text style={styles.productTotalTxt}>
                    {order?.count} Items
                  </Text>
                  <Text style={styles.priceSection}>{order?.totalprice}</Text>
                </View>
              </View>
            );
          })}
          {finishedOrder.map(order => {
            return (
              <View style={styles.finishedCard} key={order.id}>
                <View style={styles.topSection}>
                  <View style={styles.leftSection}>
                    <View style={styles.iconContainer}>
                      <ShopIcon width={25} height={25} />
                    </View>
                    <View style={styles.detailsSection}>
                      <Text style={styles.orderText}>
                        Order #{order?.orderNumber}
                      </Text>
                      <Text style={styles.dateText}>Fri 21 Aug - 10:21 AM</Text>
                    </View>
                  </View>
                  <View style={styles.rightSection}>
                    <View style={styles.userSection}>
                      <Text style={styles.statusTextFinished}>
                        {order?.status}
                      </Text>
                      <View style={styles.userContainer}>
                        <Text style={styles.byText}>by</Text>
                        <Text style={styles.userNameTxt}>
                          {order?.Orderedby}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.dashedLine}></View>
                <View style={styles.bottomSection}>
                  {order?.content && (
                    <View>
                      <Text style={styles.productTotalTxtExpanded}>
                        {order?.count} Items
                      </Text>
                    </View>
                  )}
                  {!order?.content && (
                    <View style={styles.bottomFinishedLeft}>
                      <View style={styles.productFinishedListImage}>
                        <Image
                          source={require('../../assets/images/featureimage3.jpg')}
                          style={styles.productImageOne}
                        />
                        <Image
                          source={require('../../assets/images/product1.jpg')}
                          style={styles.productImageTwo}
                        />
                        <Image
                          source={require('../../assets/images/tomato.jpg')}
                          style={styles.productImageThree}
                        />
                        <Text style={styles.productRemainTxt}>+4</Text>
                      </View>
                      <Text style={styles.productTotalFinishedTxt}>
                        {order?.count} Items
                      </Text>
                    </View>
                  )}
                  <Text style={styles.priceSection}>{order?.totalprice}</Text>
                </View>
                {order?.content?.map(item => {
                  return (
                    <View style={styles.bottomSubSection} key={item.id}>
                      <View style={styles.expandedSection}>
                        <View style={styles.leftDetailSection}>
                          <Image
                            source={item?.image}
                            style={styles.productImage}
                          />
                          <View style={styles.detailSubSection}>
                            <Text style={styles.productTitle}>
                              {item?.title}
                            </Text>
                            <Text style={styles.productBrand}>
                              {item.quantity} - {item?.origin}
                            </Text>
                          </View>
                        </View>
                        <Text style={styles.rightPriceSection}>
                          {item.price}
                        </Text>
                      </View>
                    </View>
                  );
                })}
                {order?.content && (
                  <TouchableOpacity style={styles.orderBtn}>
                    <Text style={styles.orderBtnTxt}>Order Again</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: 20,
  },
  contentSection: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  listText: {
    fontFamily: 'Inter-Bold.ttf',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  activeCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#F4F5F7',
    height: 42,
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: 10,
  },
  detailsSection: {},
  orderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Inter-Bold.ttf',
  },
  dateText: {
    fontSize: 13,
    color: '#ADADAD',
  },
  rightSection: {},
  userSection: {},
  statusText: {
    textAlign: 'right',
    fontSize: 12,
    color: '#179c6f',
    fontWeight: 'bold',
  },
  statusTextFinished: {
    textAlign: 'right',
    fontSize: 12,
    color: '#ADADAD',
    fontWeight: 'bold',
  },
  userContainer: {
    flexDirection: 'row',
  },
  byText: {marginRight: 5},
  userNameTxt: {
    fontWeight: 'bold',
    color: '#000',
  },
  dashedLine: {
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderStyle: 'dashed',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  bottomLeft: {},
  productListImage: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  bottomFinishedLeft: {
    position: 'relative',
  },
  productFinishedListImage: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
  },
  productImageOne: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 25,
    left: 0,
    borderColor: '#fff',
    borderWidth: 2,
  },
  productImageTwo: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 25,
    left: 20,
    borderColor: '#fff',
    borderWidth: 2,
  },
  productImageThree: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 25,
    left: 40,
    borderColor: '#fff',
    borderWidth: 2,
  },
  productRemainTxt: {
    position: 'absolute',
    left: 60,
    borderColor: '#fff',
    borderWidth: 2,

    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: '#2368DF',
    fontSize: 25,
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
  },
  productTotalTxt: {
    fontSize: 17,
    color: '#ADADAD',
    marginLeft: 25,
  },
  productTotalFinishedTxt: {
    fontSize: 17,
    color: '#ADADAD',
    marginLeft: 110,
  },
  priceSection: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  finishedCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  bottomSubSection: {
    marginBottom: 10,
  },
  expandedSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4F5F7',
    padding: 10,
    borderRadius: 8,
  },
  leftDetailSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightPriceSection: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  detailSubSection: {},
  productTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  productBrand: {
    fontSize: 13,
    color: '#ADADAD',
  },
  productImage: {
    height: 40,
    width: 40,
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 2,
    marginRight: 10,
  },
  productTotalTxtExpanded: {
    fontSize: 17,
    color: '#ADADAD',
  },
  orderBtn: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 15,
  },
  orderBtnTxt: {
    color: '#fff',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
