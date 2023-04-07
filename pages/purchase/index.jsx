import CustomLink from "@/components/CustomLink";
import PurchaseCard from "@/components/purchase/PurchaseCard";
import styleColors from "@/styles/styleColors";
import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material";

export default function PurchasePage() {
  const purchaseList = [
    {
      orderTime: "00:00 01/01/2023",
      orderStatus: "Đang giao",
      orderDetail: [
        {
          shoesModelName:
            "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
          quantity: 5,
          color: "Xanh",
          size: 38,
          unitPrice: 500000,
          imageLink: "/image/shoes-sample1.webp",
        },
        {
          shoesModelName:
            "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
          quantity: 5,
          color: "Xanh",
          size: 38,
          unitPrice: 500000,
          imageLink: "/image/shoes-sample1.webp",
          orderStatus: "Đang giao",
          orderTime: "00:00 01/01/2023",
        },
      ],
    },
    {
      orderTime: "00:00 01/01/2023",
      orderStatus: "Đang giao",
      orderDetail: [
        {
          shoesModelName:
            "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
          quantity: 5,
          color: "Xanh",
          size: 38,
          unitPrice: 500000,
          imageLink: "/image/shoes-sample1.webp",
        },
      ],
    },
  ];
  return (
    <Container>
      <Box mt={3} mb={5}>
        <Box>
          <Typography variant="h4" fontWeight="600" textAlign="center">
            ĐƠN HÀNG
          </Typography>
        </Box>
        <Stack my={3} gap={2}>
          {purchaseList.map((purchase, index) => (
            <Box key={index}>
              <CustomLink href="/purchase/order">
                <Card sx={{ border: `1px solid ${styleColors.metalGray}`, borderRadius: "1em" }}>
                  <CardContent>
                    <PurchaseCard purchase={purchase}/>
                  </CardContent>
                </Card>
              </CustomLink>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}