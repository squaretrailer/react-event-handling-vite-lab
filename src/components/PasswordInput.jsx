function PasswordInput() {
  // Create handleChange function
  const handleChange = () => {
    console.log("Entering password…");
  };

  return (
    <input
      type="password"
      onChange={handleChange}   // call handleChange on change event
    />
  );
}

export default PasswordInput;