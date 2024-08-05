import React, { useState } from 'react';  
import { Card, CardContent, Typography, TextField, Select, MenuItem, SelectChangeEvent } from '@mui/material';  
import GitHubIcon from '@mui/icons-material/GitHub';  
import LinkedInIcon from '@mui/icons-material/LinkedIn';  

const LinkCard = () => {  
  const [selectedValue, setSelectedValue] = useState('Github');  
  const [link, setLink] = useState('https://www.github.com/');  

  const handleChange = (event: SelectChangeEvent<string>) => {  
    setSelectedValue(event.target.value);  
  };   

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {  
    setLink(event.target.value);  
  };  

  return (  
    <Card variant="outlined" style={{ margin: '16px', padding: '16px' }}>  
      <Typography variant="h6">Link #1</Typography>  
      <CardContent>  
        <Typography variant="caption" sx={{ marginTop: '20px' }}>  
          Platform  
        </Typography>  
        <Select  
          value={selectedValue}  
          onChange={handleChange}  
          variant="outlined"  
          style={{ width: '100%', marginBottom: '16px' }}  
        >  
          <MenuItem value="Github">  
            <GitHubIcon /> Github  
          </MenuItem>  
          <MenuItem value="LinkedIn">  
            <LinkedInIcon /> LinkedIn  
          </MenuItem>  
        </Select>  
        <TextField  
          label="Link"  
          variant="outlined"  
          fullWidth  
          value={link}  
          onChange={handleLinkChange}  
        />  
      </CardContent>  
    </Card>  
  );  
};  

export default LinkCard;