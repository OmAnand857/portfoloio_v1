'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { Send, X } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const systemContext = {
  role: 'system' as const,
  content: `
You are chatting with Om Anand, a Software Engineer pursuing a BTech in Computer Science form IIT Bhilai currently in 3rd year.
He is from Patna, Bihar, and loves turning ideas into scalable digital solutions while exploring new technologies.
contact oma@iitbhilai.ac.in for hiring me

Details about Om Anand:
Full Name - Om Anand
Address - Patna, Bihar
Education:
BTech in CSE (2023 - 2027), currently in 2nd year, 4th semester.
Higher Secondary Education: 96% in 12th
Secondary Education: 95% in 10th
Prepared for JEE with dedication and passion for problem-solving.

Hobbies: Playing Cricket, Coding, and building innovative apps.

Skills:
- Programming Languages: C, C++, Python, JavaScript, TypeScript, Shell Scripting
- Frameworks and Libraries: React.js, Node.js, Express.js, Next.js, Tailwind CSS, React Native, HTML, CSS
- Data Science: Pandas, NumPy, scikit-learn, Statistics, Visualization, pandas-profiling, Matplotlib
- Clouds and DevOps: AWS, Git, GitHub, Docker, Deployment
- Machine Learning: Linear Regression, Logistic Regression, KNN, PCA, Gradient Descent, Bagging, Boosting, Random Forest, Decision Trees, Softmax Regression, Voting Ensemble
- Libraries and Tools: OpenAI, Groq AI, LaTeX, Bcrypt, JWT, MUI, npm, nodemon

Projects:
1. **AnonMate** - Omegle-like anonymous chat application with secure real-time messaging and a clean, minimal UI.
2. **Dragon Warrior** - Unity-based adventure game with immersive gameplay, challenging enemies, and progressive levels.
3. **FocKus** - Productivity and focus timer app that helps users manage time using the Pomodoro technique with session tracking.
4. **HostelPro** - Full-stack hostel management system with admin portal to manage rooms, allocations, maintenance requests, and student records. Integrated Stripe for secure rent and fee payments.
5. **BlueBot** - An AI chatbot with interactive features for learning, assistance, and entertainment.
6. **VaultRoom** - Secure password manager with OAuth authentication, RESTful APIs, and encryption for data safety.
7. **FOSS KSP PROJECT (FOSS)** - Open-source software knowledge sharing platform for sharing reources among college or academic students.
8. **Stress Management App** - Mobile app with self-assessment, personalized recommendations, chat assistance, and meditation features.
9. **TrusToken Starter** - Secure communication and document signing app using trust tokens for device security.
`,
};

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: 'user', content: trimmed }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [systemContext, { role: 'user', content: trimmed }],
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [...prev, { role: 'bot', content: data.content }]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: 'Error: ' + error.message },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-900 text-white rounded-2xl shadow-xl w-[350px] h-[500px] flex flex-col overflow-hidden border border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
        <h2 className="font-bold text-lg">💬 Chat with My Assistant</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-700 rounded-full"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex items-start gap-2 ${
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.role === 'bot' && (
              <div className="w-8 h-8 bg-sky-600 text-white flex items-center justify-center rounded-full font-bold">
                🤖
              </div>
            )}
            <div
              className={`max-w-xs sm:max-w-md px-4 py-3 rounded-2xl shadow ${
                msg.role === 'user'
                  ? 'bg-sky-600 text-white'
                  : 'bg-gray-700 text-gray-100'
              }`}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
            {msg.role === 'user' && (
              <div className="w-8 h-8 bg-gray-500 text-white flex items-center justify-center rounded-full font-bold">
                🧑
              </div>
            )}
          </motion.div>
        ))}

        {loading && (
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-sky-600 text-white flex items-center justify-center rounded-full font-bold">
              🤖
            </div>
            <div className="bg-gray-700 text-gray-100 px-4 py-3 rounded-2xl shadow flex items-center gap-1">
              <span className="animate-bounce">●</span>
              <span className="animate-bounce delay-150">●</span>
              <span className="animate-bounce delay-300">●</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-gray-700 bg-gray-800 p-3 flex items-center gap-2">
        <input
          type="text"
          className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-sky-500"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-sky-600 hover:bg-sky-700 text-white p-3 rounded-xl transition-colors flex items-center gap-2"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
