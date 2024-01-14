import { Grid, LinearProgress } from "@mui/material";

export default function Emotions() {
  return (
    <Grid container spacing={2} height="100%" width="100%">
      <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
        <HappinessEmoji />
        <LinearProgress
          variant="determinate"
          value={50}
          style={{ width: "100%", marginLeft: "10px" }}
        />
      </Grid>
      <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
        <SadnessEmoji />
        <LinearProgress
          variant="determinate"
          value={30}
          style={{ width: "100%", marginLeft: "10px" }}
        />
      </Grid>
      <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
        <AngerEmoji />
        <LinearProgress
          variant="determinate"
          value={70}
          style={{ width: "100%", marginLeft: "10px" }}
        />
      </Grid>
      <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
        <FearEmoji />
        <LinearProgress
          variant="determinate"
          value={40}
          style={{ width: "100%", marginLeft: "10px" }}
        />
      </Grid>
    </Grid>
  );
}

const emojiStyle = { fontSize: "2rem" }; // Adjust the font size as needed

const FearEmoji = () => (
  <span role="img" aria-label="fearful" style={emojiStyle}>
    😨
  </span>
);

const AngerEmoji = () => (
  <span role="img" aria-label="anger" style={emojiStyle}>
    😠
  </span>
);

const HappinessEmoji = () => (
  <span role="img" aria-label="happy" style={emojiStyle}>
    😊
  </span>
);

const SadnessEmoji = () => (
  <span role="img" aria-label="sad" style={emojiStyle}>
    😢
  </span>
);
