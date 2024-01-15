import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const DeletePerson = ({ person, onDelete }) => {
  const handleDelete = () => {
    onDelete(person);
  };

  return (
    <div>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default DeletePerson;