//jshint esversion:9

export const CardLayout = ({ flipCard, bankImg, formatCardNumber, hiddenCardNumber, cardNumber, cardName, month, cvv, year }) => {
  return (
    <div
      id='card'
      className={`absolute left-0 right-0 mx-auto -top-32 w-96 h-60 rounded-2xl font-mono text-white overflow-hidden cursor-pointer transition-all duration-500  ${
        flipCard && 'rotateCard'
      } shadow-2xl`}
    >
      {/* <!-- Front content --> */}
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-6 p-6 bg-gradient-to-tr  from-[#710d09] to-gray-900 transition-all duration-100 delay-200 z-20 ${
          flipCard && 'turned'
        }`}
      >
        <div className='flex justify-between items-center'>
          <img src='https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png' alt='Smart card' className='w-12' />

          <img src={bankImg} alt='Bank logo' className='w-16' />
        </div>

        {/* <!-- CardNumber --> */}
        <div>
          <span className='hidden'>Card Number</span>
          <p data-testid='card-layout-number' className='w-full text-center text-2xl'>
            {formatCardNumber(hiddenCardNumber)}
          </p>
        </div>

        <div className='w-full flex flex-row justify-between'>
          <div className='w-full flex flex-col'>
            <span className='text-xs mb-1'>Card Holder</span>
            <p data-testid='card-layout-name' className='uppercase'>
              {cardName}
            </p>
          </div>

          <div className='w-1/4 flex flex-col'>
            <span className='text-xs mb-1'>Expires</span>
            <p data-testid='expire-month-year'>{`${month}/${year.toString().slice(-2)}`}</p>
          </div>
        </div>
      </div>

      {/* <!-- Back content --> */}
      <div id='card-back-content' className={`absolute top-0 left-0 w-full h-full flex flex-col gap-3 justify-center bg-gradient-to-tr to-[#710d09] from-gray-900 transition-all z-10 `}>
        {/* <!-- Band --> */}
        <div className='w-full h-12 bg-black'></div>

        <div className='px-6 flex flex-col gap-6 justify-center'>
          <div className='flex flex-col items-end'>
            <span>CVV</span>
            <p data-testid='card-layout-cvv' id='card-cvv-background' className='rounded text-black w-full h-8 text-right'>
              {cvv}
            </p>
          </div>

          <div className='flex justify-end items-center'>
            <img src={bankImg} alt='Bank logo' className='w-16' />
          </div>
        </div>
      </div>
    </div>
  );
};
