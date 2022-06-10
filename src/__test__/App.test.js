//jshint esversion:9
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  describe('Card Number', () => {
    it('should change value of the input element', async () => {
      render(<App />);
      const inputNumberElement = screen.getByLabelText(/card number/i);
      fireEvent.change(inputNumberElement, { target: { value: 'Test value' } });
      expect(inputNumberElement.value).toBe('');
    });

    it('should change value of the input element and CardLayout paragraph element to be the same as the input', async () => {
      render(<App />);
      const inputNumberElement = screen.getByLabelText(/card number/i);
      const cardNumberParagraphElement = screen.getByTestId(/card-layout-number/i);
      fireEvent.change(inputNumberElement, { target: { value: '1234' } });
      expect(cardNumberParagraphElement).toHaveTextContent('1234');
    });
  });

  describe('Card Name', () => {
    it('should change value of the input element', async () => {
      render(<App />);
      const inputNameElement = screen.getByLabelText(/card name/i);
      fireEvent.change(inputNameElement, { target: { value: 'Test value' } });
      expect(inputNameElement.value).toBe('Test value');
    });

    it('should change value of the input element and CardLayout paragraph element to be the same as the input', async () => {
      render(<App />);
      const inputNameElement = screen.getByLabelText(/card name/i);
      const cardNameParagraphElement = screen.getByTestId(/card-layout-name/i);
      fireEvent.change(inputNameElement, { target: { value: 'Test value' } });
      expect(cardNameParagraphElement).toHaveTextContent('Test value');
    });
  });

  describe('Select Month', () => {
    it('should simulate selection', async () => {
      render(<App />);
      const monthOptionElements = screen.getAllByTestId(/select-month-option/i);
      const selectMonthElement = screen.getByTestId(/select-month-element/i);
      fireEvent.change(selectMonthElement, { target: { value: selectMonthElement[1].value } });
      expect(monthOptionElements[0].selected).toBeFalsy();
      expect(monthOptionElements[1].selected).toBeTruthy();
      expect(monthOptionElements[2].selected).toBeFalsy();
    });

    it('should change content of expires paragraph in card-layout', async () => {
      render(<App />);
      const selectMonthElement = screen.getByTestId(/select-month-element/i);
      const cardExpiresParagraphElement = screen.getByTestId(/expire-month-year/i);
      fireEvent.change(selectMonthElement, { target: { value: selectMonthElement[1].value } });
      expect(cardExpiresParagraphElement).not.toHaveTextContent('MM/YY');
    });
  });

  describe('Select Year', () => {
    it('should simulate selection', async () => {
      render(<App />);
      const selectYearElement = screen.getByTestId(/select-year-element/i);
      const yearOptionElements = screen.getAllByTestId(/select-year-option/i);
      fireEvent.change(selectYearElement, { target: { value: selectYearElement[1].value } });
      expect(yearOptionElements[0].selected).toBeFalsy();
      expect(yearOptionElements[1].selected).toBeTruthy();
      expect(yearOptionElements[2].selected).toBeFalsy();
    });

    it('should change content of expires paragraph in card-layout', async () => {
      render(<App />);
      const selectYearElement = screen.getByTestId(/select-year-element/i);
      const cardExpiresParagraphElement = screen.getByTestId(/expire-month-year/i);
      fireEvent.change(selectYearElement, { target: { value: selectYearElement[1].value } });
      expect(cardExpiresParagraphElement).not.toHaveTextContent('MM/YY');
    });
  });

  describe('Card CVV', () => {
    it('should change value of the input element', async () => {
      render(<App />);
      const inputCvvElement = screen.getByLabelText(/cvv/i);
      fireEvent.change(inputCvvElement, { target: { value: '123' } });
      expect(inputCvvElement.value).toBe('123');
    });

    it('should change value of the input element and backCardLayout paragraph element to be the same as the input', async () => {
      render(<App />);
      const inputCvvElement = screen.getByLabelText(/cvv/i);
      const cardCvvParagraphElement = screen.getByTestId(/card-layout-cvv/i);
      fireEvent.change(inputCvvElement, { target: { value: '123' } });
      expect(cardCvvParagraphElement).toHaveTextContent('123');
    });
  });

  describe('Submit Button', () => {
    describe('Card Number', () => {
      it('should change value of card number input', async () => {
        render(<App />);
        const inputNumberElement = screen.getByLabelText(/card number/i);
        const buttonElement = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(buttonElement);
        expect(inputNumberElement.value).toBe('');
      });

      it('should change content of number in card-layout paragraph', async () => {
        render(<App />);
        const cardNumberParagraphElement = screen.getByTestId(/card-layout-number/i);
        const buttonElement = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(buttonElement);
        expect(cardNumberParagraphElement).toHaveTextContent('#### #### #### ####');
      });
    });

    describe('Card Name', () => {
      it('should change value of card name input', async () => {
        render(<App />);
        const inputNameElement = screen.getByLabelText(/card name/i);
        const buttonElement = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(buttonElement);
        expect(inputNameElement.value).toBe('Ad Soyad');
      });

      it('should change content of name in card-layout paragraph', async () => {
        render(<App />);
        const cardNameParagraphElement = screen.getByTestId(/card-layout-name/i);
        const buttonElement = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(buttonElement);
        expect(cardNameParagraphElement).toHaveTextContent('Ad Soyad');
      });
    });

    describe('Card Expires', () => {
      it('should change value/option of card month selected', async () => {
        render(<App />);
        const monthOptionElements = screen.getAllByTestId(/select-month-option/i);
        const buttonElement = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(buttonElement);
        expect(monthOptionElements[0].selected).toBeTruthy();
      });

      it('should change value/option of card year selected', async () => {
        render(<App />);
        const yearOptionElements = screen.getAllByTestId(/select-year-option/i);
        const buttonElement = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(buttonElement);
        expect(yearOptionElements[0].selected).toBeTruthy();
      });

      it('should change content of expires paragraph in card-layout', async () => {
        render(<App />);
        const cardExpiresParagraphElement = screen.getByTestId(/expire-month-year/i);
        const buttonElement = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(buttonElement);
        expect(cardExpiresParagraphElement).toHaveTextContent('MM/YY');
      });
    });

    describe('Card CVV', () => {
      it('should change value of card CVV input', async () => {
        render(<App />);
        const inputCvvElement = screen.getByLabelText(/cvv/i);
        const buttonElement = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(buttonElement);
        expect(inputCvvElement.value).toBe('');
      });

      it('should change content of CVV in card-layout paragraph', async () => {
        render(<App />);
        const cardCvvParagraphElement = screen.getByTestId(/card-layout-cvv/i);
        const buttonElement = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(buttonElement);
        expect(cardCvvParagraphElement).toHaveTextContent('***');
      });
    });
  });
});
