//jshint esversion:9
import { CardLayout } from './components/CardLayout';
import { useEffect, useState } from 'react';
import './App.css';
let visaImg = 'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png';
let mastercardImg = 'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/mastercard.png';
let discoverImg = 'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/discover.png';

function App() {
  const [bankImg, seBankImg] = useState(visaImg);
  const [cardNumber, setCardNumber] = useState('################');
  const [hiddenCardNumber, setHiddenCardNumber] = useState('################');
  const [cardName, setCardName] = useState('Ad Soyad');
  const [cvv, setCvv] = useState('');
  const [month, setMonth] = useState('MM');
  const [selectedMonth, setSelectedMonth] = useState(false);
  const [selectedYear, setSelectedYear] = useState(false);
  const [year, setYear] = useState('YY');
  const [flipCard, setFlipCard] = useState(false);

  const handleCardNumber = (cardNumber) => {
    cardNumber.toString();
    let hideNum = [];
    for (let i = 0; i < cardNumber.length; i++) {
      if (i > 3 && i < 12) {
        hideNum.push('*');
      } else {
        hideNum.push(cardNumber[i]);
      }
    }
    setCardNumber(cardNumber.substr(0, 16));
    setHiddenCardNumber(hideNum.join(''));
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

  const handleCvv = (cvvNumber) => {
    cvvNumber.toString();

    setCvv(cvvNumber.substr(0, 5));
  };

  const formatCardNumber = (cardNumber) => {
    let part1 = cardNumber.substr(0, 4);
    let part2 = cardNumber.substr(4, 4);
    let part3 = cardNumber.substr(8, 4);
    let part4 = cardNumber.substr(12, 4);
    let allParts = [];

    allParts = [part1, part2, part3, part4];

    return allParts.join(' ');
  };

  const handleflipCard = () => {
    setFlipCard(!flipCard);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardNumber('');
    setCardName('Ad Soyad');
    setSelectedMonth(false);
    setSelectedYear(false);
    setMonth('MM');
    setYear('YY');
    setCvv('');

    /* console.log('Card number =>', cardNumber);
    console.log('Card name =>', cardName);
    console.log('Card expiration date =>', month + '/' + year);
    console.log('Card CVV =>', cvv); */
  };

  useEffect(() => {
    if (cardNumber === '') {
      setHiddenCardNumber('################');
    }
    if (cvv === '') {
      setCvv('***');
    }
  }, [cardNumber, cvv]);

  useEffect(() => {
    if (cardNumber[0] === '5') {
      seBankImg(mastercardImg);
    } else if (cardNumber[0] === '6') {
      seBankImg(discoverImg);
    } else {
      seBankImg(visaImg);
    }
  }, [cardNumber]);

  return (
    <div className='App w-screen h-screen flex flex-col items-center justify-center bg-[#D3E9FC]'>
      <div className='relative' id='main-container'>
        <CardLayout
          flipCard={flipCard}
          bankImg={bankImg}
          formatCardNumber={formatCardNumber}
          hiddenCardNumber={hiddenCardNumber}
          cardNumber={cardNumber}
          cardName={cardName}
          month={month}
          cvv={cvv}
          year={year}
        />

        <form className='flex flex-col w-[500px] pt-40 px-7 pb-7 bg-white space-y-4 rounded-md shadow-2xl' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label className='text-xs mb-1' htmlFor='cardNumberInput'>
              Card Number
            </label>
            <input
              type='number'
              id='cardNumberInput'
              data-testid='cardNumber'
              className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500'
              value={cardNumber}
              onChange={(e) => handleCardNumber(e.target.value)}
              required
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-xs mb-1' htmlFor='cardNameInput'>
              Card Name
            </label>
            <input
              type='text'
              id='cardNameInput'
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className='border-2 border-gray-300 p-2 h-10 rounded-md uppercase focus:outline-none focus:border-blue-500'
              required
            />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col justify-between'>
              <label className='text-xs mb-1' htmlFor='selectMonth'>
                Expiration Date
              </label>
              <select
                data-testid='select-month-element'
                id='selectMonth'
                value={'Month'}
                onChange={handleSelectMonth}
                className='border-2 border-gray-300 p-2 h-10 rounded-md focus:outline-none focus:border-blue-500'
                required
              >
                {selectedMonth ? (
                  <option data-testid='select-month-option' value='' disabled>
                    Month
                  </option>
                ) : (
                  <option data-testid='select-month-option' value=''>
                    Month
                  </option>
                )}
                <option data-testid='select-month-option' value='01'>
                  01
                </option>
                <option data-testid='select-month-option' value='02'>
                  02
                </option>
                <option data-testid='select-month-option' value='03'>
                  03
                </option>
                <option data-testid='select-month-option' value='04'>
                  04
                </option>
                <option data-testid='select-month-option' value='05'>
                  05
                </option>
                <option data-testid='select-month-option' value='06'>
                  06
                </option>
                <option data-testid='select-month-option' value='07'>
                  07
                </option>
                <option data-testid='select-month-option' value='08'>
                  08
                </option>
                <option data-testid='select-month-option' value='09'>
                  09
                </option>
                <option data-testid='select-month-option' value='10'>
                  10
                </option>
                <option data-testid='select-month-option' value='11'>
                  11
                </option>
                <option data-testid='select-month-option' value='12'>
                  12
                </option>
              </select>
            </div>

            <div className='flex'>
              <label htmlFor='selectYear'></label>
              <select
                data-testid='select-year-element'
                id='selectYear'
                value={'Year'}
                onChange={handleSelectYear}
                className='border-2 border-gray-300 p-2 h-10 self-end rounded-md focus:outline-none focus:border-blue-500'
                required
              >
                {selectedYear ? (
                  <option data-testid='select-year-option' value='' disabled>
                    Year
                  </option>
                ) : (
                  <option data-testid='select-year-option' value=''>
                    Year
                  </option>
                )}
                <option data-testid='select-year-option' value='2022'>
                  2022
                </option>
                <option data-testid='select-year-option' value='2023'>
                  2023
                </option>
                <option data-testid='select-year-option' value='2024'>
                  2024
                </option>
                <option data-testid='select-year-option' value='2025'>
                  2025
                </option>
                <option data-testid='select-year-option' value='2026'>
                  2026
                </option>
                <option data-testid='select-year-option' value='2027'>
                  2027
                </option>
                <option data-testid='select-year-option' value='2028'>
                  2028
                </option>
                <option data-testid='select-year-option' value='2029'>
                  2029
                </option>
                <option data-testid='select-year-option' value='2030'>
                  2030
                </option>
                <option data-testid='select-year-option' value='2031'>
                  2031
                </option>
              </select>
            </div>

            <div className='flex flex-col justify-between'>
              <label className='text-xs mb-1' htmlFor='card-cvv'>
                CVV
              </label>
              <input
                type='number'
                id='card-cvv'
                className='border-2 border-gray-300 p-2 h-10 rounded-md focus:outline-none focus:border-blue-500'
                value={cvv}
                onChange={(e) => handleCvv(e.target.value)}
                onFocus={handleflipCard}
                onBlur={handleflipCard}
                required
              />
            </div>
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
