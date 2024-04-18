import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Divider,
  Card,
  CardContent,
  Box,
  useTheme,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const EntryList = ({ entries, handleEdit, handleDelete }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        overflow: entries.length > 3 ? "auto" : "hidden",
        maxHeight: "500px",
      }}
    >
      <List>
        {entries.map((entry) => (
          <React.Fragment key={entry.id}>
            <Card
              variant="outlined"
              sx={{ backgroundColor: theme.palette.grey[600] }}
            >
              <CardContent>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant="body1" color={theme.palette.grey[0]}>
                        Name: {entry.name}
                      </Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          variant="body1"
                          color={theme.palette.grey[0]}
                        >
                          Age: {entry.age}
                        </Typography>
                        <Typography
                          variant="body1"
                          color={theme.palette.grey[0]}
                        >
                          Address: {entry.address}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => handleEdit(entry)}
                      sx={{ color: theme.palette.grey[0], marginRight: "1rem" }}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      edge="end"
                      onClick={() => handleDelete(entry.id)}
                      sx={{ color: theme.palette.grey[0] }}
                    >
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </CardContent>
            </Card>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default EntryList;
