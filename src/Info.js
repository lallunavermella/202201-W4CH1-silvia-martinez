const Info = ({ textTitle, className, text }) => {
  return (
    <>
      <h1>{textTitle}</h1>
      <p class={className}>{text}</p>
    </>
  );
};
export default Info;
