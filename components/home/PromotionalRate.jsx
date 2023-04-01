import styleColors from "@/styles/styleColors";
import { Star } from "@mui/icons-material";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import StarAmount from "../StarAmount";

export default function PromotionalRate({ rate }) {
  return (
    <Box px={3} py={5} sx={{ border: `1px solid ${styleColors.black}`, borderRadius: "1em" }}>
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar alt="avatar" src={rate.avatar} sx={{ width: "60px", height: "60px" }} />
        <Typography variant="h6" color={styleColors.metalGray}>
          {rate.name}
        </Typography>
      </Box>
      <Box mt={1}>
        <StarAmount star={5}/>
      </Box>
      <Box mt={2}>
        <Typography>"{rate.content}"</Typography>
      </Box>
    </Box>
  );
}