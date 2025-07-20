# React API Practice Project

This is a small React project where I practiced fetching data from public APIs using both **fetch** and **axios**. It demonstrates key React concepts such as `useState`, `useEffect`, component composition, and prop handling.

## 🚀 Features

### ✅ `randomUser.jsx` (Using `fetch` + `useFetch` hook)

- Fetches a random user from:  
  `https://randomuser.me/api/`
- Displays user name, email, and picture.

---

### ✅ `movie.jsx` (Using `axios`)

- Fetches Titanic movie list from OMDB API:  
  `https://www.omdbapi.com/?apikey=YOUR_KEY&s=titanic`
- Renders movie cards with title, year, and poster.
- Handles error fallback via `try-catch`.

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6)
- Axios
- Fetch API
- CSS


## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/prathviesh1211/react-api-demo.git
cd react-api-practice

# Install dependencies
npm install

# Run the app
npm run dev
```
