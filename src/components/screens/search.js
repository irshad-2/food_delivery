import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import CloseIcon from '../../assets/images/Close.svg';
import TrashIcon from '../../assets/images/trash.svg';
import Star from '../../assets/images/Star.svg';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = list.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  const [list, setList] = useState([
    {
      id: 1,
      name: 'Tenderloin filet steak',
      brand: 'Arizona Meat',
      image: require('../../assets/images/featureimage1.jpg'),
      quantity: '6 kg',
      price: '54.99',
      rating: '4.8',
      review: '371',
    },


          <TouchableOpacity style={styles.closeBtn}>
            <CloseIcon width={30} height={30} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.trashContainer}>
          <TrashIcon width={25} height={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.resultMainContainer}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultHeading}>321 results</Text>
          <Text style={styles.resultPara}>from various rates of suppliers</Text>
        </View>
        <View style={styles.filterWrapper}>
          <Text style={styles.filter}>Filter all</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderList()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#F4F5F7',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    width: 300,
  },
  inputText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    width: 200,
    color: '#000',
  },
  closeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 30,
    height: 30,
  },
  trashContainer: {
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 50,
    borderRadius: 8,
  },
  resultMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  resultContainer: {},
  resultHeading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  resultPara: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#ADADAD',
  },
  filterWrapper: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 30,
  },
  filter: {
    padding: 5,
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  foodContainer: {
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 15,
    // width: 360,
    // height: 100,
  },
  resultList: {
    flexDirection: 'row',
  },
  foodImage: {
    borderRadius: 8,
    width: 70,
    height: 65,
    marginRight: 10,
  },
  description: {},
  descriptionHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  weightPara: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    marginBottom: 10,
    color: '#000',
  },
  ratePara: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#ADADAD',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  starIcon: {},
  rating: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 5,
  },
  review: {
    color: '#ADADAD',
    fontSize: 12,
  },
});
