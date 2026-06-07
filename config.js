// ============================================================
//  config.js — YOUR TWO CONFIGURATION POINTS
//  1. Paste your Apps Script Web App URL
//  2. Add each quiz to the QUIZ_LIST array
// ============================================================

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxHwJGIF-WRdsyUM4jUYA89HoNBvTGwsBlkc2OoUaOrPF5A2q5Td3EA2J1D3TudfAw_og/exec";

// ── ADD YOUR QUIZZES HERE ────────────────────────────────────
// Each entry needs:
//   name    → displayed in dropdowns and on the home page
//   sheetId → the Google Sheet ID for that quiz
//   subject → label shown on the quiz card (optional)
//   date    → date string shown on the quiz card (optional)
//   questions → number of questions (optional, for display)
//   duration  → minutes (optional, for display)
//   open    → true = students can take it, false = closed

const QUIZ_LIST = [
  {
    name:      "Chapter 5: Quadratic Equations",
    sheetId:   "1eLUb0pJsxCskCCo0T9Qb9iUf3W6nNU559I4bNTqaypw",
    subject:   "Mathematics",
    date:      "15 Jun 2025",
    questions: 20,
    duration:  30,
    open:      false
  },
];
