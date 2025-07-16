import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, Text, ScrollView, View } from 'react-native';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [lang, setLang] = useState("en");

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = { type: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const res = await fetch("https://your-backend-url/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, lang })
      });

      const data = await res.json();
      const botMessage = { type: 'bot', text: data.reply };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { type: 'bot', text: '⚠️ Server error. Please try again.' }]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        {messages.map((msg, index) => (
          <View key={index} style={{ marginVertical: 5 }}>
            <Text style={{ color: msg.type === 'user' ? 'blue' : 'green' }}>
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Type your question"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Send" onPress={sendMessage} />
    </SafeAreaView>
  );
}

