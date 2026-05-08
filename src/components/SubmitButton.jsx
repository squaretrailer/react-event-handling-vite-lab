function SubmitButton() {
  // Create handleEnter function
  const handleEnter = () => {
    console.log("Mouse Entering");
  };

  // Create handleLeave function
  const handleLeave = () => {
    console.log("Mouse Exiting");
  };

  return (
    <button
      onMouseEnter={handleEnter}   // call handleEnter on mouse enter
      onMouseLeave={handleLeave}   // call handleLeave on mouse leave
    >
      Submit Password
    </button>
  );
}

export default SubmitButton;