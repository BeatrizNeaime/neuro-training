# Neuro Training App

This project is a React Native application designed to assist physiotherapists during their sessions by providing an interactive and engaging experience. The app offers customizable gameplay to create moments of relaxation and fun for patients.

## Purpose

The **Neuro Training App** aims to support physiotherapists by introducing an enjoyable activity that combines visual and cognitive stimuli, helping patients stay engaged and motivated during their therapy sessions.

## Features

- Customizable Gameplay:

  - Select active colors for the game.
  - Set the duration for each phase.
  - Define rest periods between phases.
  - Choose the number of phases to play.

- Dynamic Game Logic:

  - Alternates between displaying selected colors or directional arrows and a white screen for rest periods.
  - Ensures randomness in color sequences without repeating the same color consecutively.

- Interactive Design:

  - Countdown timer to prepare players before the game starts.
  - Real-time display of color-based cues or directional arrows.

- User-Friendly Interface:

  - Simple controls for customization.
  - Clear and engaging visual design.

## How it works

1. Setup

   - Physiotherapists configure the game parameters (colors, time, phases, etc.).

2. Gameplay:
   - The game begins with a countdown timer.
     Patients respond to color cues and directional arrows.

## Technologies Used

- React Native: For cross-platform development.
- Expo: Simplifies development and deployment.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/BeatrizNeaime/neuro-training.git
```

2. Navigate to the project directory:

```bash
cd <project-directory>
```

3. Install dependencies:

```bash
npm install
```

4. Run the app:

```bash
npm run start
```

## Future Enhancements

- Add progress tracking for physiotherapy sessions.
- Include a database for patient performance records.
- Provide multilingual support for a broader audience.
