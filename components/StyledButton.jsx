import styleColors from "@/styles/styleColors";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const PrimaryButton = styled(Button)({
  color: styleColors.white,
  backgroundColor: styleColors.black,
  ":hover": {
    color: styleColors.gray.dark,
    backgroundColor: styleColors.white,
    outline: `1px solid ${styleColors.gray.dark}`,
  },
  ":disabled": {
    color: styleColors.white,
    backgroundColor: styleColors.gray.dark
  }
});

const SecondaryButton = styled(Button)({
  color: styleColors.gray.dark,
  backgroundColor: styleColors.white,
  outline: `1px solid ${styleColors.gray.dark}`,
  ":hover": {
    color: styleColors.white,
    backgroundColor: styleColors.black,
    outline: `1px solid ${styleColors.gray.dark}`,
  },
});

const SelectButton = (props) => {
    const {selected, children, ...restOfProps} = props;
  const BasicButton = (
    <Button
      {...restOfProps}
      sx={{
        color: styleColors.gray.dark,
        backgroundColor: styleColors.white,
        outline: `1px solid ${styleColors.gray.dark}`,
        ":hover": {
          outline: `2px solid ${styleColors.blue}`,
        },
      }}
    >
      {children}
    </Button>
  );

  const SelectButton = (
    <Button
      {...restOfProps}
      sx={{
        color: styleColors.gray.dark,
        backgroundColor: styleColors.white,
        outline: `2px solid ${styleColors.blue}`,
        overflow: 'hidden',
        ":after": {
            content: '""',
            position: "absolute",
            right: "0",
            bottom: "0",
            width: "80px",
            height: "30px",
            backgroundColor: styleColors.blue,
            transform: 'translate(60%, 50%) rotate(-30deg)',
        }
      }}
    >
      {children}
    </Button>
  );

  if(selected == true){
    return SelectButton;
  }

  return BasicButton;
};

export default Button;
export { PrimaryButton, SecondaryButton, SelectButton };
