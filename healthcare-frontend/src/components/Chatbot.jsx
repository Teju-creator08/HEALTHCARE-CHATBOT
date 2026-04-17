import React, { useState, useEffect, useRef } from 'react';
import { 
    Box, 
    TextField, 
    Button, 
    Paper, 
    Typography,
    Avatar,
    IconButton,
    Chip,
    Card,
    CardContent,
    CardActions,
    Rating,
    CircularProgress
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';
import { chatWithBot } from '../services/api';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { 
            text: "Hello! I'm Dr. AI, your healthcare assistant. How can I help you today? Please describe your symptoms.", 
            sender: 'bot',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [input, setInput] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    
    const quickSymptoms = [
        'Headache', 'Fever', 'Cough', 'Stomach Pain', 
        'Skin Rash', 'Back Pain', 'Cold', 'Allergy',
        'pregnancy','anxiety','diabetes','urinary infection'
    ];

    
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { 
            text: input, 
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);
        
        try {
            const response = await chatWithBot(input);
            
            if (response && response.success !== false) {
                setTimeout(() => {
                    setMessages(prev => [...prev, { 
                        text: response.reply, 
                        sender: 'bot',
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }]);
                    setDoctors(response.doctors || []);
                    setIsTyping(false);
                }, 1000); // Simulate typing delay
            } else {
                setMessages(prev => [...prev, { 
                    text: "I apologize, I'm having trouble connecting. Please try again.", 
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }]);
                setIsTyping(false);
            }
        } catch (error) {
            setMessages(prev => [...prev, { 
                text: "Network error. Please check your connection and try again.", 
                sender: 'bot',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
            setIsTyping(false);
        }
    };

    const handleQuickSymptom = (symptom) => {
        setInput(`I have ${symptom.toLowerCase()}`);
    };

    const downloadChatHistory = () => {
        const chatText = messages.map(msg => 
            `${msg.sender === 'user' ? 'You' : 'Dr. AI'} (${msg.time}): ${msg.text}`
        ).join('\n\n');
        
        const blob = new Blob([chatText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `healthcare-chat-${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const clearChat = () => {
        setMessages([{ 
            text: "Hello! I'm Dr. AI, your healthcare assistant. How can I help you today?", 
            sender: 'bot',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setDoctors([]);
    };

    return (
        <Box sx={{ 
            maxWidth: 900, 
            margin: 'auto', 
            p: { xs: 1, md: 2 },
            minHeight: '85vh'
        }}>
            {/* Header */}
            <Paper elevation={3} sx={{ 
                p: 3, 
                mb: 3, 
                borderRadius: 3,
                background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                color: 'white'
            }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <Avatar sx={{ 
                            bgcolor: 'white', 
                            color: 'primary.main',
                            width: 56,
                            height: 56,
                            mr: 2
                        }}>
                            <SmartToyIcon fontSize="large" />
                        </Avatar>
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                Dr. AI Assistant
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                24/7 Healthcare Support • Instant Doctor Recommendations
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Button 
                            variant="outlined" 
                            onClick={downloadChatHistory}
                            startIcon={<DownloadIcon />}
                            sx={{ 
                                color: 'white', 
                                borderColor: 'white',
                                mr: 1,
                                '&:hover': {
                                    borderColor: 'white',
                                    backgroundColor: 'rgba(255,255,255,0.1)'
                                }
                            }}
                        >
                            Save Chat
                        </Button>
                        <Button 
                            variant="outlined" 
                            onClick={clearChat}
                            sx={{ 
                                color: 'white', 
                                borderColor: 'white',
                                '&:hover': {
                                    borderColor: 'white',
                                    backgroundColor: 'rgba(255,255,255,0.1)'
                                }
                            }}
                        >
                            Clear
                        </Button>
                    </Box>
                </Box>
            </Paper>

            <Box display="flex" gap={3} flexDirection={{ xs: 'column', md: 'row' }}>
               
                <Paper elevation={3} sx={{ 
                    flex: 2, 
                    p: 2, 
                    borderRadius: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '70vh'
                }}>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                            Quick Symptoms:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {quickSymptoms.map((symptom, idx) => (
                                <Chip
                                    key={idx}
                                    label={symptom}
                                    clickable
                                    onClick={() => handleQuickSymptom(symptom)}
                                    variant="outlined"
                                    size="small"
                                    sx={{ 
                                        borderRadius: 2,
                                        '&:hover': {
                                            backgroundColor: 'primary.light',
                                            color: 'white'
                                        }
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ 
                        flex: 1, 
                        overflowY: 'auto', 
                        p: 2, 
                        bgcolor: '#f8f9fa',
                        borderRadius: 2,
                        mb: 2
                    }}>
                        {messages.map((msg, idx) => (
                            <Box 
                                key={idx}
                                sx={{ 
                                    display: 'flex',
                                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    mb: 2,
                                    animation: 'fadeIn 0.3s ease-in'
                                }}
                            >
                                <Box sx={{ maxWidth: '80%' }}>
                                    <Box sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center',
                                        mb: 0.5,
                                        justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                                    }}>
                                        <Avatar sx={{ 
                                            width: 24, 
                                            height: 24, 
                                            mr: 1,
                                            bgcolor: msg.sender === 'user' ? 'primary.main' : 'secondary.main'
                                        }}>
                                            {msg.sender === 'user' ? <PersonIcon fontSize="small" /> : <SmartToyIcon fontSize="small" />}
                                        </Avatar>
                                        <Typography variant="caption" color="text.secondary">
                                            {msg.sender === 'user' ? 'You' : 'Dr. AI'} • {msg.time}
                                        </Typography>
                                    </Box>
                                    <Paper 
                                        elevation={1}
                                        sx={{ 
                                            p: 2,
                                            bgcolor: msg.sender === 'user' ? 'primary.main' : 'white',
                                            color: msg.sender === 'user' ? 'white' : 'text.primary',
                                            borderRadius: 2,
                                            borderTopLeftRadius: msg.sender === 'user' ? 12 : 2,
                                            borderTopRightRadius: msg.sender === 'user' ? 2 : 12,
                                        }}
                                    >
                                        <Typography variant="body1">
                                            {msg.text}
                                        </Typography>
                                    </Paper>
                                </Box>
                            </Box>
                        ))}
                        
                        {isTyping && (
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar sx={{ width: 24, height: 24, mr: 1, bgcolor: 'secondary.main' }}>
                                    <SmartToyIcon fontSize="small" />
                                </Avatar>
                                <Paper sx={{ p: 1.5, borderRadius: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <CircularProgress size={16} sx={{ mr: 1 }} />
                                        <Typography variant="body2">
                                            Dr. AI is analyzing your symptoms...
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Box>
                        )}
                        
                        <div ref={messagesEndRef} />
                    </Box>

                    
                    <Box display="flex" gap={1} sx={{ mt: 'auto' }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Describe your symptoms (e.g., 'I have headache and fever since morning')..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            multiline
                            maxRows={3}
                            size="small"
                        />
                        <IconButton 
                            color="primary" 
                            onClick={handleSend}
                            disabled={!input.trim() || isTyping}
                            sx={{ 
                                bgcolor: 'primary.main', 
                                color: 'white', 
                                width: 56,
                                height: 56,
                                '&:hover': { bgcolor: 'primary.dark' },
                                '&.Mui-disabled': {
                                    bgcolor: 'grey.300'
                                }
                            }}
                        >
                            <SendIcon />
                        </IconButton>
                    </Box>
                </Paper>

                <Box sx={{ flex: 1, minWidth: 300 }}>
                    <Paper elevation={3} sx={{ 
                        p: 3, 
                        borderRadius: 3,
                        height: '70vh',
                        overflowY: 'auto',
                        bgcolor: '#f8f9fa'
                    }}>
                        <Typography variant="h6" gutterBottom sx={{ 
                            fontWeight: 'bold',
                            color: 'primary.main',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <MedicalServicesIcon sx={{ mr: 1 }} />
                            {doctors.length > 0 ? 'Recommended Doctors' : 'Available Specialists'}
                        </Typography>
                        
                        {doctors.length > 0 ? (
                            <Box sx={{ mt: 2 }}>
                                {doctors.map((doctor) => (
                                    <Card key={doctor.id} sx={{ 
                                        mb: 2, 
                                        borderRadius: 2,
                                        transition: '0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: 4
                                        }
                                    }}>
                                        <CardContent>
                                            <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                                                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                                                    {doctor.name}
                                                </Typography>
                                                <Chip 
                                                    label={doctor.specialization} 
                                                    size="small" 
                                                    color="primary"
                                                    variant="outlined"
                                                />
                                            </Box>
                                            
                                            <Rating 
                                                value={doctor.rating || 4.5} 
                                                readOnly 
                                                precision={0.5} 
                                                size="small" 
                                                sx={{ my: 1 }}
                                            />
                                            
                                            <Box sx={{ mt: 1 }}>
                                                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                                    <PhoneIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
                                                    {doctor.contact}
                                                </Typography>
                                                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                                    <LocationOnIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
                                                    {doctor.address}
                                                </Typography>
                                                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <AccessTimeIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
                                                    {doctor.availability}
                                                </Typography>
                                            </Box>
                                            
                                            {doctor.experience && (
                                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                                    Experience: {doctor.experience}
                                                </Typography>
                                            )}
                                            
                                            {doctor.fee && (
                                                <Typography variant="h6" color="success.main" sx={{ mt: 1 }}>
                                                    Consultation: {doctor.fee}
                                                </Typography>
                                            )}
                                        </CardContent>
                                        <CardActions>
                                            <Button 
                                                size="small" 
                                                variant="contained" 
                                                fullWidth
                                                startIcon={<PhoneIcon />}
                                                sx={{ borderRadius: 2 }}
                                                onClick={() => window.open(`tel:${doctor.contact}`)}
                                            >
                                                Call Now
                                            </Button>
                                        </CardActions>
                                    </Card>
                                ))}
                            </Box>
                        ) : (
                            <Box sx={{ 
                                textAlign: 'center', 
                                py: 8,
                                color: 'text.secondary'
                            }}>
                                <MedicalServicesIcon sx={{ fontSize: 60, opacity: 0.3, mb: 2 }} />
                                <Typography variant="body1">
                                    Describe your symptoms to get doctor recommendations
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Our AI will analyze and suggest the right specialists
                                </Typography>
                            </Box>
                        )}
                        
                        
                        <Paper elevation={0} sx={{ 
                            mt: 3, 
                            p: 2, 
                            bgcolor: '#fff3cd',
                            border: '1px solid #ffeaa7',
                            borderRadius: 2
                        }}>
                            <Typography variant="subtitle2" color="warning.dark" sx={{ fontWeight: 'bold' }}>
                                🚨 Emergency Notice
                            </Typography>
                            <Typography variant="body2" color="warning.dark">
                                For emergencies like chest pain, difficulty breathing, or severe bleeding, 
                                call emergency services immediately.
                            </Typography>
                        </Paper>
                    </Paper>
                </Box>
            </Box>

            {/* CSS Animation */}
            <style jsx="true">{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </Box>
    );
};

export default Chatbot;



// import React, { useState } from 'react';
// import { 
//     Box, 
//     TextField, 
//     Button, 
//     Paper, 
//     Typography,
//     Avatar,
//     IconButton 
// } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
// import { chatWithBot } from '../services/api';

// const Chatbot = () => {
//     const [messages, setMessages] = useState([
//         { text: "Hello! I'm your healthcare assistant. How can I help you today?", sender: 'bot' }
//     ]);
//     const [input, setInput] = useState('');
//     const [doctors, setDoctors] = useState([]);

//     const handleSend = async () => {
//         if (!input.trim()) return;

//         // Add user message
//         const userMessage = { text: input, sender: 'user' };
//         setMessages([...messages, userMessage]);
        
//         // Get bot response
//         const response = await chatWithBot(input);
        
//         if (response) {
//             setMessages(prev => [...prev, { text: response.reply, sender: 'bot' }]);
//             setDoctors(response.doctors || []);
//         }
        
//         setInput('');
//     };

//     return (
//         <Box sx={{ maxWidth: 800, margin: 'auto', p: 2 }}>
//             <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
//                 <Box display="flex" alignItems="center" mb={2}>
//                     <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
//                         <MedicalServicesIcon />
//                     </Avatar>
//                     <Typography variant="h6">Healthcare Assistant</Typography>
//                 </Box>
                
//                 {/* Chat messages */}
//                 <Box sx={{ height: 400, overflowY: 'auto', mb: 2, p: 2, bgcolor: '#f5f5f5' }}>
//                     {messages.map((msg, idx) => (
//                         <Box 
//                             key={idx}
//                             sx={{ 
//                                 display: 'flex',
//                                 justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
//                                 mb: 2
//                             }}
//                         >
//                             <Paper 
//                                 sx={{ 
//                                     p: 2,
//                                     maxWidth: '70%',
//                                     bgcolor: msg.sender === 'user' ? 'primary.light' : 'white'
//                                 }}
//                             >
//                                 <Typography>{msg.text}</Typography>
//                             </Paper>
//                         </Box>
//                     ))}
//                 </Box>
                
//                 {/* Input area */}
//                 <Box display="flex" gap={1}>
//                     <TextField
//                         fullWidth
//                         variant="outlined"
//                         placeholder="Describe your symptoms..."
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                     />
//                     <IconButton 
//                         color="primary" 
//                         onClick={handleSend}
//                         sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}
//                     >
//                         <SendIcon />
//                     </IconButton>
//                 </Box>
//             </Paper>
            
//             {/* Recommended Doctors */}
//             {doctors.length > 0 && (
//                 <Box>
//                     <Typography variant="h6" gutterBottom>Recommended Doctors:</Typography>
//                     <Box display="flex" gap={2} flexWrap="wrap">
//                         {doctors.map((doctor) => (
//                             <Paper key={doctor.id} sx={{ p: 2, flex: 1, minWidth: 250 }}>
//                                 <Typography variant="h6" color="primary">{doctor.name}</Typography>
//                                 <Typography variant="subtitle1">{doctor.specialization}</Typography>
//                                 <Typography variant="body2">📞 {doctor.contact}</Typography>
//                                 <Typography variant="body2">📍 {doctor.address}</Typography>
//                                 <Typography variant="body2">⏰ {doctor.availability}</Typography>
//                             </Paper>
//                         ))}
//                     </Box>
//                 </Box>
//             )}
//         </Box>
//     );
// };

// export default Chatbot;

