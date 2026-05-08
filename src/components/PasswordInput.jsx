function PasswordInput() {
  const handleChange = () => {
    console.log("Entering password...");   // ← change … to three dots
  };

  return (
    <input
      type="password"
      onChange={handleChange}
    />
  );
}

export default PasswordInput;