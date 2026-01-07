
🇩🇪 German Flashcard Web App 🃏

A Python-based web application for learning German vocabulary using interactive flashcards and adaptive repetition.
The app follows CEFR standards (A1–B2) and helps learners actively decide which words they know and which need more practice.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 CEFR-based vocabulary levels
  • A1
  • A2
  • B1
  • B2

🃏 Interactive flashcards
  • Front side: German word
  • Back side: German word + English meaning + example sentence

🔄 Smooth card flip animation

⌨️ Keyboard controls
  • ← Left arrow → I know this word
  • → Right arrow → I need more practice

🧠 Adaptive repetition
  • Known words appear less often
  • Difficult words are repeated more frequently

🌐 Browser-based
  • No installation required for users
  • Works on any modern browser

🧩 Easy to extend
  • Add audio, statistics, databases, or new levels

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🛠 TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🐍 Backend: Python (Flask)
🎨 Frontend: HTML, CSS, JavaScript
📄 Data: JSON / CSV
🗄 Storage: In-memory (can be extended to a database)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 HOW TO RUN THE APP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣ Clone the repository

git clone https://github.com/your-username/german-flashcards.git
cd german-flashcards

2️⃣ (Optional) Create a virtual environment

python -m venv venv
source venv/bin/activate   (macOS / Linux)
venv\Scripts\activate      (Windows)

3️⃣ Install dependencies

pip install flask

4️⃣ Run the server

python app.py

5️⃣ Open in browser

http://127.0.0.1:5000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📖 HOW TO USE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Select a level (A1 / A2 / B1 / B2)
2. A flashcard appears with a German word
3. Think about the meaning
4. Click the card to flip it
5. Decide:
   ← Left arrow  → You know the word
   → Right arrow → You want more practice
6. Cards adapt automatically based on your answers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄 FLASHCARD DATA FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Each flashcard contains:

• id        → Unique identifier
• level     → CEFR level
• german    → German word
• english   → English translation
• example   → Example sentence
• ease      → Repetition weight

Example:

{
  "id": 1,
  "level": "A1",
  "german": "gehen",
  "english": "to go",
  "example": "Ich gehe jeden Tag zur Schule.",
  "ease": 2.5
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 VOCABULARY COVERAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟢 A1 → 300 words
🟡 A2 → 300 words
🔵 B1 → 300 words
🟣 B2 → 300 words

📦 Total: 1,200 German words

All words are:
✔ CEFR-appropriate
✔ Unique
✔ Provided with example sentences


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📜 LICENSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This project is open-source and intended for educational use.
Feel free to fork, modify, and extend it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🙌 FINAL NOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This project is suitable for:
• Language learners
• Portfolio projects
• Educational demos
• Extending into a full learning platform

Happy learning! 🇩🇪📚
