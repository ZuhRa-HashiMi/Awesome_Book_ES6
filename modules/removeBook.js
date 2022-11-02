/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable import/newline-after-import */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable import/no-unresolved */
import Books from './Books.js';
import snaker from './flashMessage.js';
export default function removeBk() {
    const Book = new Books();
    Book.removeBook(this.id);
    this.parentNode.parentNode.remove();
    snaker('remove', '<b> Remove:</b> Book Removed successfully ', 4000);
  }