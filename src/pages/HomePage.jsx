import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function HomePage() {
  const texts = [
    "CryptoX ga xush kelibsiz!",
    "Bu yerda siz kriptografiya masalalarini yechishingiz mumkin!",
    "O'z bilimlaringizni sinab ko'ring",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedTexts, setDisplayedTexts] = useState([]);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (charIndex < texts[currentTextIndex].length && isTyping) {
      const typingTimeout = setTimeout(() => {
        setText((prev) => prev + texts[currentTextIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 75);

      return () => clearTimeout(typingTimeout);
    } else if (isTyping) {
      setIsTyping(false);

      setTimeout(() => {
        setDisplayedTexts((prev) => [...prev, texts[currentTextIndex]]);
        setText("");
        setCharIndex(0);

        if (currentTextIndex < texts.length - 1) {
          setCurrentTextIndex((prev) => prev + 1);
          setIsTyping(true);
        } else {
          setTimeout(() => {
            setDisplayedTexts([]);
            setCurrentTextIndex(0);
            setIsTyping(true);
          }, 3000);
        }
      }, 1200);
    }
  }, [charIndex, isTyping, currentTextIndex]);

  return (
    <section className="w-full h-[calc(100vh-80px)] flex justify-center items-center bg-gradient-to-br from-[#001F3F] via-[#007BFF] to-[#00D4FF] text-white">
      <div className="w-full max-w-[1280px] flex flex-col bg-[#00000080] backdrop-blur-xl rounded-4xl shadow-2xl p-8 border border-white/20">
        <div className="text-center md:h-[200px] flex flex-col justify-center">
          {displayedTexts.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:text-4xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#FF6347] to-[#FF1493] text-transparent bg-clip-text drop-shadow-xl"
            >
              {line}
            </motion.p>
          ))}
          <p className="md:text-4xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#FF6347] to-[#FF1493] text-transparent bg-clip-text drop-shadow-xl min-h-[50px]">
            {text}
            <motion.span
              className="inline-block w-2 h-6 bg-white ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
