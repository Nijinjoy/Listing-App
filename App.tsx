
import React, { useState } from 'react';
import {
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';


function App(): JSX.Element {
  const [inputText, setInputText] = useState('');
  const [rows, setRows] = useState([]);

  const onSubmit = () => {
    if (inputText.trim() !== '') {
      setRows([...rows, { text: inputText }]);
      setInputText('');
    }
  }

  const onDelete = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          value={inputText}
          onChangeText={text => setInputText(text)}
          style={{ borderWidth: 1, width: 150, borderRadius: 10, color: 'black' }} />
        <Pressable style={{ borderWidth: 1, width: 70, backgroundColor: "grey", borderRadius: 10, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }} onPress={onSubmit}>
          <Text>Submit</Text>
        </Pressable>
      </View>
      {rows.map((row, index) => (
        <View key={index} style={{ flexDirection: "row", padding: 10 }}>
          <TextInput
            value={row.text}
            style={{ borderWidth: 1, width: 150, borderRadius: 10, color: 'black' }}
          />
          <Pressable style={{ borderWidth: 1, width: 70, backgroundColor: "grey", borderRadius: 10, marginHorizontal: 10, alignItems: 'center', justifyContent: "center" }}>
            <Text style={{ color: 'white' }}>Edit</Text>
          </Pressable>
          <Pressable style={{ borderWidth: 1, width: 70, backgroundColor: "grey", borderRadius: 10, marginHorizontal: 10, alignItems: "center", justifyContent: 'center' }}>
            <Text style={{ color: 'white' }} onPress={onDelete}>Delete</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}


export default App;
