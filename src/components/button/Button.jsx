import './button.css';
const Button = ({ type, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={text === 'Add' ? 'add_btn' : 'delete_btn'}
    >
      {text}
    </button>
  );
};

export default Button;
