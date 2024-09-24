// src/components/BookDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  return (
    <div className="p-6">
      {book ? (
        <div className='flex gap-8'>
          <img src={book.imageUrl} alt={book.title} className="w-[500px] h-[700px] object-cover mb-4"/>
          <div>
          <h3 className="text-2xl font-bold">{book.title}</h3>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Published:</strong> {book.published}</p>
          <h4 className="text-xl mt-4">Preview:</h4>
          <p>{book.preview}</p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white py-1 px-3 mr-4">Borrow</button>
            <button className="bg-red-500 text-white py-1 px-3">Return</button>
          </div>
          </div>
        </div>
      ) : (
        <p>Book not found!</p>
      )}
    </div>
  );
};

export default BookDetail;
