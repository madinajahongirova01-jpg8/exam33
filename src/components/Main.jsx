import { useState, useEffect } from "react";
import axios from "axios";



import { Dialog, DialogTitle,DialogContent,DialogActions, IconButton,TextField, Button,Divider, Box, Typography,Card, CardMedia,CardContent, CardActions,} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Pag from './Pagination';
import { useNavigate } from "react-router";


export const url = "https://to-dos-api.softclub.tj/api/to-dos";
export const url2 = "https://to-dos-api.softclub.tj/images";

const ACCENT = "#4FC3E8";
const ACCENT_DARK = "#2C3E50";
const TEXT_SLATE = "#4A6572";

const paperSx = { borderRadius: "20px", padding: "8px",minWidth: "380px",};
const titleSx = { color: ACCENT,fontWeight: 600,fontSize: "1.4rem", display: "flex", alignItems: "center", justifyContent: "space-between", pb: 2,};
const fieldSx = {"& .MuiOutlinedInput-root": { borderRadius: "14px",},mb: 2,};
const primaryBtnSx = { borderRadius: "14px",textTransform: "none",fontWeight: 600,fontSize: "1rem",py: 1.2, backgroundColor: ACCENT, boxShadow: "none","&:hover": { backgroundColor: "#3EB4DB", boxShadow: "none", },};
const cancelBtnSx = { textTransform: "none", color: "#8FA3B0",fontWeight: 500,};

export default function Main() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(null);

  const [openE, setOpenE] = useState(false);
  const [nameE, setNameE] = useState("");
  const [descE, setDescE] = useState("");
  const [idx, setIdx] = useState(null);


const navigate=useNavigate()



  async function getUsers() {
    try {
      let { data } = await axios.get(url);
      setUsers(data.data || []);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteUser(id) {
    try {
      await axios.delete(`${url}?id=${id}`);
      getUsers();
    } catch (error) {
      console.error(error);
    }
  }

  async function addUser() {
    let formData = new FormData();
    formData.append("Name", name);
    formData.append("Description", desc);
    if (img) {
      for (let i = 0; i < img.length; i++) {
        formData.append("Images", img[i]);
      }
    }
    try {
      await axios.post(url, formData);
      getUsers();
      setOpen(false);
      setName("");
      setDesc("");
      setImg(null);
    } catch (error) {
      console.error(error);
    }
  }

  async function editUser() {
    try {
      await axios.put(url, {
        name: nameE,
        description: descE,
        id: idx,
      });
      getUsers();
      setOpenE(false);
      setIdx(null);
      setNameE("");
      setDescE("");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="w-full p-4">
      {/* ---------------- Add Dialog ---------------- */}
      <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{ sx: paperSx }}>
        <DialogTitle sx={titleSx}>
          Добавить задачу
          <IconButton onClick={() => setOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ pt: 3 }}>
          <TextField
            fullWidth
            placeholder="Название..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={fieldSx}
          />
          <TextField
            fullWidth
            placeholder="Описание..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            sx={fieldSx}
          />
          <Button
            component="label"
            variant="outlined"
            sx={{
              borderRadius: "14px",
              textTransform: "none",
              borderColor: "#E0E0E0",
              color: ACCENT_DARK,
              mb: 1,
            }}
          >
            Выбрать изображения
            <input
              hidden
              multiple
              type="file"
              onChange={(e) => setImg(e.target.files)}
            />
          </Button>
        </DialogContent>
        <DialogActions sx={{ flexDirection: "column", px: 3, pb: 3, gap: 1 }}>
          <Button fullWidth variant="contained" sx={primaryBtnSx} onClick={addUser}>
            Сохранить
          </Button>
          <Button fullWidth sx={cancelBtnSx} onClick={() => setOpen(false)}>
            Отмена
          </Button>
        </DialogActions>
      </Dialog>

      {/* ---------------- Edit Dialog ---------------- */}
      <Dialog open={openE} onClose={() => setOpenE(false)} PaperProps={{ sx: paperSx }}>
        <DialogTitle sx={titleSx}>
          Редактировать
          <IconButton onClick={() => setOpenE(false)} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ pt: 3 }}>
          <TextField fullWidth placeholder="Название..."  value={nameE} onChange={(e) => setNameE(e.target.value)} sx={fieldSx}/>
          <TextField  fullWidth  placeholder="Описание..." value={descE} onChange={(e) => setDescE(e.target.value)} sx={fieldSx}/>
        </DialogContent>
        <DialogActions sx={{ flexDirection: "column", px: 3, pb: 3, gap: 1 }}>
          <Button fullWidth variant="contained" sx={primaryBtnSx} onClick={editUser}>
            Сохранить
          </Button>
          <Button fullWidth sx={cancelBtnSx} onClick={() => setOpenE(false)}>
            Отмена
          </Button>
        </DialogActions>
      </Dialog>

      <Button variant="contained"  startIcon={<AddIcon />}  sx={{ ...primaryBtnSx, width: "auto", mb: 3 }}  onClick={() => setOpen(true)} >
        Добавить
      </Button>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.isArray(users) &&
          users.map((user) => {
            const imageName =
              Array.isArray(user.images) && user.images.length > 0
                ? user.images[0].imageName || user.images[0]
                : null;

            return (
              <Card
                key={user.id}
                elevation={0}
                sx={{ borderRadius: "24px", boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.06)",  display: "flex",  flexDirection: "column",  overflow: "hidden",  bgcolor: "#fff",    transition: "transform 0.3s ease, box-shadow 0.3s ease",  cursor: "pointer", "&:hover": {  transform: "scale(1.05)",   boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.12)",},  }}  >
                <Box sx={{ position: "relative", width: "100%", height: "200px" }}>
                  <CardMedia
                    component="img"
                    image={imageName ? `${url2}/${imageName}` : "https://placehold.co/600x400?text=No+Image"}
                    alt={user.name}
                    sx={{ width: "100%", height: "100%",  objectFit: "cover",  objectPosition: "center",   }} />
                  <Box
                    sx={{   position: "absolute",  top: 12,  right: 12,  display: "flex",  gap: 0.5,  backgroundColor: "rgba(255, 255, 255, 0.85)",  backdropFilter: "blur(4px)",  borderRadius: "12px",  p: 0.5, }} >
                    <IconButton
                      size="small"
                      onClick={() => {
                        setOpenE(true);
                        setIdx(user.id);
                        setNameE(user.name);
                        setDescE(user.description);
                      }}
                    >
                      <EditIcon fontSize="small" sx={{ color: TEXT_SLATE }} />
                    </IconButton>
                    <IconButton size="small" onClick={() => deleteUser(user.id)}>
                      <DeleteIcon fontSize="small" color="error" />
                    </IconButton>
                  </Box>
                </Box>

                <CardContent sx={{ p: 3, pt: 3, flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{  color: TEXT_SLATE,  fontWeight: 500,  mb: 1.5,  fontSize: "1.35rem",  }}  >
                    {user.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{  color: "#6B8798",  lineHeight: 1.5,  fontSize: "1rem",  }}  >
                    {user.description}
                  </Typography>
                </CardContent>

                <CardActions
                  sx={{   px: 3,  pb: 3,  pt: 0,   display: "flex",   justifyContent: "space-between",    alignItems: "center",  }} >

                  <Button
                    variant="outlined"

onClick={()=>navigate(`/info/${user.id}`)}

                    sx={{  borderRadius: "20px",  textTransform: "none", color: TEXT_SLATE,  borderColor: TEXT_SLATE,  fontSize: "0.9rem",  px: 2.5,  py: 0.5,   }} >
                    Читать
                  </Button>
                  <Typography
                    sx={{ color: "#90A4AE",  fontSize: "0.9rem", fontWeight: 400,  }} >
                    25.05.2020
                  </Typography>
                </CardActions>
              </Card>
            );
          })}

      </div>
      
   <Pag/>
    </section>
  );
}



