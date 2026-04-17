from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from doctors_data import DOCTORS, SYMPTOM_SPECIALIZATION
import re

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Load intents
with open('chatbot/intents.json', 'r') as f:
    INTENTS = json.load(f)

@app.route('/')
def home():
    return jsonify({
        "message": "Healthcare Chatbot API",
        "endpoints": {
            "POST /chat": "Chat with medical bot",
            "GET /doctors": "Get all doctors",
            "GET /doctors/<specialization>": "Get doctors by specialization"
        }
    })

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message', '').lower()
        
        # Get chatbot response
        bot_response = get_chatbot_response(user_message)
        
        # Get recommended doctors
        recommended_doctors = get_recommended_doctors(user_message)
        
        # Get suggested specialization
        suggested_specialization = get_suggested_specialization(user_message)
        
        response = {
            "success": True,
            "reply": bot_response,
            "doctors": recommended_doctors,
            "suggested_specialization": suggested_specialization,
            "quick_advice": get_quick_advice(user_message)
        }
        
        return jsonify(response)
        
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/doctors', methods=['GET'])
def get_all_doctors():
    specialization = request.args.get('specialization', '')
    
    if specialization:
        filtered = [doc for doc in DOCTORS if doc['specialization'].lower() == specialization.lower()]
        return jsonify({"doctors": filtered})
    
    return jsonify({"doctors": DOCTORS})

@app.route('/doctors/<specialization>', methods=['GET'])
def get_doctors_by_specialization(specialization):
    filtered = [doc for doc in DOCTORS if doc['specialization'].lower() == specialization.lower()]
    return jsonify({"doctors": filtered})

def get_chatbot_response(message):
    # Check for greetings
    if any(word in message for word in ['hello', 'hi', 'hey', 'good']):
        return "Hello! I'm your healthcare assistant. Please describe your symptoms so I can help you."
    
    # Check for specific symptoms in intents
    for intent in INTENTS['intents']:
        for pattern in intent['patterns']:
            if re.search(r'\b' + pattern.lower() + r'\b', message):
                import random
                return random.choice(intent['responses'])
    
    # Check for medical keywords
    medical_keywords = {
        'headache': "Headaches can be caused by stress, dehydration, or migraines. Rest in a dark room and stay hydrated. If severe or persistent, consult a neurologist.",
        'fever': "Monitor your temperature. Rest, drink plenty of fluids. If fever is above 102°F or lasts more than 3 days, see a doctor immediately.",
        'cough': "Stay hydrated, use honey in warm water, avoid cold drinks. If cough persists beyond a week or you have breathing difficulty, consult a pulmonologist.",
        'pain': "Please specify the pain location. For chest pain or severe abdominal pain, seek emergency care immediately.",
        'cold': "Get plenty of rest, drink warm fluids, use steam inhalation. If symptoms worsen, consult a general physician.",
        'stomach': "For stomach issues, avoid spicy food, eat light meals. If you have severe pain or vomiting, see a gastroenterologist."
    }
    
    for keyword, response in medical_keywords.items():
        if keyword in message.lower():
            return response
    
    return "I understand you're not feeling well. Could you please describe your symptoms in more detail? Example: 'I have headache and fever since morning'"

def get_recommended_doctors(symptoms):
    recommended = []
    
    # Check each doctor's symptoms
    for doctor in DOCTORS:
        for symptom in doctor['symptoms']:
            if symptom in symptoms.lower():
                if doctor not in recommended:
                    recommended.append(doctor)
                break
    
    # If no direct match, find by specialization
    if not recommended:
        specialization = get_suggested_specialization(symptoms)
        if specialization:
            recommended = [doc for doc in DOCTORS if doc['specialization'] == specialization][:2]
    
    return recommended[:3]  # Return max 3 doctors

def get_suggested_specialization(symptoms):
    for symptom, specialization in SYMPTOM_SPECIALIZATION.items():
        if symptom in symptoms.lower():
            return specialization
    
    # Common patterns
    if any(word in symptoms.lower() for word in ['head', 'migraine', 'dizzy']):
        return "Neurologist"
    elif any(word in symptoms.lower() for word in ['chest', 'heart', 'bp', 'blood pressure']):
        return "Cardiologist"
    elif any(word in symptoms.lower() for word in ['skin', 'rash', 'acne', 'allergy']):
        return "Dermatologist"
    elif any(word in symptoms.lower() for word in ['bone', 'joint', 'back', 'fracture']):
        return "Orthopedic"
    elif any(word in symptoms.lower() for word in ['child', 'baby', 'kid']):
        return "Pediatrician"
    
    return "General Physician"

def get_quick_advice(symptoms):
    advice_map = {
        'headache': "• Rest in a quiet, dark room\n• Stay hydrated\n• Avoid screen time\n• Apply cold compress",
        'fever': "• Monitor temperature regularly\n• Drink plenty of fluids\n• Take rest\n• Use light clothing",
        'cough': "• Drink warm water with honey\n• Avoid cold drinks\n• Use steam inhalation\n• Rest your voice",
        'emergency': "🚨 If you experience: Chest pain, Difficulty breathing, Severe bleeding, or Loss of consciousness - Call emergency services IMMEDIATELY!"
    }
    
    for key in advice_map:
        if key in symptoms.lower():
            return advice_map[key]
    
    if any(word in symptoms.lower() for word in ['chest', 'severe', 'emergency', 'unconscious']):
        return advice_map['emergency']
    
    return "• Drink plenty of water\n• Get adequate rest\n• Monitor your symptoms\n• Seek medical help if symptoms worsen"


if __name__ == '__main__':
    print("🚀 Healthcare Chatbot Server Starting...")
    print("📡 API running on http://localhost:5000")
    app.run(debug=True, port=5000)