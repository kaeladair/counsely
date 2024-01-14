import { Stack, Avatar, Typography, Chip, Icon } from "@mui/material";

export default function Profile() {
  return (
    <Stack
      width="100%"
      height="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      padding={2}
    >
      <Avatar />
      <Typography>Mia Brown</Typography>
      <Stack width="100%" direction="row" spacing={2}>
        <Icon width="24px" height="24px">
          <MessageIcon />
        </Icon>
        <Stack width="100%" direction="column">
          <Typography>Communication Style</Typography>
          <Typography>Initiator</Typography>
        </Stack>
      </Stack>
      <Stack width="100%" direction="row" spacing={2}>
        <Icon>
          <EditIcon />
        </Icon>
        <Stack width="100%" direction="column">
          <Typography>Learning Style</Typography>
          <Typography>Collaborative Learner</Typography>
        </Stack>
      </Stack>
      <Stack
        width="100%"
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Typography>Interests</Typography>
        <Stack width="100%" direction="row" spacing={1}>
          <Chip label="Art" />
          <Chip label="Music" />
          <Chip label="Dance" />
        </Stack>
      </Stack>
    </Stack>
  );
}

const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.7891 1.47978L22.3791 2.06978C23.1921 2.88378 23.0691 4.32678 22.1021 5.29278L9.93505 17.4598L5.99305 18.9018C5.49805 19.0838 5.01605 18.8478 4.91805 18.3768C4.88493 18.2059 4.90053 18.0292 4.96305 17.8668L6.43305 13.8908L18.5661 1.75678C19.5331 0.790781 20.9761 0.665781 21.7891 1.47978ZM9.40405 2.68978C9.53537 2.68978 9.66541 2.71565 9.78674 2.7659C9.90806 2.81616 10.0183 2.88982 10.1112 2.98267C10.204 3.07553 10.2777 3.18577 10.3279 3.3071C10.3782 3.42842 10.4041 3.55846 10.4041 3.68978C10.4041 3.8211 10.3782 3.95114 10.3279 4.07246C10.2777 4.19379 10.204 4.30403 10.1112 4.39689C10.0183 4.48975 9.90806 4.56341 9.78674 4.61366C9.66541 4.66392 9.53537 4.68978 9.40405 4.68978H5.40405C4.87362 4.68978 4.36491 4.90049 3.98984 5.27557C3.61477 5.65064 3.40405 6.15935 3.40405 6.68978V18.6898C3.40405 19.2202 3.61477 19.7289 3.98984 20.104C4.36491 20.4791 4.87362 20.6898 5.40405 20.6898H17.4041C17.9345 20.6898 18.4432 20.4791 18.8183 20.104C19.1933 19.7289 19.4041 19.2202 19.4041 18.6898V14.6898C19.4041 14.4246 19.5094 14.1702 19.6969 13.9827C19.8845 13.7951 20.1388 13.6898 20.4041 13.6898C20.6693 13.6898 20.9236 13.7951 21.1112 13.9827C21.2987 14.1702 21.4041 14.4246 21.4041 14.6898V18.6898C21.4041 19.7506 20.9826 20.7681 20.2325 21.5182C19.4823 22.2684 18.4649 22.6898 17.4041 22.6898H5.40405C4.34319 22.6898 3.32577 22.2684 2.57563 21.5182C1.82548 20.7681 1.40405 19.7506 1.40405 18.6898V6.68978C1.40405 5.62892 1.82548 4.6115 2.57563 3.86135C3.32577 3.11121 4.34319 2.68978 5.40405 2.68978H9.40405Z"
        fill="#885EFF"
      />
    </svg>
  );
};

const MessageIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M13 0.188012C5.92401 0.188012 0.187012 5.25201 0.187012 11.5C0.187012 14.677 1.67501 17.539 4.06301 19.594C3.54201 22.603 0.176012 23.828 0.406012 24.656C3.41601 25.901 9.37701 23.011 10.281 22.563C11.155 22.729 12.07 22.813 13 22.813C20.076 22.813 25.813 17.748 25.813 11.5C25.813 5.25201 20.075 0.188012 13 0.188012Z"
        fill="#885EFF"
      />
    </svg>
  );
};
