import React, { useState } from 'react';

const Contact = () => {
  
  const DOCTORS = [
    {
        "id": 1,
        "name": "Dr. Sarah Jamade",
        "specialization": "Neurologist",
        "contact": "+91 9923567480",
        "email": "sarah.j@medcare.com",
        "address": "123 Medical St, Health City, nashik 429940",
        "availability": "Mon-Fri: 9AM-5PM",
        "experience": "15 years",
        "rating": 4.8,
        "fee": "₹1500",
        "symptoms": ["headache", "migraine", "dizziness", "seizures", "memory loss"],
        "image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 2,
        "name": "Dr. manish jadhav",
        "specialization": "Cardiologist",
        "contact": "+91 9923467590",
        "email": "manish.c@heartcare.com",
        "address": "456 Heart Ave, township, nashik 20002",
        "availability": "Mon-Sat: 10AM-6PM",
        "experience": "12 years",
        "rating": 4.9,
        "fee": "₹2000",
        "symptoms": ["chest pain", "palpitations", "shortness of breath", "high BP"],
        "image": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 3,
        "name": "Dr. Priya Sharma",
        "specialization": "Dermatologist",
        "contact": "+91 8899675437",
        "email": "priya.s@skincare.com",
        "address": "789 Skin Lane, Dermacity, nashik 30003",
        "availability": "Tue-Sat: 9AM-7PM",
        "experience": "10 years",
        "rating": 4.7,
        "fee": "₹1200",
        "symptoms": ["skin rash", "acne", "allergy", "itching", "eczema"],
        "image": "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 4,
        "name": "Dr. Rohit shinde",
        "specialization": "Orthopedic",
        "contact": "+91 9923468765",
        "email": "rohit.b@bonecare.com",
        "address": "101 Bone Street, Joint City, nashik 40004",
        "availability": "Mon-Fri: 8AM-4PM",
        "experience": "18 years",
        "rating": 4.9,
        "fee": "₹2500",
        "symptoms": ["joint pain", "back pain", "fracture", "arthritis", "sports injury"],
        "image": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 5,
        "name": "Dr. Lisa Wagh",
        "specialization": "Pediatrician",
        "contact": "+91 9967540065",
        "email": "lisa.w@childcare.com",
        "address": "202 Child Care Road, Kids Town, Kolkata 50005",
        "availability": "Mon-Sun: 10AM-8PM",
        "experience": "14 years",
        "rating": 4.8,
        "fee": "₹1000",
        "symptoms": ["child fever", "vaccination", "growth issues", "cough", "cold"],
        "image": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 6,
        "name": "Dr. Raj Patel",
        "specialization": "General Physician",
        "contact": "+91 8798675743",
        "email": "raj.p@familycare.com",
        "address": "303 Family Clinic, Care City, nashik 60006",
        "availability": "24/7 Emergency",
        "experience": "20 years",
        "rating": 4.9,
        "fee": "₹800",
        "symptoms": ["fever", "cold", "cough", "general checkup", "vaccination"],
        "image": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 7,
        "name": "Dr. Anjali Deshpande",
        "specialization": "Gynecologist",
        "contact": "+91-9876543210",
        "email": "anjali.d@womenscare.com",
        "address": "Women's Health Center, Mumbai",
        "availability": "Mon-Sat: 10AM-6PM",
        "experience": "12 years",
        "rating": 4.8,
        "fee": "₹1800",
        "symptoms": ["pregnancy", "menstrual", "pcos", "menopause", "women health"],
        "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face"

    },
    {
        "id": 8,
        "name": "Dr. Jayesh kadge",
        "specialization": "Gastroenterologist",
        "contact": "+91 7868567456",
        "email": "jayesh.w@digestcare.com",
        "address": "404 Digestive Center, Gut City, mumbai 70007",
        "availability": "Mon-Fri: 9AM-5PM",
        "experience": "16 years",
        "rating": 4.7,
        "fee": "₹2200",
        "symptoms": ["stomach pain", "vomiting", "diarrhea", "acid reflux", "ibs"],
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 9,
        "name": "Dr. Emily james",
        "specialization": "Psychiatrist",
        "contact": "+91 7986543298",
        "email": "emily.c@mentalhealth.com",
        "address": "505 Mind Clinic, Peace Town, PT 80008",
        "availability": "Tue-Sat: 11AM-7PM",
        "experience": "13 years",
        "rating": 4.9,
        "fee": "₹2800",
        "symptoms": ["anxiety", "depression", "stress", "insomnia", "mood swings"],
        "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 10,
        "name": "Dr. daksh kshetri",
        "specialization": "ENT Specialist",
        "contact": "+91 9978654390",
        "email": "daksh.k@entcare.com",
        "address": "606 ENT Center, Ear Nose Throat City, mumbai 90009",
        "availability": "Mon-Sat: 10AM-6PM",
        "experience": "11 years",
        "rating": 4.6,
        "fee": "₹1600",
        "symptoms": ["ear pain", "sore throat", "sinus", "hearing loss", "tonsillitis"],
        "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"

    },
    {
        "id": 11,
        "name": "Dr. mansi hengade",
        "specialization": "Endocrinologist",
        "contact": "+91 7986543298",
        "email": "mansi.r@hormonecare.com",
        "address": "707 Hormone Center, Balance City, nashik 10010",
        "availability": "Mon-Fri: 9AM-5PM",
        "experience": "14 years",
        "rating": 4.8,
        "fee": "₹2400",
        "symptoms": ["diabetes", "thyroid", "weight gain", "hormonal imbalance", "pcos"],
        "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 12,
        "name": "Dr. abhinav kasabe",
        "specialization": "Urologist",
        "contact": "+91 789654398",
        "email": "abhinav.s@urocare.com",
        "address": "808 Urology Center, Kidney City, kolkata 11011",
        "availability": "Mon-Sat: 9AM-6PM",
        "experience": "17 years",
        "rating": 4.7,
        "fee": "₹2600",
        "symptoms": ["urinary infection", "kidney stones", "prostate", "bladder issues"],
        "image": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 13,
        "name": "Dr. Sophia shinde",
        "specialization": "Ophthalmologist",
        "contact": "+91 9879897657",
        "email": "sophia.l@eyecare.com",
        "address": "909 Eye Care Center, Vision City, VC 12012",
        "availability": "Mon-Fri: 10AM-6PM",
        "experience": "15 years",
        "rating": 4.9,
        "fee": "₹1900",
        "symptoms": ["eye pain", "blurred vision", "red eyes", "cataract", "glaucoma"],
        "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 14,
        "name": "Dr. raghav ravi",
        "specialization": "Dentist",
        "contact": "+1-555-6677",
        "email": "raghav.b@dentalcare.com",
        "address": "1010 Dental Clinic, Smile City, mumbai 13013",
        "availability": "Mon-Sat: 9AM-7PM",
        "experience": "19 years",
        "rating": 4.8,
        "fee": "₹1200",
        "symptoms": ["toothache", "gum pain", "cavity", "teeth cleaning", "wisdom tooth"],
        "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 15,
        "name": "Dr. Fatima Khan",
        "specialization": "Pulmonologist",
        "contact": "+91-9876543211",
        "email": "fatima.k@lungcare.com",
        "address": "Lung Care Center, Delhi",
        "availability": "Mon-Sat: 10AM-6PM",
        "experience": "16 years",
        "rating": 4.7,
        "fee": "₹2100",
        "symptoms": ["asthma", "breathing difficulty", "chronic cough", "tb", "lung infection"],
        "image": "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 16,
        "name": "Dr. Arjun Mehta",
        "specialization": "Oncologist",
        "contact": "+91-9876543212",
        "email": "arjun.m@cancercare.com",
        "address": "Cancer Care Hospital, Bangalore",
        "availability": "Mon-Fri: 9AM-5PM",
        "experience": "18 years",
        "rating": 4.9,
        "fee": "₹3500",
        "symptoms": ["cancer screening", "chemotherapy", "tumor", "cancer treatment"],
        "image": "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 17,
        "name": "Dr. Nisha Verma",
        "specialization": "Rheumatologist",
        "contact": "+91-9876543213",
        "email": "nisha.v@jointcare.com",
        "address": "Arthritis Center, Chennai",
        "availability": "Mon-Sat: 10AM-6PM",
        "experience": "14 years",
        "rating": 4.6,
        "fee": "₹2300",
        "symptoms": ["arthritis", "joint swelling", "lupus", "autoimmune", "fibromyalgia"],
        "image": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 18,
        "name": "Dr. Sanjay Kumar",
        "specialization": "Nephrologist",
        "contact": "+91-9876543214",
        "email": "sanjay.k@kidneycare.com",
        "address": "Kidney Hospital, Hyderabad",
        "availability": "Mon-Fri: 9AM-5PM",
        "experience": "17 years",
        "rating": 4.8,
        "fee": "₹2700",
        "symptoms": ["kidney disease", "dialysis", "kidney failure", "urinary problems"],
        "image": "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 19,
        "name": "Dr. Meera Reddy",
        "specialization": "Hematologist",
        "contact": "+91-9876543215",
        "email": "meera.r@bloodcare.com",
        "address": "Blood Disorder Center, Kolkata",
        "availability": "Mon-Sat: 10AM-6PM",
        "experience": "15 years",
        "rating": 4.7,
        "fee": "₹2900",
        "symptoms": ["anemia", "blood cancer", "bleeding disorder", "clotting issues"],
        "image": "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 20,
        "name": "Dr. Vikram Singh",
        "specialization": "Surgeon",
        "contact": "+91-9876543216",
        "email": "vikram.s@surgerycare.com",
        "address": "Surgical Center, Pune",
        "availability": "24/7 Emergency",
        "experience": "21 years",
        "rating": 4.9,
        "fee": "₹4000",
        "symptoms": ["surgery", "appendicitis", "gallstones", "hernia", "emergency surgery"],
        "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face"
    },
    {
        "id": 21,
        "name": "Dr. Maya shinde",
        "specialization": "Dermatologist",
        "contact": "+91 8979678989",
        "email": "maya.m@skinspecialist.com",
        "address": "111 Skin Care Center, Glow City, GC 14014",
        "availability": "Mon-Fri: 10AM-7PM",
        "experience": "9 years",
        "rating": 4.5,
        "fee": "₹1100",
        "symptoms": ["psoriasis", "vitiligo", "hives", "skin infection", "hair fall"],
        "image": "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const SYMPTOM_SPECIALIZATION = {
    "headache": "Neurologist",
    "migraine": "Neurologist",
    "dizziness": "Neurologist",
    "seizures": "Neurologist",
    "memory loss": "Neurologist",
    "chest pain": "Cardiologist",
    "palpitations": "Cardiologist",
    "shortness of breath": "Cardiologist",
    "high BP": "Cardiologist",
    "skin rash": "Dermatologist",
    "acne": "Dermatologist",
    "allergy": "Dermatologist",
    "itching": "Dermatologist",
    "eczema": "Dermatologist",
    "joint pain": "Orthopedic",
    "back pain": "Orthopedic",
    "fracture": "Orthopedic",
    "arthritis": "Orthopedic",
    "sports injury": "Orthopedic",
    "child fever": "Pediatrician",
    "vaccination": "Pediatrician",
    "growth issues": "Pediatrician",
    "fever": "General Physician",
    "cold": "General Physician",
    "cough": "General Physician",
    "general checkup": "General Physician",
    "pregnancy": "Gynecologist",
    "menstrual": "Gynecologist",
    "pcos": "Gynecologist",
    "menopause": "Gynecologist",
    "stomach pain": "Gastroenterologist",
    "vomiting": "Gastroenterologist",
    "diarrhea": "Gastroenterologist",
    "acidity": "Gastroenterologist",
    "constipation": "Gastroenterologist",
    "anxiety": "Psychiatrist",
    "depression": "Psychiatrist",
    "stress": "Psychiatrist",
    "insomnia": "Psychiatrist",
    "mood swings": "Psychiatrist",
    "eye pain": "Ophthalmologist",
    "blurred vision": "Ophthalmologist",
    "red eyes": "Ophthalmologist",
    "eye infection": "Ophthalmologist",
    "ear pain": "ENT Specialist",
    "sore throat": "ENT Specialist",
    "sinus": "ENT Specialist",
    "hearing loss": "ENT Specialist",
    "tonsillitis": "ENT Specialist",
    "urinary pain": "Urologist",
    "kidney stones": "Urologist",
    "UTI": "Urologist",
    "prostate": "Urologist",
    "incontinence": "Urologist",
    "diabetes": "Endocrinologist",
    "thyroid": "Endocrinologist",
    "weight gain": "Endocrinologist",
    "fatigue": "Endocrinologist",
    "hormonal imbalance": "Endocrinologist",
    "asthma": "Pulmonologist",
    "breathing difficulty": "Pulmonologist",
    "chest congestion": "Pulmonologist",
    "lung infection": "Pulmonologist",
    "cancer screening": "Oncologist",
    "chemotherapy": "Oncologist",
    "tumor": "Oncologist",
    "biopsy": "Oncologist",
    "cancer treatment": "Oncologist"
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    symptom: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [recommendedDoctors, setRecommendedDoctors] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const allSymptoms = Object.keys(SYMPTOM_SPECIALIZATION);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (name === 'symptom' && showRecommendations) {
      setShowRecommendations(false);
      setRecommendedDoctors([]);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.symptom.trim()) {
      newErrors.symptom = 'Please select your symptom';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const findRecommendedDoctors = (symptom) => {
    const specialization = SYMPTOM_SPECIALIZATION[symptom];
    if (!specialization) return [];
    
    return DOCTORS.filter(doctor => 
      doctor.specialization === specialization || 
      doctor.symptoms.includes(symptom)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      
      const doctors = findRecommendedDoctors(formData.symptom);
      setRecommendedDoctors(doctors);
      setShowRecommendations(true);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      symptom: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
    setShowRecommendations(false);
    setRecommendedDoctors([]);
  };

  const handleBookAppointment = (doctorId) => {
    alert(`Appointment booked with doctor ID: ${doctorId}\nWe will contact you shortly at ${formData.email}`);
    handleReset();
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif"
    },
    heading: {
      color: '#333',
      marginBottom: '1rem',
      fontSize: '2.5rem',
      textAlign: 'center'
    },
    description: {
      color: '#666',
      marginBottom: '2rem',
      fontSize: '1.1rem',
      lineHeight: '1.6',
      textAlign: 'center'
    },
    form: {
      background: '#f9f9f9',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '600',
      color: '#333'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease'
    },
    select: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      backgroundColor: 'white'
    },
    inputFocus: {
      outline: 'none',
      borderColor: '#007bff',
      boxShadow: '0 0 0 2px rgba(0, 123, 255, 0.25)'
    },
    inputError: {
      borderColor: '#dc3545'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      resize: 'vertical',
      minHeight: '150px'
    },
    errorMessage: {
      color: '#dc3545',
      fontSize: '0.875rem',
      marginTop: '0.25rem',
      display: 'block'
    },
    formActions: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2rem'
    },
    submitButton: {
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      backgroundColor: '#007bff',
      color: 'white'
    },
    resetButton: {
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      backgroundColor: '#6c757d',
      color: 'white'
    },
    successMessage: {
      textAlign: 'center',
      background: '#d4edda',
      color: '#155724',
      padding: '2rem',
      borderRadius: '8px',
      border: '1px solid #c3e6cb',
      marginBottom: '2rem'
    },
    successHeading: {
      marginBottom: '1rem',
      color: '#155724'
    },
    recommendations: {
      marginTop: '2rem'
    },
    recommendationsTitle: {
      color: '#333',
      marginBottom: '1.5rem',
      fontSize: '1.5rem'
    },
    doctorGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    doctorCard: {
      background: 'white',
      borderRadius: '8px',
      padding: '1.5rem',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease'
    },
    doctorHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    doctorImage: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginRight: '1rem'
    },
    doctorName: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#333',
      marginBottom: '0.25rem'
    },
    doctorSpecialization: {
      color: '#007bff',
      fontSize: '1rem',
      marginBottom: '0.25rem'
    },
    doctorRating: {
      color: '#ffc107',
      fontWeight: '600'
    },
    doctorDetails: {
      marginTop: '1rem'
    },
    detailItem: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
      fontSize: '0.9rem'
    },
    detailLabel: {
      color: '#666',
      fontWeight: '500'
    },
    detailValue: {
      color: '#333'
    },
    bookButton: {
      width: '100%',
      padding: '0.75rem',
      marginTop: '1rem',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'background-color 0.3s ease'
    },
    buttonHover: {
      submit: { backgroundColor: '#0056b3' },
      reset: { backgroundColor: '#545b62' },
      book: { backgroundColor: '#218838' }
    },
    noDoctors: {
      textAlign: 'center',
      color: '#666',
      padding: '2rem',
      background: '#f8f9fa',
      borderRadius: '8px'
    },
    contactInfo: {
      marginTop: '3rem',
      paddingTop: '2rem',
      borderTop: '1px solid #eee'
    },
    infoHeading: {
      color: '#333',
      marginBottom: '1.5rem',
      textAlign: 'center'
    },
    infoItems: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      textAlign: 'center'
    },
    infoItem: {
      marginBottom: '1rem'
    },
    itemHeading: {
      color: '#007bff',
      marginBottom: '0.5rem',
      fontSize: '1.25rem'
    },
    itemText: {
      color: '#666',
      lineHeight: '1.5'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us & Doctor Consultation</h1>
      <p style={styles.description}>
        Describe your symptoms and get personalized doctor recommendations. Fill out the form below and we'll help you find the right specialist.
      </p>

      {isSubmitted && showRecommendations ? (
        <div>
          <div style={styles.successMessage}>
            <h2 style={styles.successHeading}>Thank You for Your Submission!</h2>
            <p>Based on your symptoms, here are our recommended doctors:</p>
            <button 
              onClick={handleReset} 
              style={styles.resetButton}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.reset.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.resetButton.backgroundColor}
            >
              Submit Another Query
            </button>
          </div>

          <div style={styles.recommendations}>
            <h3 style={styles.recommendationsTitle}>Recommended Doctors for "{formData.symptom}"</h3>
            
            {recommendedDoctors.length > 0 ? (
              <div style={styles.doctorGrid}>
                {recommendedDoctors.map(doctor => (
                  <div key={doctor.id} style={styles.doctorCard}>
                    <div style={styles.doctorHeader}>
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        style={styles.doctorImage}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/150';
                        }}
                      />
                      <div>
                        <div style={styles.doctorName}>{doctor.name}</div>
                        <div style={styles.doctorSpecialization}>{doctor.specialization}</div>
                        <div style={styles.doctorRating}>⭐ {doctor.rating} • {doctor.experience}</div>
                      </div>
                    </div>
                    
                    <div style={styles.doctorDetails}>
                      <div style={styles.detailItem}>
                        <span style={styles.detailLabel}>Fee:</span>
                        <span style={styles.detailValue}>{doctor.fee}</span>
                      </div>
                      <div style={styles.detailItem}>
                        <span style={styles.detailLabel}>Contact:</span>
                        <span style={styles.detailValue}>{doctor.contact}</span>
                      </div>
                      <div style={styles.detailItem}>
                        <span style={styles.detailLabel}>Availability:</span>
                        <span style={styles.detailValue}>{doctor.availability}</span>
                      </div>
                      <div style={styles.detailItem}>
                        <span style={styles.detailLabel}>Address:</span>
                        <span style={styles.detailValue}>{doctor.address}</span>
                      </div>
                    </div>
                    
                    <button 
                      style={styles.bookButton}
                      onClick={() => handleBookAppointment(doctor.id)}
                      onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.book.backgroundColor}
                      onMouseLeave={(e) => e.target.style.backgroundColor = styles.bookButton.backgroundColor}
                    >
                      Book Appointment
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div style={styles.noDoctors}>
                <p>No doctors found for your symptom. Please contact our support team.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.name ? styles.inputError : {})
              }}
              placeholder="Enter your full name"
              // onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
              // onBlur={(e) => e.target.style = styles.input}
            />
            {errors.name && <span style={styles.errorMessage}>{errors.name}</span>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.email ? styles.inputError : {})
              }}
              placeholder="Enter your email"
              // onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
              // onBlur={(e) => e.target.style = styles.input}
            />
            {errors.email && <span style={styles.errorMessage}>{errors.email}</span>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="symptom" style={styles.label}>Select Your Symptom *</label>
            <select
              id="symptom"
              name="symptom"
              value={formData.symptom}
              onChange={handleChange}
              style={{
                ...styles.select,
                ...(errors.symptom ? styles.inputError : {})
              }}
              // onFocus={(e) => e.target.style = { ...styles.select, ...styles.inputFocus }}
              // onBlur={(e) => e.target.style = styles.select}
            >
              <option value="">Select a symptom</option>
              {allSymptoms.map(symptom => (
                <option key={symptom} value={symptom}>
                  {symptom.charAt(0).toUpperCase() + symptom.slice(1)}
                </option>
              ))}
            </select>
            {errors.symptom && <span style={styles.errorMessage}>{errors.symptom}</span>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Describe Your Condition *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                ...styles.textarea,
                ...(errors.message ? styles.inputError : {})
              }}
              placeholder="Please describe your symptoms in detail..."
              rows="6"
              // onFocus={(e) => e.target.style = { ...styles.textarea, ...styles.inputFocus }}
              // onBlur={(e) => e.target.style = styles.textarea}
            />
            {errors.message && <span style={styles.errorMessage}>{errors.message}</span>}
          </div>

          <div style={styles.formActions}>
            <button 
              type="submit" 
              style={styles.submitButton}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.submit.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.submitButton.backgroundColor}
            >
              Find Doctors & Submit
            </button>
            <button 
              type="button" 
              onClick={handleReset} 
              style={styles.resetButton}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.reset.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.resetButton.backgroundColor}
            >
              Clear Form
            </button>
          </div>
        </form>
      )}

      <div style={styles.contactInfo}>
        <h2 style={styles.infoHeading}>Other Ways to Reach Us</h2>
        <div style={styles.infoItems}>
          <div style={styles.infoItem}>
            <h3 style={styles.itemHeading}>Emergency Contact</h3>
            <p style={styles.itemText}>+1-800-MED-CARE</p>
          </div>
          <div style={styles.infoItem}>
            <h3 style={styles.itemHeading}>General Support</h3>
            <p style={styles.itemText}>support@medcare.com</p>
          </div>
          <div style={styles.infoItem}>
            <h3 style={styles.itemHeading}>24/7 Helpline</h3>
            <p style={styles.itemText}>+91-9876543210</p>
          </div>
          <div style={styles.infoItem}>
            <h3 style={styles.itemHeading}>Address</h3>
            <p style={styles.itemText}>
              MedCare Headquarters<br />
              456 Health Avenue<br />
              Medical City, MC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;