import { useState } from 'react';
import Button from '../button/Button';
import { connect, useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions/actions';
import './form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handlerOnSubmit = () => {
    if (!inputValue.trim()) {
      return alert('Please input value!');
    }

    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handlerOnSubmit();
      }}
      className="form"
    >
      <input
        type="text"
        placeholder="Thing to do..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <Button type={'submit'} text={'Add'} />
    </form>
  );
};

export default connect()(Form);
