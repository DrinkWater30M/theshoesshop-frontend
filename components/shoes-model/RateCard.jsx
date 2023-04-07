import { Avatar, Box, Card, CardContent, Stack, Typography } from "@mui/material";
import StarAmount from "../StarAmount";
import { StyledImage } from "../layouts/StyledImage";
import styleColors from "@/styles/styleColors";

export default function RateCard({ rate }) {
  return (
    <Card sx={{ border: `1px solid ${styleColors.black}` }}>
      <CardContent>
        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={1}>
          <Box flex={{ sm: 5, md: 6 }} display="flex" gap={1}>
            <Box>
              <Avatar src="/image/shoes-sample1.webp" sx={{ width: "60px", height: "60px" }} />
            </Box>
            <Stack gap={1}>
              <Box>
                <Typography>{rate.customer.customerName}</Typography>
              </Box>
              <Box>
                <StarAmount star={rate.rateStar} />
              </Box>
              <Box>
                <Typography>{rate.rateTime}</Typography>
              </Box>
              <Box>
                <Typography>
                  Màu sắc: {rate.shoes.color}, Kích thước: {rate.shoes.size}
                </Typography>
              </Box>
              <Box>
                <Typography textAlign="justify">{rate.content}</Typography>
              </Box>
            </Stack>
          </Box>
          {rate.imageLink && (
            <Box flex={{ sm: 5, md: 4 }}>
              <Box sx={{ width: "100%", height: "auto", aspectRatio: "1/1" }}>
                <StyledImage src={rate.imageLink} alt="feedback" width="100%" height="100%" />
              </Box>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}