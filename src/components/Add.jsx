import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  EmojiEmotions,
  Image,
  VideoCameraBack,
  PersonAdd,
  DateRange,
} from "@mui/icons-material";
import { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 10,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setOpen((prev) => !prev)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen((prev) => !prev)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor="background.default"
          color="text.primary"
          borderRadius={5}
          p={3}
        >
          <Typography variant="h6" textAlign="center" color="gray">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <Typography fontWeight={500} variant="span">
              John doe
            </Typography>
          </UserBox>
          <TextField
            multiline
            rows={3}
            sx={{ width: "100%" }}
            placeholder="what's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={2} marginY={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Add</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
