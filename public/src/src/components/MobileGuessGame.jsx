import React, { useState } from "react";
import { motion } from "framer-motion";

const characters = [
  {
    name: "Polat Alemdar",
    hints: [
      "Main protagonist of Kurtlar Vadisi.",
      "Works undercover in the Turkish mafia world.",
      "Calm, intelligent, and loyal to his country."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/d/d7/Polat_Alemdar.jpg"
  },
  {
    name: "Memati Baş",
    hints: [
      "Polat's most loyal man.",
      "Tough, fearless, and street-smart.",
      "Adds humor to serious missions."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/2/2d/Memati_Bas.jpg"
  },
  {
    name: "Abdülhey Çoban",
    hints: [
      "Polat’s right-hand man after Memati.",
      "Known for his loyalty and strong sense of honor.",
      "Former soldier turned intelligence operative."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/9/90/Abdulhey_Coban.jpg"
  },
  {
    name: "Süleyman Çakır",
    hints: [
      "Polat's mentor and brother-in-arms.",
      "Highly respected figure in the Turkish underworld.",
      "His death was one of the saddest moments in the series."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/0/09/Suleyman_Cakir.jpg"
  },
  {
    name: "Aslan Akbey",
    hints: [
      "Legendary intelligence officer.",
      "Mentor to Polat Alemdar.",
      "Symbol of wisdom and patriotism."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Aslan_Akbey.jpg"
  },
  {
    name: "İskender Büyük",
    hints: [
      "Former intelligence chief turned rogue.",
      "Manipulative and highly intelligent.",
      "One of Polat's greatest enemies."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/f/f3/Iskender_Buyuk.jpg"
  },
  {
    name: "Muro",
    hints: [
      "Leader of a Kurdish separatist gang.",
      "Became a fan-favorite character.",
      "Appeared in his own spin-off movie."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Muro_Kurtlar_Vadisi.jpg"
  },
  {
    name: "Erhan Ufuk",
    hints: [
      "One of Polat’s loyal team members.",
      "Calm and disciplined.",
      "Expert in logistics and communication."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Erhan_Ufuk.jpg"
  },
  {
    name: "Testere Necmi",
    hints: [
      "Old-school mafia leader.",
      "Known for his ruthlessness.",
      "Has a signature knife attack."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Testere_Necmi.jpg"
  },
  {
    name: "Elif Eylül",
    hints: [
      "Doctor and Polat’s love interest.",
      "Represents innocence and compassion.",
      "Her tragic fate deeply affects Polat."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Elif_Eylul.jpg"
  },
  {
    name: "Leyla Türkmen",
    hints: [
      "Lawyer and later love interest of Polat.",
      "Strong, independent woman.",
      "Supports Polat in political missions."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Leyla_Turkmen.jpg"
  },
  {
    name: "İmdat",
    hints: [
      "Polat’s trusted assistant.",
      "Innocent, loyal, and kind-hearted.",
      "Often provides comic relief."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/87/Imdat_Kurtlar_Vadisi.jpg"
  },
  {
    name: "Kara",
    hints: [
      "Former intelligence officer.",
      "Known for his bravery and patriotism.",
      "Often helps Polat with critical missions."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/3/3d/Kara_Kurtlar_Vadisi.jpg"
  },
  {
    name: "Güllü Erhan",
    hints: [
      "One of the funniest and loyal team members.",
      "Always ready for action.",
      "Close friend of Memati and Polat."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/1/1b/Gullu_Erhan.jpg"
  },
  {
    name: "Aksaçlı Dede",
    hints: [
      "Leader of the secret Turkish council.",
      "Wise and mysterious figure.",
      "Respected by Polat Alemdar."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/5/53/Aksacli_Dede.jpg"
  }
];

export default function MobileGuessGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hintIndex, setHintIndex] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const currentCharacter = characters[currentIndex];

  const checkAnswer = () => {
    if (input.toLowerCase().trim() === currentCharacter.name.toLowerCase()) {
      setScore(score + 1);
      setMessage("✅ Correct!");
      setTimeout(() => nextCharacter(), 1000);
    } else {
      setMessage("❌ Try again!");
    }
  };

  const nextHint = () => {
    if (hintIndex < currentCharacter.hints.length - 1) {
      setHintIndex(hintIndex + 1);
    } else {
      setMessage("No more hints!");
    }
  };

  const nextCharacter = () => {
    if (currentIndex < characters.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setHintIndex(0);
      setInput("");
      setMessage("");
    } else {
      setMessage("🎉 Game Over! Final Score: " + score);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl font-bold mb-2"
      >
        Guess the Valley of the Wolves Character
      </motion.h1>

      <motion.img
        key={currentCharacter.image}
        src={currentCharacter.image}
        alt="Character"
        className="w-40 h-40 rounded-xl object-cover mb-4 border-2 border-gray-600"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      />

      <p className="text-lg mb-2">Hint: {currentCharacter.hints[hintIndex]}</p>

      <input
        type="text"
        placeholder="Enter character name..."
        className="text-black p-2 rounded-lg mb-2 w-60"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex gap-2">
        <button
          onClick={checkAnswer}
          className="bg-green-600 px-4 py-2 rounded-lg"
        >
          Guess
        </button>
        <button
          onClick={nextHint}
          className="bg-blue-600 px-4 py-2 rounded-lg"
        >
          Hint
        </button>
      </div>

      <p className="mt-3 text-lg">{message}</p>
      <p className="mt-2 text-sm text-gray-400">Score: {score}</p>
    </div>
  );
}
