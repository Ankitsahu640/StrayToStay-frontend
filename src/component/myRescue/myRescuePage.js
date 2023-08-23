import { Box, Stack,Typography } from '@mui/material'
import React, { useEffect } from 'react'
import MyRescueCard from './myRescuecard'
import { getUserInjuredAnimal } from '../../redux/action/injuredAnimalAction';
import { useDispatch, useSelector } from 'react-redux';
import LoadingAnimalCard from '../common/loadingAnimalCard';

function MyRescuePage() {
    // const allInjuredAnimal= [
    //     {
    //       _id: "64c4d4ed0e005a9720442711",
    //       name: "chumpak",
    //       type: "cat",
    //       injuries: "Flea infestation",
    //       injuryDetail: "Smokey is a stray cat found with severe flea infestation and malnourishment.",
    //       breed: "pluffy",
    //       address: '327-B kazi khera',
    //       city: 'Kanpur',
    //       country: 'India',      
    //       photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690621103/khcn9hwyn0t1csp3j8qn.png",
    //       creator: "64c0de07554a8ac9aaed5fa3",
    //       date: "2023-07-29T08:59:25.044Z",
    //       __v: 0
    //     },
    //     {
    //       _id: "64c4d5f30e005a9720442715",
    //       name: "max",
    //       type: "dog",
    //       injuries: "Scratches, Mange",
    //       injuryDetail: "Max is a stray dog with several scratches and is suffering from mange.",
    //       breed: "Mixed Breed",
    //       address: '327-B kazi khera',
    //       city: 'Kanpur',
    //       country: 'India', 
    //       photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690621365/kuu9kc3wfgabijnkzzmq.png",
    //       creator: "64c0de07554a8ac9aaed5fa3",
    //       date: "2023-07-29T09:03:47.839Z",
    //       __v: 0
    //     },
    //     {
    //       _id: "64c4d7b60e005a972044271d",
    //       name: "Whiskers",
    //       type: "rabbit",
    //       breed: 'unknown',
    //       injuries: "Abandoned and Overgrown teeth",
    //       injuryDetail: "Whiskers is an abandoned stray rabbit with overgrown teeth that need attention.",
    //       address: '327-B kazi khera',
    //       city: 'Kanpur',
    //       country: 'India',
    //       photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690621816/q8kxvlyklutkdeuv4sa8.png",
    //       creator: "64c0de07554a8ac9aaed5fa3",
    //       date: "2023-07-29T09:11:18.714Z",
    //       __v: 0
    //     },
    //     {
    //       _id: "64c4d8730e005a9720442721",
    //       name: "blacky",
    //       type: "dog",
    //       injuries: "hit by bus",
    //       injuryDetail: "Whiskers is an abandoned stray rabbit with overgrown teeth that need attention.",
    //       breed: "german shephard",
    //       address: '327-B kazi khera',
    //       city: 'Kanpur',
    //       country: 'India',
    //       photo: "http://res.cloudinary.com/didvew55k/image/upload/v1690622005/sfegfjmufluxqcp0qqfy.png",
    //       creator: "64c0de07554a8ac9aaed5fa3",
    //       date: "2023-07-29T09:14:27.724Z",
    //       __v: 0
    //     }
    //   ]   
    const allAnimal = useSelector(store=> store.userInjuredAnimal);
    const {loading} = useSelector(store=>store.load);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getUserInjuredAnimal());
  },[]);

  return (
    <Box minHeight='100vh' mt={11} maxWidth='1200px' mx='auto' px={3}>
        <Box sx={{borderLeft:'5px solid #ff6d00'}}>
          <Typography color='tertiory' fontSize={{sm:24,xs:16}} fontWeight={700} ml={2}>
              My Rescue Animals
          </Typography>
        </Box>
        <Stack direction='column' mt={3} gap={2} mx='auto' maxWidth='1100px'>
          {loading?(
                  [1,2,3,4,5,6].map((e)=>{
                    return <LoadingAnimalCard key={e}/>
                  })
                ):
            (allAnimal.animals.map((animal,index)=>{
            return(<MyRescueCard animal={animal} key={index}/>)
          }))
          }
        </Stack>
        {!loading && allAnimal.animals.length===0 && (
          <Typography color='#757575' ml={3} p={2} variant="h5" gutterBottom><i>You have not rehomed any animal</i></Typography>
        )}
    </Box>
  )
}

export default MyRescuePage
