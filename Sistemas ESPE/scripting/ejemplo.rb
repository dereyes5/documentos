# Ejemplo de una clase que representa un libro
class Book
  attr_accessor :title, :author, :pages

  def initialize(title, author, pages)
    @title = title
    @author = author
    @pages = pages
  end

  def to_s
    "#{title} by #{author}, #{pages} pages"
  end
end
