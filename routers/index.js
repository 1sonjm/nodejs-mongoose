/**
 * routers
 */

module.exports = function(app, Book) {
  /**
   * @api {get} /api/books Request Book list
   * @apiName GetBooks
   * @apiGroup Books
   *
   * @apiSuccess {String} firstname Firstname of the User.
   * @apiSuccess {String} lastname  Lastname of the User.
   */
  app.get('/api/books', function(req, res) {
    res.end();
  });

  app.get('/api/books/:bookId', function(req, res) {
    res.end();
  });

  app.get('/api/books/author/:author', function(req, res) {
    res.end();
  });

  /**
   * @api {post} /api/books Add new Book item
   * @apiName AddBook
   * @apiGroup Books
   */
  app.post('/api/books', function(req, res) {
    var book = new Book();
    book.title = req.body.title;
    book.author = req.body.author;
    book.publishedDate = new Date(req.body.publishedDate);

    book.save(function(err){
      if(err){
          console.error(err);
          res.json({result: 0});
          return;
      }

      res.json({result: 1});
    });
  });

  /**
   * @api {put} /api/books/:bookIdUpdate registered books for change info
   * @apiName UpdateBoo
   * @apiGroup Books
   *
   * @apiParam {Number} bookId Books unique ID.
   */
  app.put('/api/books/:bookId', function(req, res) {
    res.end();
  });

  /**
   * @api {delete} /api/books/:bookId remove registered Book item
   * @apiName DeleteBook
   * @apiGroup Books
   *
   * @apiParam {Number} bookId Books unique ID.
   */
  app.delete('/api/books/:bookId', function(req, res) {
    res.end();
  });

}
