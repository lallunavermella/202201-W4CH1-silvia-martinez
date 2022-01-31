const Button = ({ className, text, actionOnClick }) => {
  return (
    <button class={className} action={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
