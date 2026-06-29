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
//   hidden -  false = students can see quiz, true = can not see

const QUIZ_LIST = [
  {
    name:      "Chapter 5: Quadratic Equations",
    sheetId:   "1eLUb0pJsxCskCCo0T9Qb9iUf3W6nNU559I4bNTqaypw",
    subject:   "Mathematics",
    date:      "9 Jun 2026",
    questions: 20,
    duration:  30,
    open:      true,
    hidden:    false
  },
    {
    name:      "Elements, Compound, and Mixtures",
    sheetId:   "1OxAYGTOB0YD5rXQ6_t_GOjWGb7b8WMqRzHmkqxeP_SM",
    subject:   "Chemistry",
    date:      "9 Jun 2026",
    questions: 20,
    duration:  30,
    open:      true,
    hidden:    false
  },
  {
    name:      "Subject-Verb Agreement",
    sheetId:   "1WqnbZjuq_eDlRFlHE4r5dnq1atM7haZn6E5qwkP0-V4",
    subject:   "English",
    date:      "29 Jun 2026",
    questions: 20,
    duration:  30,
    open:      true,
    hidden:    false
  },
];
