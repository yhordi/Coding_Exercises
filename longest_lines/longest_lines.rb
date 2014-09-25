class LongestLines

  def initialize
    @lines = []
    @lengths = []
    @i = 0
  end

  def get_lines
    File.open(ARGV[0]).each_line do |line|
      @lines << line
    end
    remove_empty
    # clean_up
  end

  def remove_empty
    @lines.delete_if do |line|
      line == "\n"
    end
    get_lengths
  end

  def get_lengths
    @lines.each do |line|
      @lengths << line.length
    end
    @line_lengths = @lengths.zip(@lines)
    sort_line_lengths
  end

  def sort_line_lengths
    @line_lengths.sort! do |x, y|
      y <=> x
    end
    remove_lengths
  end

  def remove_lengths
    @line_lengths.map do |array|
      array.delete_if do |element|
        element.is_a?(Integer) == true
      end
  end
    puts @line_lengths.flatten
  end

end

longest_lines = LongestLines.new
longest_lines.get_lines