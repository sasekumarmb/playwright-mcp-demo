// src/App.jsx
import { useState } from "react";

function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState({ username: "", password: "" });
  const [formValue, setFormValue] = useState("");

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (user.username === "admin" && user.password === "password") {
      setPage("input");
    } else {
      alert("Invalid credentials. Try admin / password.");
    }
  };

  // Handle input submit
  const handleSubmitInput = (e) => {
    e.preventDefault();
    if (formValue.trim().length > 3) {
      setPage("validation");
    } else {
      alert("Input must be at least 4 characters.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {page === "login" && (
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-md w-80"
        >
          <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="border p-2 w-full mb-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="border p-2 w-full mb-3 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      )}

      {page === "input" && (
        <form
          onSubmit={handleSubmitInput}
          className="bg-white p-8 rounded-2xl shadow-md w-96"
        >
          <h2 className="text-xl font-bold mb-4 text-center">Enter Data</h2>
          <input
            type="text"
            placeholder="Type something..."
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            className="border p-2 w-full mb-3 rounded"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 w-full rounded hover:bg-green-600"
          >
            Validate
          </button>
        </form>
      )}

      {page === "validation" && (
        <div className="bg-white p-8 rounded-2xl shadow-md w-80 text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-3">✅ Success!</h2>
          <p className="text-gray-700">Your input has been validated.</p>
        </div>
      )}
    </div>
  );
}

export default App;
