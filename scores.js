// ============================================
//  TEAM SCORES — edit the numbers below only.
//  The leaderboard re-sorts automatically.
// ============================================

// Set to "after" to show running points, "final" to show final points
window.SAHITYOTSAV_SCORE_MODE = "after";

// Running/current points (updates as results come in)
window.SAHITYOTSAV_SCORES_AFTER = {
  "Kadachira": 658,
  "Chakkarakkal": 516,
  "Peralasseri": 266,
  "Chembilode": 656,
  "Kanhirode": 58
};

// Final points (fill in when competition ends)
window.SAHITYOTSAV_SCORES_FINAL = {
  "Kadachira": 0,
  "Chakkarakkal": 0,
  "Peralasseri": 0,
  "Chembilode": 0,
  "Kanhirode": 0
};

// This is what the leaderboard reads — don't edit manually
window.SAHITYOTSAV_SCORES = window.SAHITYOTSAV_SCORE_MODE === "final"
  ? window.SAHITYOTSAV_SCORES_FINAL
  : window.SAHITYOTSAV_SCORES_AFTER;
