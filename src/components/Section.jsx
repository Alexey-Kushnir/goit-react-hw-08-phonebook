import PropTypes from 'prop-types';
import { Typography, Container } from '@mui/material';

export const Section = ({ title, children }) => {
  return (
    <Container sx={{ padding: '0 20px', margin: '50 auto', width: 400 }}>
      <Typography
        variant="h2"
        sx={{
          // color: 'red',
          fontSize: 30,
          fontWeight: 'bold',
          paddingTop: '40px',
          margin: '0 0 20px 0',
        }}
      >
        {title}
      </Typography>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]).isRequired,
};
