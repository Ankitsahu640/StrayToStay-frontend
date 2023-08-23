import { Box, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import injuredDog from '../images/injured-dog.jpg';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, FormControlLabel, Radio, RadioGroup, FormLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addInjuredAnimal } from '../../redux/action/injuredAnimalAction';
import { Link } from 'react-router-dom';

const initialFormData = {
  name: '',
  type: '',
  injuries: '',
  injuryDetail: '',
  breed: '',
  gender: '',
  address: '',
  city: '',
  country: '',
  photo: '',
};

const petTypes = [
  'dog',
  'cat',
  'bird',
  'cow',
  'rabbit',
  'horse',
  'goat',
  'pig',
  'other',
];

function Rescue() {
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const status = useSelector(store => store.injuredAnimal);
  const { loading } = useSelector(store => store.load);

  const isLoggedIn = localStorage.getItem('token') !== null;

  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const handleAvatarChange = event => {
    setFormData(prevData => ({
      ...prevData,
      photo: event.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('name', formData.name);
    data.append('type', formData.type);
    data.append('injuries', formData.injuries);
    data.append('injuryDetail', formData.injuryDetail);
    if(formData.breed){
      data.append('breed', formData.breed);
    }
    data.append('gender', formData.gender);
    data.append('address', formData.address);
    data.append('city', formData.city);
    data.append('country', formData.country);
    data.append('photo', formData.photo);

    await dispatch(addInjuredAnimal(data)); // Dispatch the action to add the injured animal
    setShowToast(true);
    setFormData(initialFormData);
  };

  useEffect(() => {
    if (showToast) {
      if (status.success) {
        toast.success(status.message, {
          position: "top-right",
          autoClose: 2000,
        });
      } else if (status.message) {
        toast.error(status.message, {
          position: "top-right",
          autoClose: 2000,
        });
      }
      setShowToast(false);
    }
  }, [showToast, status]);

  return (
    <Box minHeight='100vh' width={{ lg: '80%', md: '100%', xs: '100%' }} mx='auto'>
      {loading && (<Loading/>)}
      {isLoggedIn ? (
        <>
      <Stack height={{ md: 500, sm: 400, xs: 300 }} justifyContent='end' alignItems='center'
        sx={{ backgroundSize: 'cover', boxSizing: 'content-box', backgroundRepeat: 'no-repeat', backgroundImage: `url(${injuredDog})` }}>
        <Box py={5} px={2}>
          <Typography mt={2} fontSize={{ md: 40, sm: 30, xs: 15 }} fontWeight={100} color='#000000'>What to do when you find an injured stray animal</Typography>
        </Box>
      </Stack>
      <Box width='90%' mx='auto' my={4}><hr style={{ height: '2px', border: 'none', color: '#e0e0e0', backgroundColor: '#e0e0e0' }} /> </Box>
      <Box width={{ md: '70%', xs: '90%' }} mx='auto' mb={4}>
        <Box sx={{ borderLeft: '5px solid #ff6d00' }} mb={3}>
          <Typography color='tertiory' fontSize={{ sm: 24, xs: 16 }} fontWeight={700} ml={2}>
            Rescue Form
          </Typography>
        </Box>
        <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} onSubmit={handleSubmit}>
          <TextField label="Name" name="name" value={formData.name} onChange={handleInputChange} required fullWidth style={{ marginBottom: '15px' }} />
          <FormControl fullWidth style={{ marginBottom: '15px' }} required>
            <InputLabel>Type</InputLabel>
            <Select
              label="Type"
              name="type"
              onChange={handleInputChange}
              value={formData.type}
              required
            >
              {petTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {formData.type === 'other' && (
            <TextField label="Type (Other)" name="type" required fullWidth style={{ marginBottom: '15px' }} />
          )}
          <TextField label="Breed" name="breed" value={formData.breed} onChange={handleInputChange} fullWidth style={{ marginBottom: '15px' }} />
          <FormControl style={{ marginBottom: '15px' }}>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              value={formData.gender}
              onChange={handleInputChange}
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <TextField label="Injuries" name="injuries" value={formData.injuries} onChange={handleInputChange} required fullWidth style={{ marginBottom: '15px' }} />
          <TextField label="Injury Detail" name='injuryDetail' value={formData.injuryDetail} onChange={handleInputChange} placeholder="Describe the injuries in detail" required multiline rows={5} maxRows={10} style={{ marginBottom: '15px' }} />
          <TextField label="Address" name="address" value={formData.address} onChange={handleInputChange} required fullWidth style={{ marginBottom: '15px' }} />
          <TextField label="City" name="city" value={formData.city} onChange={handleInputChange} required fullWidth style={{ marginBottom: '15px' }} />
          <TextField label="Country" name="country" value={formData.country} onChange={handleInputChange} required fullWidth style={{ marginBottom: '20px' }} />
          <Typography>Add Animal Picture* </Typography><input type="file" accept="image/*" onChange={handleAvatarChange} fullWidth required style={{ marginBottom: '20px' }} />
          <Button type="submit" justifyContent='center' size='large' variant="contained" color="secondary" sx={{ color: 'white' }}>
            Submit
          </Button>
        </form>
      </Box>
        </>):(
          <Stack mt={13} alignItems='center'>
            <Typography  variant="h5" align="center">
              Please log in to access the rescue page.
            </Typography>
            <Button
              component={Link} // If using React Router
              to="/signin" // Replace with your home page URL
              variant="contained"
              sx={{width:'100px', }}
              color="secondary"
            >
              login
            </Button>
        </Stack>
      )}
      <ToastContainer />
    </Box>
  );
}

export default Rescue;
