# Block 30 - Book Buddy

## Introduction

We are working with a new client who is wanting to design an online library for the public. Another Full Stack Solutions team has already built out the API, but we need your assistance in developing the front end to ensure on-time delivery to the client. When this is complete, please submit the link to the deployed application so I can share it with the client.

Details on the API can be found 🔗 [here](https://fsa-book-buddy-b6e748d1380d.herokuapp.com/docs/)


<section className="booksSection">
        {myBooks.map((book) => {
          return (
            <div key={book.id} className="bookCard">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={`${book.coverimage}`} />
                <Card.Body>
                  <Card.Title className="bookTitle">{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </section>