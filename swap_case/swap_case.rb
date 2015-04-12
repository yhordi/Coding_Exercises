class SwapCase

  def initialize
    @lines = []
  end

  def get_lines
    File.open(ARGV[0]).each_line do |line|
      if line[-1] == "\n"
        line.chop!
      end
      @lines << line
    end
    split_words
  end

  def split_words
    @lines.map! do |array|
      array.split("")
    end
    swap_cases
  end

  def swap_cases
    @lines.each do |array|
      array.each do |letter|
        if letter.match(/([A-Z])/)
          letter.downcase!
        else
          letter.upcase!
        end
      end
    end
join_words
  end

  def join_words
    @swapped_cases = []
    @lines.each do |array|
      @swapped_cases << array.join("")
    end
    puts @swapped_cases
  end

end

swapcase = SwapCase.new
swapcase.get_lines