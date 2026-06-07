// ============================================================
//  config.js — YOUR TWO CONFIGURATION POINTS
//  1. Paste your Apps Script Web App URL
//  2. Add each quiz to the QUIZ_LIST array
// ============================================================

const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID_HERE/exec";

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
    sheetId:   "YOUR_SHEET_ID_1",
    subject:   "Mathematics",
    date:      "15 Jun 2025",
    questions: 20,
    duration:  30,
    open:      true
  },
  {
    name:      "Unit Test: Laws of Motion",
    sheetId:   "YOUR_SHEET_ID_2",
    subject:   "Science",
    date:      "18 Jun 2025",
    questions: 25,
    duration:  45,
    open:      true
  },
  // Add more quizzes by copying the block above ↑
];
