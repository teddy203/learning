from book import Book
from member import Member
from library import Library

def main():
    
    library = Library()
    
    
    book1 = Book("1984", "George Orwell", "1388659870")
    book2 = Book("To Kill a Mockingbird", "Harper Lee", "0796846532")
    library.add_book(book1)
    library.add_book(book2)
    
  
    member1 = Member("Alice", "M001")
    member2 = Member("Bob", "M002")
    library.register_member(member1)
    library.register_member(member2)
    
    
    library.borrow_book("M001", "1388659870")  
    library.borrow_book("M002", "0796846532")  
    
    
    print("\n" + str(library))
    
   
    library.return_book("M001", "1388659870")
    
  
    print("\n" + str(library))

if __name__ == "__main__":
    main()
