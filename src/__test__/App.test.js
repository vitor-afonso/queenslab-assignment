//jshint esversion:9
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  describe('Card Number', () => {
    it('should change value of the input element', async () => {
      render(<App />);
      const inputNumberElement = screen.getByLabelText(/Card Number/i);
      fireEvent.change(inputNumberElement, { target: { value: 'Test value' } });
      expect(inputNumberElement.value).toBe('');
    });

    it('should change value of the input element and CardLayout paragraph element to be the same as the input', async () => {
      render(<App />);
      const inputNumberElement = screen.getByLabelText(/Card Number/i);
      const cardNumberParagraphElement = screen.getByTestId(/card-layout-number/i);
      fireEvent.change(inputNumberElement, { target: { value: '1234' } });
      expect(cardNumberParagraphElement).toHaveTextContent('1234');
    });
  });

  /* 
  it('should change value of the input element, click in the button and add all tasks to the list', async () => {
    render(<MockedTodo />);
    addValue(['Go Grocery Shopping', 'Pet my cat', 'Wash my hands']);
    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(3);
  });

  it('task should not have "completed" class when initially rendered', async () => {
    render(<MockedTodo />);
    addValue(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);

    expect(divElement).not.toHaveClass('todo-item-active');
  });

  it('task should have "completed" class when initially rendered', async () => {
    render(<MockedTodo />);
    addValue(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  }); */
});
