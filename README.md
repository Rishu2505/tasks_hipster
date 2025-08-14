## 📦 Project Tasks Overview

This repository contains implementations for three real-world React Native challenges focused on location tracking, mapping, dynamic UI behavior, and real-time data handling — all aligned with Hipster Inc’s goal of assessing practical skills over credentials.

---

## 📸 Screenshots

### All Screens
![All Screens](./assets/images/hipster.gif)

---

### 🚀 Task 1: Offline Location Tracking & Route Drawing

**Objective**:  
Track user movement in real-time, draw the traveled path on a map, and persist route data locally — even offline — with support for both foreground and background tracking.

**Key Features**:
- Real-time GPS tracking with a custom moving icon
- Continuous polyline drawing of the traveled route
- Local persistence using `AsyncStorage`
- Route restoration on app restart
- Background tracking via `expo-location` and `expo-task-manager`
- Offline-friendly — no internet required

**Technology**:
- `expo-location`, `react-native-maps`, `@react-native-async-storage/async-storage`, `expo-task-manager`

---

### 📍 Task 2: Place Finder & Route Drawer

**Objective**:  
Allow users to search for a start and end location using OneMap API and draw the driving route between them using OSRM (Open Source Routing Machine) API.

**Key Features**:
- Live location search via OneMap API
- Route input with auto-fill of coordinates
- Route fetching via OSRM API
- Route map with clear polylines from GeoJSON
- Proper screen transitions for search, input, and route visualization

**Technology**:
- `react-native-maps`, `fetch`, GeoJSON parsing, external API integration

**APIs Used**:
- 🔍 [OneMap Search API](https://www.onemap.gov.sg/docs/)
- 🛣 [OSRM Route API](http://project-osrm.org/docs/v5.5.1/api/#route-service)

---

### ⬆️ Task 3: BottomSheet with Dynamic Height Based on Content

**Objective**:  
Create a reusable BottomSheet component that adapts its height based on content, supports both vertical and horizontal scrolling, and integrates animated open/close transitions.

**Key Features**:
- Smooth animated BottomSheet with dynamic height
- Vertical list of content cards on main screen
- Horizontal list of demo cards inside the BottomSheet
- Interactive BottomSheet behavior (swipe to close, tap outside to dismiss)
- Responsive layout handling overflow content
- Reusable across multiple screen contexts

**Technology**:
- `react-native-reanimated`, `react-native-gesture-handler`, `react-native-bottom-sheet` (or custom)
- Dynamic measurement using `onLayout` for height calculation

---

### 🧪 Evaluation Metrics Met

| Metric | Implementation Highlights |
|--------|----------------------------|
| ✅ App Functionality | Full permission handling for location, background tasks, and async data |
| ✅ Stability | No crashes on permission toggles or navigation transitions |
| ✅ Technical Skills | Modular hooks, type-safe components, reusable state, deep Expo integration |
| ✅ Code Quality | Clean, reusable, and well-structured codebase with separation of concerns |
| ✅ API Usage | Efficient external API integration with proper error and loading states |
| ✅ Offline Support | Tasks 1 and 2 include offline-friendly features (cached paths, UI fallback) |

---

These implementations demonstrate a real-world understanding of core mobile challenges like GPS tracking, dynamic UI rendering, external API usage, state management, and offline-first architecture — aligning with Hipster Inc.'s practical, performance-based evaluation process.

---

## 🛠️ How to Run This Project

### 1. **Clone the Repo**

```bash
git clone https://github.com/Rishu2505/tasks_hipster.git
cd tasks_hipster
```

---

### 2. **Install Dependencies**

```bash
npm install
# or
yarn install
```

---

### 3. **Start the Expo Server**

```bash
npx expo start
```

Choose your target:
- Press `i` for iOS Simulator (macOS only)
- Press `a` for Android Emulator (if installed)
- Scan QR code with Expo Go app on your phone

---

### 4. **Enable Background Tracking (Optional)**

If testing background tracking:

```bash
# Register the TaskManager background task
# This is automatically imported via background/locationTask.ts

# On Android: Ensure background permissions in app.json
# On iOS: Enable 'Location Updates' under Background Modes in Xcode (bare builds)
```

---

### 5. **Build for Simulator or Device with EAS**

> Install EAS CLI if not already:
```bash
npm install -g eas-cli
```

```bash
eas build --profile development --platform ios
# or
eas build --profile preview --platform android
```

To install on iOS Simulator (macOS):
```bash
xcrun simctl install booted /path/to/your-app.app
xcrun simctl launch booted com.yourcompany.yourapp
```

---

### 6. **Required Environment Setup**

Make sure to have:

- Node.js v16+
- Expo CLI (`npm install -g expo-cli`)
- EAS CLI (`npm install -g eas-cli`)
- Xcode (macOS only for iOS simulator builds)
- Android Studio (for Android testing)
