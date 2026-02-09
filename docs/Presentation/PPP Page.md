---
marp: true
---

# Music Notation Platform

---

### Overview

One of the main ways to compose music in the modern day is by using a music notation application. 
Many music notation apps, however, have certain limiting factors, such as:
- accessibility
- affordability

---

### Overview
This platform aims to be an easily-accessible music notation software that is simple to use and completely free - *no matter what.*

---

# Features and Requirements

---

1. Score Management
-  Create a new score
- Set:
    - Title
    - Time signature (default: 4/4)
    - Key signature (default: C major)
    - Tempo (BPM)
-Save and load scores from persistent storage

---

2. Notation Data Model
The system shall internally represent:
- Score
- Staff 
- Measures
- Notes:
    - Pitch (A–G)
    - Octave
    - Duration (whole, half, quarter, eighth)
    - Accidental (sharp, flat, natural)
- Rests
- Clef

---

3. Note Entry & Editing

- Add notes by clicking on the staff
- Select note duration before placement
- Add rests
- Delete notes or rests
- Move notes vertically to change pitch
- Automatically advance cursor within measures
---

4. Measure & Timing Logic
- Enforce time signature rules per measure
- Prevent overfilling a measure
- Automatically create new measures when needed
- Display bar lines between measures

---

5. Rendering Engine

Render notation using SVG

Display:

- Staff lines
- Clef
- Notes
- Rests
- Bar lines
- Maintain consistent horizontal spacing
- Re-render dynamically on edits

---

6. Playback

- Play score from beginning
- Correct pitch and rhythm playback
- Tempo-based timing
- Visual playback cursor

---

7. Import / Export

- Export score to MIDI or MusicXML
- Export must reflect current notation state accurately

---

8. Undo / Redo

- Support undo and redo of:
- Note addition
- Deletion
- Pitch changes
- Implemented using a command or history-based system

---

# Milestones

---

### Sprint 1

Sprint 1-1: Score managmement

Sprint 1-2: Notation Data Model

Sprint 1-3: Note entry and Undo/Redo

Sprint 1-4: Measure/Time/Tempo logic

---

### Sprint 2

Sprint 2-1: Finish Measure/Time/Tempo Logic and begin Rendering Setup

Sprint 2-2: Finish Rendering Setup and  begin Playback Logic

Sprint 2-3: Finalize Playback (Push The Limits!)

Sprint 2-4: Import/Export

Sprint 2-5: Flex Week - Finalize EVERYTHING

--- 

All of this information will be in the docs folder on the Github Repository and on the Project Page.

---

# Questions?

---

# Thank You