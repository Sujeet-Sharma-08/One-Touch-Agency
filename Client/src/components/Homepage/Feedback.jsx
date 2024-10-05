import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import clientImage2 from '../../assets/Clients images/chara.png';
import clientImage1 from "../../Pages/ClientPage2/client2-images/fusion.jpeg";

import clientImage3 from '../../assets/Clients images/tata nq.png';
import clientImage4 from '../../assets/Clients images/vecmocon.png';

const feedbacks = [
  {
    text: " The smooth execution of the event was a testament to your meticulous planning. It allowed us to fully immerse ourselves in the experience without any concerns",
    name: "CHARA",
    image: clientImage2
  },
  {
    text: " Impressive coordination and flawless planning made the event a memorable success. We could enjoy every aspect without worrying about any details!.",
    name: "FUSION",
    image: clientImage1
  },
  {
    text: " Thanks to exceptional organization and attention to detail, the event was seamlessly executed. We were free to focus on having a great time.",
    name: "TATA NQ",
    image: clientImage3
  },
  {
    text: " The event was executed flawlessly. The meticulous planning and coordination ensured that everything ran smoothly, allowing us to focus on enjoying the event without any worries.",
    name: "VECMOCOM",
    image: clientImage4
  },
];

function Feedback() {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setShowName(false);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === feedbacks[currentFeedback].text.length) {
        clearInterval(interval);
        setShowName(true); // Show the name once the text is fully rendered
        return;
      }
      setDisplayedText((prevText) => prevText + feedbacks[currentFeedback].text.charAt(currentIndex));
      currentIndex++;
    }, 30); 

    return () => {
      clearInterval(interval);
      setDisplayedText('');
    };
  }, [currentFeedback]);

  const handleNext = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setCurrentFeedback((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className="bg-gray-900 bg min-h-screen md:-mt-[2vh] flex flex-col items-center justify-center relative">
      <div className="text-2xl md:text-4xl lg:text-5xl text-center font-medium text-white mb-32 -mt-20 sm:-mt-20">
        <h1 style={{ fontFamily: 'Chivo, sans-serif' }}>What Our Client Says</h1>
      </div>
      <div className="flex items-center justify-center w-full mb-8">
        <button onClick={handlePrev} className="text-white focus:outline-none rounded mr-6">
          <RiArrowLeftSLine className="text-5xl md:text-7xl ml-1 hover:text-yellow-500 transition-colors duration-300" />
        </button>
        <div className=" bg-[#0c1219] -mt-10 w-[66%] h-80 rounded-lg relative flex flex-col items-center justify-center p-6 transition-transform duration-500 ease-in-out transform">
          <img
            src={feedbacks[currentFeedback].image}
            alt="Client"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-yellow-300 bg-black absolute top-0 transform -translate-y-1/2 transition-all duration-500"
            style={{ top: '0' }}
          />
          <div className="text-gray-900 text-3xl text-center flex items-center mt-10" style={{ fontFamily: 'Adamina, serif' }}>
            <FaQuoteLeft className="text-4xl text-yellow-500 mr-5" style={{ marginTop: '-1rem' }} />
            <div className='text-lg sm:text-2xl'>
              {displayedText !== undefined && displayedText !== '' && (
                <p className="mb-4 text-white">{displayedText}</p>
              )}
              {showName && <p className="font-bold text-white">- {feedbacks[currentFeedback].name}</p>}
            </div>
            <FaQuoteRight className="text-4xl text-yellow-500 mr-3 md:ml-4" style={{ marginTop: '-1rem' }} />
          </div>
        </div>
        <button onClick={handleNext} className="text-white focus:outline-none rounded ml-2 md:ml-6">
          <RiArrowRightSLine className="text-5xl md:text-7xl hover:text-yellow-500 transition-colors duration-300" />
        </button>
      </div>
    </div>
  );
}

export default Feedback;
  
