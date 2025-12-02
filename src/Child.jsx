const Child = ({ handleClick }) => {
  console.log("Child component re-rendered ❌");  

  return (
    <button onClick={handleClick}>
      Child Button
    </button>
  );
};

export default Child;
