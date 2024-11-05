import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

function CharacterBuilder() {
  const [character, setCharacter] = useState({
    name: '',
    age: '',
    background: '',
    abilities: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Character Data:", character);
    // Here, you can add functionality to save the character or display it.
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Build Your Character
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={character.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Age"
        name="age"
        value={character.age}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Background"
        name="background"
        value={character.background}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Abilities"
        name="abilities"
        value={character.abilities}
        onChange={handleChange}
        multiline
        rows={2}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ marginTop: 2 }}>
        Submit
      </Button>
    </Box>
  );
}

export default CharacterBuilder;
