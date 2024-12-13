# React Notes App

A simple and intuitive React-based notes application that allows users to create, search, and delete notes. The app supports dark mode for a better user experience and stores notes in the browser's local storage, ensuring persistence across sessions.

---

## Features

- **Add Notes:** Quickly create and save your notes with a timestamp.
- **Search Notes:** Search through notes in real-time using the search bar.
- **Delete Notes:** Delete notes you no longer need.
- **Dark Mode:** Toggle between light and dark modes for comfortable viewing.
- **Local Storage:** Notes are saved in the browser's local storage, so they persist even after refreshing or reopening the browser.

---

## Screenshot

![image](https://github.com/user-attachments/assets/04c9d164-7239-4fa0-99e7-bba9b7199af7)


---

## Technologies Used

- **React.js**: For building the user interface.
- **NanoID**: For generating unique IDs for notes.
- **CSS**: For styling the application.
- **Local Storage**: For saving notes locally in the browser.

---

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/react-notes-app.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd react-notes-app
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the application**:
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000`.

---

## Project Structure

```
react-notes-app/
│
├── public/
│   ├── index.html
│
├── src/
│   ├── components/
│   │   ├── NotesList.js
|   |   ├── Note.js
|   |   ├── AddNote.js
│   │   ├── Search.js
│   │   └── Header.js
│   ├── App.js
│   ├── index.js
|   ├── index.css
│   └── App.css
│
├── package.json
└── README.md
```

---

## How to Use

1. **Add a Note**:
   - Click the "Add" button and type your note in the input field.
   - Save the note, and it will appear in the notes list with a timestamp.

2. **Search Notes**:
   - Use the search bar to filter notes by text.
   - The search updates dynamically as you type.

3. **Delete a Note**:
   - Click the delete icon on a note to remove it.

4. **Toggle Dark Mode**:
   - Use the toggle button in the header to switch between light and dark modes.

---

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes. Ensure your code is well-documented and tested.

---

Happy coding! 😊
