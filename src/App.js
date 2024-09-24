// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import AddBookForm from './components/AddBookForm';
import Footer from './components/Footer';

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald ',
      genre: 'Fiction',
      published: 1925,
      imageUrl: 'https://res.cloudinary.com/shobhit2205/image/upload/v1727196633/WhatsApp_Image_2024-09-24_at_10.19.53_PM_iepxg6.jpg',
      preview: 'In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since. “Whenever you feel like criticizing anyone,” he told me, “just remember that all the people in this world haven’t had the advantages that you’ve had.” He didn’t say any more, but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I’m inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores.'
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
      published: 1949,
      imageUrl: 'https://res.cloudinary.com/shobhit2205/image/upload/v1727196489/WhatsApp_Image_2024-09-24_at_10.15.48_PM_zoxl5k.jpg',
      preview: 'It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him. The hallway instantly struck cold and bleak, like a refrigerated tomb. The air was bitter with the smell of boiled cabbage and old rag mats.'
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      published: 1960,
      imageUrl: 'https://res.cloudinary.com/shobhit2205/image/upload/v1727196489/WhatsApp_Image_2024-09-24_at_10.16.00_PM_jr8nca.jpg',
      preview: 'When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem’s fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his palm outward. He couldn’t have cared less, so long as he could pass and punt.'
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Romance',
      published: 1813,
      imageUrl: 'https://res.cloudinary.com/shobhit2205/image/upload/v1727196488/WhatsApp_Image_2024-09-24_at_10.16.13_PM_xf7jkw.jpg',
      preview: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters. “My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?”'
    },
    {
      id: 5,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      published: 1954,
      imageUrl: 'https://res.cloudinary.com/shobhit2205/image/upload/v1727196489/WhatsApp_Image_2024-09-24_at_10.17.08_PM_l9gdle.jpg',
      preview: 'When Mr. Bilbo Baggins of Bag-End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton. Bilbo had lived in the quiet village of Hobbiton all his life, and no hobbit had ever been known to live beyond the hundred mark. The oldest hobbit on record was Old Took, who had lived to be 130; and Bilbo was now nearing that venerable age.'
    },
    {
      id: 6,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Fiction',
      published: 1951,
      imageUrl: 'https://res.cloudinary.com/shobhit2205/image/upload/v1727196488/WhatsApp_Image_2024-09-24_at_10.14.46_PM_hutvqw.jpg',
      preview: 'If you really want to hear about it, the first thing you’ll probably want to know is where I was born and what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don’t feel like going into it, if you want to know the truth. In the first place, that stuff bores me, and in the second place, my parents would have about two hemorrhages apiece if I told anything pretty personal about them.'
    },
    {
      id: 7,
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      genre: 'Philosophical Fiction',
      published: 1890,
      imageUrl: 'https://res.cloudinary.com/shobhit2205/image/upload/v1727196489/WhatsApp_Image_2024-09-24_at_10.16.43_PM_gmhvpz.jpg',
   preview: 'The studio was filled with the rich odour of roses, and when the light summer breeze stirred amidst the trees of the garden, there came through the open window the sweet murmur of the fountain, or the more distant note of a bird. From the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum, whose tremulous branches seemed hardly able to bear the burden of a beauty so flamelike as theirs.'
    },
    {
      id: 8,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      genre: 'Historical Fiction',
      published: 1869,
      imageUrl: 'https://res.cloudinary.com/shobhit2205/image/upload/v1727196488/WhatsApp_Image_2024-09-24_at_10.15.31_PM_okpad2.jpg',
      preview: 'Well, Prince Stepan Arkadyevich Oblonsky—Stiva as he was called in the fashionable world—waked up early, feeling as though he had had a bad dream. He woke up in his comfortable, luxurious bed, with its springs and its mattress, in his well-appointed, elegant bedroom, with its expensive furniture and its fine decorations, and he felt as though he had had a bad dream.'
    },
    {
      id: 9,
      title: 'Moby-Dick',
      author: 'Herman Melville',
      genre: 'Adventure',
      published: 1851,
      imageUrl: 'https://res.cloudinary.com/shobhit2205/image/upload/v1727196488/WhatsApp_Image_2024-09-24_at_10.14.58_PM_ty0h3f.jpg',
      preview: 'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation.'
    },
    {
      id: 10,
      title: 'The Adventures of Huckleberry Finn',
      author: 'Mark Twain',
      genre: 'Adventure',
      published: 1885,
      imageUrl: 'https://res.cloudinary.com/shobhit2205/image/upload/v1727196488/WhatsApp_Image_2024-09-24_at_10.16.28_PM_ndu38n.jpg',
      preview: 'You don’t know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain’t no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly. There was things which he stretched, but mainly he told the truth.'
    }
  ]);

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList books={books} />} />
        <Route path="/book/:id" element={<BookDetail books={books} />} />
        <Route path="/add-book" element={<AddBookForm onAddBook={handleAddBook} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
