import React from "react";
import { ListItem, List, Box } from "@mui/material";
const LinkDetails = (props) =>{

  return <React.Fragment>
    <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          color: 'primary.main'
        }}
      >
{ <List >
        {props.links.map((d) =>  
          <ListItem>
            <a href={`https://github.com/apache/incubator-age/pull/${d}`}>Artifact {d}</a>
          </ListItem>
        )}
    </List>}
      </Box>
    
  </React.Fragment>
};
export default LinkDetails