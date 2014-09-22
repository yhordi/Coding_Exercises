class ReverseWords

  def initialize
    @lines = []
  end

  def get_lines
    File.open(ARGV[0]).each_line do |line|
      @lines << line
    end
    isolate
  end

  def isolate
    @isolated_words = []
    @lines.each do |word|
      @isolated_words << word.split(/\s/)
    end
    flip
  end

  def flip
    @isolated_words.each do |array|
      array.reverse!
    end
    make_purdy
  end

  def make_purdy
    @isolated_words.each do |array|
      puts array.join(" ")
    end
  end

end

reverse_words = ReverseWords.new
reverse_words.get_lines