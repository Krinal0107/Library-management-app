// src/components/AddBookForm.js
import React, { useState } from 'react';

const AddBookForm = ({ onAddBook }) => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    published: '',
    imageUrl: '',
    preview: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(newBook);
    setNewBook({ title: '', author: '', genre: '', published: '', imageUrl: '', preview: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Add New Book</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="author"
          value={newBook.author}
          onChange={handleChange}
          placeholder="Author"
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="genre"
          value={newBook.genre}
          onChange={handleChange}
          placeholder="Genre"
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          name="published"
          value={newBook.published}
          onChange={handleChange}
          placeholder="Year Published"
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={newBook.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 w-full"
          required
        />
        <textarea
          name="preview"
          value={newBook.preview}
          onChange={handleChange}
          placeholder="Book Preview"
          className="border p-2 w-full"
          rows="4"
        />
        <button type="submit" className="bg-green-500 text-white py-2 px-4">Add Book</button>
      </div>
    </form>
  );
};

export default AddBookForm;
