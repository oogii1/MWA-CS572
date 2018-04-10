#Commands
-----------------------------
> db.book.createIndex({isbn_number:1},{unique:true})
> db.book.createIndex({keywords:1})
> db.book.createIndex({borrowed_copies:1})

#I supposed this model
-----------------------------

Book {
	_id: "",
	isbn_number: "",
	authors: [],
	keywords: [],
	copies: [],
	borrowed_copies: [],
	available: ""
}

Student {
	_id: "",
	name: "",
	books_borrowed: [],
	return_dates: [
		{
			book: "",
			return_date: ""
		}
	]
}

Author {
	_id: "",
	name: "",
	books: []
}

Librarian {
	username: "",
	password: ""
}

