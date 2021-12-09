import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Container } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';


const labels = {
  0.5: 'I didnt like anything!',
  1: 'I dont like it!',
  1.5: 'Nothing for me!',
  2: 'Mh...',
  2.5: 'It was ok!',
  3: 'It was fine!',
  3.5: 'It was quite good actually!',
  4: 'I like what I experienced!',
  4.5: 'I really like PSOAStore!',
  5: 'I love PSOAStore. Will defenitively come again!',
};

const HoverRating= (props) =>{
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const { user } = props;
  const [value, setValue] = React.useState(4.5);
  const [hover, setHover] = React.useState(-1);

  useEffect(
    () => {
        if (user) {
            setFName(user.first_name);
            setLName(user.last_name);
        }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
);

  return (
    <Container>
      <ContentElement>
        <h2> Hello back. </h2>
        <br/>
        <p>  We are very happy that you want to share your shopping experience at PSOAStore with us. <br />
          <br />
          We do care a lot about the positive opinion of our customers and therefore we strongly orient our service to the needs of our customers. <b />
          We would like to know your opinion about our service and we would appreciate your feedback. <br />
          Please rate our service and share your opinion about our service. <br />
          Thank you very much for your time and we will be very grateful for your feedback. <br />
          <br />
          <br />
          You can give us feedback here:
          <br />
          <br />
        </p>
        <Box
          sx={{
            width: 2000,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"/>}
          />
          {value !== null && (
            <Box sx={{ ml: 4 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
        <br />
        <br />
        <h3>Thank you {fName + " " + lName}!</h3>
      </ContentElement>
    </Container>
  );
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

export default connect(mapStateToProps, null)(HoverRating);
