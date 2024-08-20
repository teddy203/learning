from book import Book
from member import Member

class Library:
    def __init__(self):
        self.books = []
        self.members = []
    
    def add_book(self, book):
        self.books.append(book)
        print(f"Added book '{book.title}' to the library.")
    
    def register_member(self, member):
        self.members.append(member)
        print(f"Registered member '{member.name}' with ID '{member.member_id}'.")
    
    def find_book(self, isbn):
        for book in self.books:
            if book.isbn == isbn:
                return book
        print(f"No book found with ISBN: {isbn}")
        return None
    
    def find_member(self, member_id):
        for member in self.members:
            if member.member_id == member_id:
                return member
        print(f"No member found with ID: {member_id}")
        return None
    
    def borrow_book(self, member_id, isbn):
        member = self.find_member(member_id)
        book = self.find_book(isbn)
        if member and book:
            member.borrow_book(book)
    
    def return_book(self, member_id, isbn):
        member = self.find_member(member_id)
        book = self.find_book(isbn)
        if member and book:
            member.return_book(book)
    
    def __str__(self):
        books_str = "\n".join(str(book) for book in self.books)
        members_str = "\n".join(str(member) for member in self.members)
        return f"Library Status:\n\nBooks:\n{books_str}\n\nMembers:\n{members_str}"
