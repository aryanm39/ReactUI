# FSD-2

# Step-by-Step Guide to Start a React Application in Visual Studio Code

### 3. (Optional but Recommended) VS Code Extensions
- ES7+ React/Redux/React-Native Snippets
- Prettier (Code formatter)
- ESLint

#### ✅ Option A: Using Vite (Fast and Modern)
```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
```

#### ✅ Option B: Using Create React App (CRA)
```bash
npx create-react-app my-react-app
cd my-react-app
```

### Step 4: Start the Development Server
Run the app using:
- `npm run dev` # for Vite
- `npm start` # for CRA

Then open your browser and visit:
- http://localhost:5173 # Vite default port
- http://localhost:3000 # CRA default port

### Step 5: Explore the Project Structure
Your folder will look like this (Vite version):
```
my-react-app/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

**Key files:**
- **App.jsx**: Main component
- **main.jsx**: Entry point that renders `<App />`
- **package.json**: Lists dependencies and scripts

### Step 6: Edit Your First React Component
Open `src/App.jsx` and replace the content:

```jsx
function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p>Welcome to your first app.</p>
    </div>
  );
}

export default App;
```

Save the file and your browser will auto-refresh to show changes!

| `npm run dev` | Start development server (Vite)
| `npm start` | Start development server (CRA) 
| `npm run build` | Build app for production 
| `npm install <pkg>` | Install new packages 