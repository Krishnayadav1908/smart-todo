## 📝 Todo App (React + Context API)

A modern and responsive Todo Application built using React, Context API, and localStorage.
This app helps users manage their daily tasks efficiently with a clean and user-friendly UI.

## 🚀 Features

➕ Add new todos

✏️ Edit existing todos

✅ Mark todos as completed

❌ Delete todos

💾 Persistent data using localStorage

⚡ Fast & responsive

## 🛠️ Tech Stack

- React JS
- Context API (Global State Management)
- Tailwind CSS (Styling)
- LocalStorage (Data Persistence)

## 📂 Project Structure

src/
│── App.jsx
│── components/
│ ├── TodoForm.jsx
│ └── TodoItem.jsx
│── Contexts/
│ └── TodoContext.js
│── App.css
│── main.jsx

## 🔄 How It Works

- Global state is managed using Context API
- Todos are stored in localStorage to persist data
- UI updates automatically on add, edit, delete, or toggle actions
- Completed todos cannot be edited (UX decision)

## 🧠 Core Functionalities

Add Todo:
Users can add a new task using the input form.

Edit Todo:
Existing todos can be edited unless marked as completed.

Toggle Complete:
Mark tasks as done using a checkbox.

Delete Todo:
Remove tasks permanently from the list.

Follow these steps to run the project locally on your machine.

📸 Screenshots
![Todo App Screenshot](https://raw.githubusercontent.com/Krishnayadav1908/smart-todo/main/public/TodoScreenshot.png)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Krishnayadav1908/smart-todo.git
2️⃣ Navigate to the project folder
cd todocontextlocal

3️⃣ Install dependencies
npm install

4️⃣ Start the development server
npm run dev

```
