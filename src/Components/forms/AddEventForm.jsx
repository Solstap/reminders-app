import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const AddEventForm = ({
  setFormIsVisible,
  formIsVisible,
  birthdays,
  setBirthdays,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // get form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    console.log(name);
    const birthday = formData.get("birthday");
    const newBirthday = { name, birthday };
    console.log(newBirthday);
    console.log("adding new birthday");
  
    setBirthdays([...birthdays, newBirthday]
      .sort((a, b) => new Date(a.birthday) - new Date(b.birthday))
    )

    //close form
    setFormIsVisible(!formIsVisible);
  };


  return (
    <Box sx={{ position: 'fixed', right: 50, bottom: 50, zIndex: 1000 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={2}
        margin={2}
        boxShadow={3}
        sx={{ backgroundColor: 'white' }}

      >
        <Box width="100%" display="flex" justifyContent="flex-end">
          <IconButton onClick={() => setFormIsVisible(!formIsVisible)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography sx={{ mb: 2 }} component={"h3"}>Add event</Typography>
        <form onSubmit={handleSubmit}>
          <Box marginBottom={2}>
            <TextField
              name="name"
              id="name-input"
              label="Name"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box marginBottom={2}>
            <TextField
              name="birthday"
              id="birthday-input"
              label="Birthday"
              type="date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Add Birthday
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AddEventForm;
