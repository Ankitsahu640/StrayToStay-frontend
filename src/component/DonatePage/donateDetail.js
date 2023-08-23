import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ChatBubble from "@mui/icons-material/ChatBubble";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import { Button, Chip } from "@mui/material";
import CustomButton from "../common/customButton";
import Map from "../common/map";

const DonateDetails = () => {

  const animal= {
    _id: "64c38825c633d65ab78397c2",
    name: "motikjha",
    type: "cat",
    breed: "milliy",
    gender: "male",
    description: "Whiskers is an abandoned stray rabbit with overgrown teeth that need attention Whiskers is an abandoned stray rabbit with overgrown teeth that need attention Whiskers is an abandoned stray rabbit with overgrown teeth that need attention Whiskers is an abandoned stray rabbit with overgrown teeth that need attention",
    age: 4,
    colour: "brown",
    address: '327-B kazi khera',
    city: 'Kanpur',
    country: 'India',
    photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690535912/pynhca4wre6t6qjobe00.jpg",
    adopted: false,
    creator: {
      _id: "64c0de07554a8ac9aaed5fa3",
      name: "subham",
      email: "subh8723@gmail.com",
      contactNo: 7838783292,
      gender: "male",
      address: '327-B kazi khera',
      city: 'Kanpur',
      country: 'India',
      avatar: "http://res.cloudinary.com/didvew55k/image/upload/v1690621365/kuu9kc3wfgabijnkzzmq.png",
      __v: 14
    },
    date: "2023-07-28T09:19:33.815Z",
    __v: 0
  }

    function checkImage(url) {
        const img = new Image();
        img.src = url;
        return img.width !== 0 && img.height !== 0;
    }
    const isCurrentUser = false;

    return (
      <Box borderRadius="15px" maxWidth={{lg:'1200px',xs:'100%'}}  mx='auto' padding="20px" bgcolor="#fefefe" mt={7}>
      <Box sx={{borderLeft:'5px solid #ff6d00'}}>
          <Typography color='tertiory' fontSize={{sm:28,xs:18}} fontWeight={700} ml={2}>
              Animal Detail
          </Typography>
      </Box>
      <Box mt="20px" display="flex" flexDirection={{ xs: "column", lg: "row" }} gap={4}>
          <Box flex={1} maxWidth={600} alignSelf='center' >
              <Box overflow="hidden" height={450} width={600} borderRadius={2} >
                <img src={animal.photo} alt="property_details-img" height={450} width={600} className="cardImg" style={{objectFit:'fill'}} />
              </Box>
              <Stack width="100%" mt={2} p={1} direction="column"  justifyContent="center" alignItems="center" border="1px solid #E4E4E4" borderRadius={2}>
                  <Stack mt={2} justifyContent="center" alignItems="center" textAlign="center">
                      <img src={checkImage(animal.creator.avatar) ? animal.creator.avatar : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"} alt="avatar" width={50} height={50} style={{ borderRadius: "100%", objectFit: "cover" }} />
                      <Box mt={1}>
                          <Typography fontSize={18} fontWeight={600} color="#11142D">
                              {animal.creator.name}
                          </Typography>
                          <Typography  fontSize={14} fontWeight={400} color="#808191">
                              Owner
                          </Typography>
                      </Box>
                      <Stack mt={0.5} direction="row" alignItems="center" gap={1}>
                          <Place sx={{ color: "#808191" }} />
                          <Typography fontSize={14} fontWeight={400} color="#808191">
                              {animal.creator.city} {animal.creator.country}
                          </Typography>
                      </Stack>
                      <Typography mt={1} fontSize={14} fontWeight={500} color="#11142D">
                          <b>email -</b> {animal.creator.email}
                      </Typography>
                      <Typography mt={1} fontSize={14} fontWeight={500} color="#11142D">
                          <b>contactNo -</b> +91 {animal.creator.contactNo}
                      </Typography>
                  </Stack>
                  <Stack width="100%" mt="25px" direction="row" flexWrap="wrap" gap={2}>
                      <CustomButton title={!isCurrentUser ? "Message" : "Edit"} size='small' backgroundColor="#475BE8" color="#FCFCFC" fullWidth icon={!isCurrentUser ? <ChatBubble /> : <Edit />}  />
                      <CustomButton title={!isCurrentUser ? "Call" : "Delete"} size='small' backgroundColor={!isCurrentUser ? "#2ED480" : "#d42e2e"} color="#FCFCFC" fullWidth icon={!isCurrentUser ? <Phone /> : <Delete />}  />
                  </Stack>
              </Stack>
          </Box>
          <Box width="100%" flex={1}  display="flex" flexDirection='column' gap="20px">
          <Box mt="15px" minHeight={420}>
                  <Stack direction="column">
                    <Box sx={{borderLeft:'3px solid #ff6d00',height:22}}>
                        <Typography color='tertiory' mt={-0.5} fontSize={{sm:22,xs:14}} fontWeight={500} ml={1.5} textTransform='capitalize'>
                            {animal.type}
                        </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="column" >
                          <Typography fontSize={25} fontWeight={600} mt="10px" color="#11142D">
                              {animal.name}
                          </Typography>
                          <Stack mt={0.5} direction="row" alignItems="center" gap={0.5}>
                              <Place sx={{ color: "#808191" }}/>
                              <Typography fontSize={14} color="#808191">
                                  {animal.address}, {animal.city}, {animal.country}
                              </Typography>
                          </Stack>
                          <Typography mt={2} fontWeight={500} color="#11142D" textTransform="capitalize">
                                <b>Breed -</b> {animal.breed}
                          </Typography>
                          <Typography mt={0.8} fontWeight={500} color="#11142D" textTransform="capitalize">
                              <b>Color -</b> {animal.colour} 
                          </Typography>
                          <Typography mt={0.8} fontWeight={500} color="#11142D" textTransform="capitalize">
                              <b>Age -</b> {animal.age} years
                          </Typography>
                          <Box mt={0.8}>
                            <Chip label={animal.gender} variant="outlined" sx={{bgcolor:(animal.gender==='male'?'blue':"red"),color:'white'}} />
                          </Box>
                  </Stack>
                  <Stack mt="20px" direction="column" gap="10px">
                      <Typography fontSize={20} color="#11142D">
                          Description
                      </Typography>
                      <Typography fontSize={16} color="#808191">
                          {animal.description}
                      </Typography>
                  </Stack>
              </Box>
              <Stack gap={1}>
                <Stack height={250} width='100%' borderRadius={10}>
                    <Map address={animal.address} city={animal.city} country={animal.country}/>
                </Stack>
                <Box>
                    <Button variant="contained" size="large" color='secondary' fullWidth sx={{color:'white', textTransform:'capitalize'}}><b>Adopt</b></Button>
                </Box>
              </Stack>
          </Box>
      </Box>
  </Box>
  
    );
};

export default DonateDetails;



                