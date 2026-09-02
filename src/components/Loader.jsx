import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function Variants() {
  return (
    <Box
      sx={{
        maxWidth: "1500px",
        width: "100%",
        mx: "auto",
        px: "60px",
        boxSizing: "border-box",
      }}
    >
      <Stack spacing={2}>
        <Skeleton variant="text" sx={{ fontSize: "2rem", width: "100%"  }} animation="wave"/>

        

        <Skeleton
          variant="rectangular"
          width="100%"
          height={300}
        />
<Stack direction="row" spacing={2}>
  <Skeleton
    variant="rounded"
    sx={{ flex: 1 }}
    height={150}
  />
  <Skeleton
    variant="rounded"
    sx={{ flex: 1 }}
    height={150}
  />
</Stack>
        <Skeleton variant="text" sx={{ fontSize: "2rem", width: "100%"  }} animation="wave"/>
        <Skeleton variant="text" sx={{ fontSize: "2rem", width: "100%"  }} animation="wave"/>
        <Skeleton variant="text" sx={{ fontSize: "2rem", width: "100%"  }} animation="wave"/>
      
      </Stack>
    </Box>
  );
}