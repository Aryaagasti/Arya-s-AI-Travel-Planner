import React, { useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const cleanResponse = (text) => {
    return text
      .replace(/\*\*/g, '')
      .replace(/#/g, '')
      .replace(/\*/g, '')
      .split('\n')
      .filter((line) => line.trim() !== '')
      .join('\n');
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    setMessages((prev) => [...prev, { text: userInput, sender: 'user' }]);
    setUserInput('');

    try {
      const response = await axios.post('https://travel-planner-ai-agent-1.onrender.com/api/chat', { message: userInput });
      const cleanedResponse = cleanResponse(response.data.response);

      setMessages((prev) => [...prev, { text: cleanedResponse, sender: 'bot' }]);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      setMessages((prev) => [
        ...prev,
        { text: 'Sorry, something went wrong. Please try again.', sender: 'bot' },
      ]);
    }
  };

  return (
    <div>
      <Button
        variant="primary"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          backgroundColor: '#1E3A8A',
          border: 'none',
          color: 'white'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </Button>

      {isOpen && (
        <Card
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '320px',
            height: '450px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            border: 'none',
            borderRadius: '15px',
            backgroundColor: '#F3F4F6'
          }}
        >
          <Card.Header
            className="d-flex justify-content-between align-items-center"
            style={{ backgroundColor: '#1E3A8A', color: 'white', borderRadius: '15px 15px 0 0' }}
          >
            <strong>Arya's AI Assistant</strong>
            <Button variant="link" style={{ color: 'white' }} onClick={() => setIsOpen(false)}>
              ✕
            </Button>
          </Card.Header>
          <Card.Body
            style={{
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              padding: '10px',
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.sender === 'user' ? '#1E3A8A' : '#E5E7EB',
                  color: msg.sender === 'user' ? '#fff' : '#000',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  maxWidth: '80%',
                }}
              >
                {msg.text}
              </div>
            ))}
          </Card.Body>
          <Card.Footer>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Type a message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button variant="primary" onClick={handleSendMessage} style={{ backgroundColor: '#1E3A8A', border: 'none' }}>
                Send
              </Button>
            </InputGroup>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
}

export default Chatbot;