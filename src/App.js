//jshint esversion:9
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cardNumber, setCardNumber] = useState('################');
  const [cardName, setCardName] = useState('AD SOYAD');
  const [cvv, setCvv] = useState('');
  const [month, setMonth] = useState('MM');
  const [selectedMonth, setSelectedMonth] = useState(false);
  const [selectedYear, setSelectedYear] = useState(false);
  const [year, setYear] = useState('YY');
  const [flipCard, setFlipCard] = useState(false);

  const handleCardNumber = (cardNumber) => {
    cardNumber.toString();

    setCardNumber(cardNumber.substr(0, 16));
  };
  const handleSelectMonth = (e) => {
    if (!selectedMonth) {
      setSelectedMonth(true);
    }
    setMonth(e.target.value);
  };
  const handleSelectYear = (e) => {
    if (!selectedYear) {
      setSelectedYear(true);
    }
    setYear(e.target.value);
  };

  const formatcardNumber = (cardNumber) => {
    cardNumber.toString();
    let part1 = cardNumber.substr(0, 4);
    let part2 = cardNumber.substr(4, 4);
    let part3 = cardNumber.substr(8, 4);
    let part4 = cardNumber.substr(12, 4);
    let allParts = [part1, part2, part3, part4];

    /* let firstHalf = allParts.join(' ').slice(9);

    let secondHalf = allParts.slice(-9);

    const firstFourNumbers = firstHalf.slice(5);
    const lastFourNumbers = secondHalf.slice(-5);

    firstHalf = firstFourNumbers.padEnd(firstHalf.length, '*');

    secondHalf = lastFourNumbers.padStart(secondHalf.length, '*');

    let allParts2 = [firstHalf, secondHalf];

    return allParts2.join(' '); */
    return allParts.join(' ');
  };

  const handleflipCard = () => {
    setFlipCard(!flipCard);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Card number =>', cardNumber);
    console.log('Card name =>', cardName);
    console.log('Card expiration date =>', month + '/' + year);
    console.log('Card CVV =>', cvv);
  };

  useEffect(() => {
    if (cardNumber === '') {
      setCardNumber('################');
    }
    if (cvv === '') {
      setCvv('***');
    }
  }, [cardNumber, cvv]);

  return (
    <div className='App w-screen h-screen flex flex-col items-center justify-center bg-[#D3E9FC]'>
      <div className='relative' id='main-container'>
        <div
          id='card'
          className={`absolute left-0 right-0 mx-auto -top-32 w-96 h-60 rounded-2xl font-mono text-white overflow-hidden cursor-pointer transition-all duration-500  ${
            flipCard && 'rotateCard'
          } shadow-2xl`}
          style={{ transition: '0.6s;transform-style: preserve-3d' }}
        >
          {/* <!-- Front content --> */}
          <div
            className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-6 p-6 bg-gradient-to-tr from-gray-900 to-gray-700 transition-all duration-100 delay-200 z-20 ${
              flipCard && 'turned'
            }`}
            style={{ transform: 'rotateY(0deg)' }}
          >
            <div className='flex justify-between items-center'>
              <img src='https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png' alt='Smart card' className='w-12' />

              <img src='https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png' alt='Visa' className='w-12' />
            </div>

            {/* <!-- CardNumber --> */}
            <div>
              <span className='hidden'>Card Number</span>
              <p className='w-full text-center text-2xl'>{formatcardNumber(cardNumber)}</p>
            </div>

            <div className='w-full flex flex-row justify-between'>
              <div className='w-full flex flex-col'>
                <span className='text-xs mb-1'>Card Holder</span>
                <p className='uppercase'>{cardName}</p>
              </div>

              <div className='w-1/4 flex flex-col'>
                <span className='text-xs mb-1'>Expires</span>
                <p>{`${month}/${year.toString().substr(-2)}`}</p>
              </div>
            </div>
          </div>

          {/* <!-- Back content --> */}
          <div
            className={`absolute top-0 left-0 w-full h-full flex flex-col gap-3 justify-center bg-gradient-to-tr from-gray-900 to-gray-700 transition-all z-10 `}
            style={{ transform: 'rotateY(180deg)' }}
          >
            {/* <!-- Band --> */}
            <div className='w-full h-12 bg-black'></div>

            <div className='px-6 flex flex-col gap-6 justify-center'>
              <div className='flex flex-col items-end'>
                <span>CVV</span>
                <p className='rounded text-black w-full h-8 text-right' style={{ background: 'repeating-linear-gradient(45deg, #ededed, #ededed 5px, #f9f9f9 5px, #f9f9f9 10px)' }}>
                  {cvv}
                </p>
              </div>

              <div className='flex justify-start items-center'>
                <img src='https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png' alt='' className='w-12' />
              </div>
            </div>
          </div>
        </div>

        <form className='flex flex-col w-[500px] pt-40 px-7 pb-7 bg-white space-y-4 rounded-md shadow-2xl' onSubmit={handleSubmit}>
          <label className='flex flex-col'>
            <span className='text-xs mb-1'>Card Number</span>
            <input
              type='number'
              className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500'
              value={cardNumber}
              onChange={(e) => handleCardNumber(e.target.value)}
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-xs mb-1'>Card Name</span>
            <input
              type='text'
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className='border-2 border-gray-300 p-2 h-10 rounded-md uppercase focus:outline-none focus:border-blue-500'
              required
            />
          </label>
          <div className='flex justify-between'>
            <label className='flex flex-col justify-between'>
              <span className='text-xs mb-1'>Expiration Date</span>
              <select onChange={handleSelectMonth} className='border-2 border-gray-300 p-2 h-10 rounded-md focus:outline-none focus:border-blue-500' required>
                {selectedMonth ? (
                  <option value='' disabled>
                    Month
                  </option>
                ) : (
                  <option value=''>Month</option>
                )}
                <option value='01'>01</option>
                <option value='02'>02</option>
                <option value='03'>03</option>
                <option value='04'>04</option>
                <option value='05'>05</option>
                <option value='06'>06</option>
                <option value='07'>07</option>
                <option value='08'>08</option>
                <option value='09'>09</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
              </select>
            </label>

            <label className='flex'>
              <select value={year} onChange={handleSelectYear} className='border-2 border-gray-300 p-2 h-10 self-end rounded-md focus:outline-none focus:border-blue-500' required>
                {selectedYear ? (
                  <option value='' disabled>
                    Year
                  </option>
                ) : (
                  <option value=''>Year</option>
                )}
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
                <option value='2025'>2025</option>
                <option value='2026'>2026</option>
                <option value='2027'>2027</option>
                <option value='2028'>2028</option>
                <option value='2029'>2029</option>
                <option value='2030'>2030</option>
                <option value='2031'>2031</option>
              </select>
            </label>

            <label className='flex flex-col justify-between'>
              <span className='text-xs mb-1'>CVV</span>
              <input
                type='number'
                id='card-cvv'
                className='border-2 border-gray-300 p-2 h-10 rounded-md focus:outline-none focus:border-blue-500'
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                onFocus={handleflipCard}
                onBlur={handleflipCard}
                required
              />
            </label>
          </div>
          <button type='submit' className='bg-blue-700 text-white font-semibold p-2 h-10 rounded-md'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
