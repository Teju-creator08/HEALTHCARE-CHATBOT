import json
import random
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class HealthcareChatbot:
    def __init__(self):
        self.load_data()
        self.vectorizer = CountVectorizer()
        
    def load_data(self):
        # Load intents
        with open('chatbot/intents.json', 'r') as f:
            self.intents = json.load(f)
            
        # Create training data
        self.patterns = []
        self.responses = []
        self.tags = []
        
        for intent in self.intents['intents']:
            for pattern in intent['patterns']:
                self.patterns.append(pattern.lower())
                self.responses.append(intent['responses'])
                self.tags.append(intent['tag'])
                
        # Train vectorizer
        self.X = self.vectorizer.fit_transform(self.patterns)
        
    def get_response(self, user_input):
        # Vectorize input
        input_vec = self.vectorizer.transform([user_input.lower()])
        
        # Calculate similarities
        similarities = cosine_similarity(input_vec, self.X)
        best_match_idx = np.argmax(similarities)
        
        if similarities[0][best_match_idx] > 0.5:
            return random.choice(self.responses[best_match_idx])
        else:
            return "I'm not sure I understand. Could you please describe your symptoms in more detail?"