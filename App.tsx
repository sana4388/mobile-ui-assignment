import { Alert } from 'react-native';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.backArrow}>‹</Text>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Group Profile</Text>
          <Text style={styles.username}>ootd_everyday</Text>
        </View>

        <Text style={styles.plus}>＋</Text>
      </View>

      {/* Profile */}
      <View style={styles.profile}>

        <View style={styles.topSection}>

          {/* Profile Picture */}
          <View style={styles.profilePicture}>
            <Text style={styles.ootd}>OO</Text>
            <Text style={styles.td}>TD</Text>
          </View>

          {/* Numbers */}
          <View style={styles.numbers}>

            <View style={styles.numberBox}>
              <Text style={styles.number}>53</Text>
              <Text style={styles.label}>Posts</Text>
            </View>

            <View style={styles.numberBox}>
              <Text style={styles.number}>12</Text>
              <Text style={styles.label}>Members</Text>
            </View>

            <View style={styles.numberBox}>
              <Text style={styles.number}>1</Text>
              <Text style={styles.label}>Admins</Text>
            </View>

          </View>
        </View>

        {/* Description */}
        <View style={styles.description}>
          <Text style={styles.groupName}>OOTD Everyday</Text>
          <Text style={styles.descriptionText}>Fit check! 👕</Text>
          <Text style={styles.descriptionText}>
            You know we’ll hype you up.
          </Text>
        </View>

        {/* Member button */}
        <View style={styles.memberButton}>
          <Text style={styles.memberText}>Member</Text>
          <Text style={styles.arrow}>⌄</Text>
        </View>

      </View>

      {/* Photo Grid */}
      <View style={styles.photoGrid}>

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400' }}
          style={styles.photo}
        />

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400' }}
          style={styles.photo}
        />

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400' }}
          style={styles.photo}
        />

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400' }}
          style={styles.photo}
        />

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400' }}
          style={styles.photo}
        />

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400' }}
          style={styles.photo}
        />

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400' }}
          style={styles.photo}
        />

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400' }}
          style={styles.photo}
        />

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1506629905607-d9d9e7d8e6e8?w=400' }}
          style={styles.photo}
        />

      </View>

      {/* Bottom Navigation */}
      <View style={styles.navigation}>
        <Text style={styles.navigationIcon}>⌂</Text>
        <Text style={styles.navigationIcon}>⌕</Text>
        <Text style={styles.navigationIcon}>▣</Text>
        <Text style={styles.navigationIcon}>♧</Text>
        <Text style={styles.navigationIcon}>●</Text>
      </View>

      {/* Required Alert Button */}
      <View style={styles.alertButton}>
        <Button
          title="Alert"
          onPress={() => Alert.alert('Alert Button pressed')}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: 85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },

  backArrow: {
    fontSize: 35,
    width: 45,
  },

  headerCenter: {
    alignItems: 'center',
    flex: 1,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  username: {
    fontSize: 12,
    color: '#888888',
  },

  plus: {
    fontSize: 28,
    width: 45,
    textAlign: 'right',
  },

  profile: {
    padding: 15,
  },

  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profilePicture: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#1594c9',
    borderWidth: 3,
    borderColor: '#f7a800',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ootd: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  td: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  numbers: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 10,
  },

  numberBox: {
    alignItems: 'center',
  },

  number: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  label: {
    fontSize: 12,
    color: '#666666',
    marginTop: 3,
  },

  description: {
    marginTop: 12,
  },

  groupName: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  descriptionText: {
    fontSize: 13,
    marginTop: 2,
  },

  memberButton: {
    height: 36,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  memberText: {
    fontSize: 14,
    fontWeight: '600',
  },

  arrow: {
    fontSize: 18,
    marginLeft: 5,
  },

  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  photo: {
    width: '33.33%',
    height: 125,
    borderWidth: 1,
    borderColor: 'white',
  },

  navigation: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navigationIcon: {
    fontSize: 25,
  },

  alertButton: {
    margin: 18,
    marginTop: 10,
  },

});