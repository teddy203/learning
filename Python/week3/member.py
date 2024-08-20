class Member:
    def __init__(self, name, member_id):
        self.name = name
        self.member_id = member_id
        self.borrowed_books = []
    
    def borrow_book(self, book):
        if not book.is_borrowed:
            self.borrowed_books.append(book)
            book.borrow()
        else:
            print(f"Sorry, the book '{book.title}' is already borrowed by someone else.")
    
    def return_book(self, book):
        if book in self.borrowed_books:
            self.borrowed_books.remove(book)
            book.return_book()
        else:
            print(f"You haven't borrowed the book '{book.title}'.")
    
    def __str__(self):
        borrowed_books_titles = ', '.join([book.title for book in self.borrowed_books]) or 'No books borrowed'
        return f"Member[Name: {self.name}, ID: {self.member_id}, Borrowed Books: {borrowed_books_titles}]"
