import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

const FishInfo = () => {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    async function loadDataAsync() {
      const db = await getDBConnection();
      const fishes = await fetchFishes(db);
      setFishes(fishes);
    }

    loadDataAsync();
  }, []);

  return (
    <ScrollView>
      {fishes.map(fish => (
        <View key={fish.id} style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{fish.name}</Text>
          <Text>{fish.description}</Text>
          <Text>{`Tank Size: ${fish.tankSize}`}</Text>
          <Text>{`Diet: ${fish.diet}`}</Text>
          <Text>{`Temperature Range: ${fish.temperatureRange}`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default FishInfo;
