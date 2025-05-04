# 🌦️ Weather App

A responsive and lightweight React-based weather application that allows users to search for the current weather in any city. Built with **React 19**, **Tailwind CSS**, **Axios**, and **OpenWeatherMap API**.

---

## 📑 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

---

## 📌 Introduction

This app allows users to check the current weather of any city by typing its name. It displays key information such as temperature, weather condition, and wind speed. It also stores recent search history (last 5 cities) using local storage.

---

## ✨ Features

- 🔍 Search for real-time weather data by city name
- 💾 Saves last searched city and recent search history in local storage
- 📊 Displays temperature, weather condition, and wind speed
- 🌤 Weather icons based on current conditions
- ⚡ Built with fast and modern tooling (Vite + React 19)
- 📱 Responsive and styled using Tailwind CSS

---

## 📦 Dependencies

### ✅ Runtime

| Package                  | Version     | Description                          |
|--------------------------|-------------|--------------------------------------|
| `react`                  | ^19.0.0     | Core React library                   |
| `react-dom`              | ^19.0.0     | React DOM rendering                  |
| `axios`                  | ^1.9.0      | For making HTTP requests             |
| `tailwindcss`            | ^4.1.5      | Utility-first CSS framework          |
| `react-icons`            | ^5.5.0      | Icon library for React               |
| `@tailwindcss/vite`      | ^4.1.5      | Tailwind plugin for Vite             |

### 🛠️ Development

| Package                        | Version     | Description                           |
|--------------------------------|-------------|---------------------------------------|
| `vite`                         | ^6.3.1      | Build tool for fast dev & bundling    |
| `@vitejs/plugin-react`         | ^4.3.4      | Vite support for React                |
| `eslint`                       | ^9.22.0     | Linter for maintaining code quality   |
| `@eslint/js`                   | ^9.22.0     | ESLint JavaScript support             |
| `eslint-plugin-react-hooks`    | ^5.2.0      | Rules for React hooks                 |
| `eslint-plugin-react-refresh`  | ^0.4.19     | Linting for React Fast Refresh        |
| `globals`                      | ^16.0.0     | Global variables config for linting   |
| `@types/react`                 | ^19.0.10    | Type definitions for React            |
| `@types/react-dom`            | ^19.0.4     | Type definitions for ReactDOM         |

---

## 🧪 Examples

Try searching for the following cities:

- **New York**
- **Tokyo**
- **London**
- **Dhaka**
- **Sydney**

🔁 Click on any **recent search** button to instantly fetch data for previously searched cities.

---

## 🧯 Troubleshooting

| Issue                  | Solution                                                                 |
|------------------------|--------------------------------------------------------------------------|
| ❌ City not found       | Make sure the name is spelled correctly in English.                      |
| 🔐 API key issues       | Double-check that your API key is correct and not expired.               |
| 🌐 No response          | Check your internet connection and inspect browser console logs.         |
| 🌀 Stuck on loading     | Try refreshing the page or check the browser's network tab.              |

---

## 🛠️ Installation

Make sure you have **Node.js (>= 18)** and **npm** or **yarn** installed.

```bash
# Clone the repository
git clone https://github.com/your-username/weather-app.git
cd weather-app

# Install dependencies
npm install
# or
yarn
