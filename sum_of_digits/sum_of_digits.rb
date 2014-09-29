class SumOfDigits

  def initialize
    @lines = []
  end

  def get_lines
    File.open(ARGV[0]).each_line do |line|
      @lines << line
    end
    clean_up
  end

  def clean_up
    @lines.each do |line|
      if line.include?("\n")
        line.chop!
      end
    end
    get_digits
  end

  def get_digits
    @digits = []
    @lines.map! do |line|
      line.split("")
    end
    get_integers
  end

  def get_integers
    @lines.map do |line|
      line.map! do |digit|
        digit.to_i
      end
    end
    get_sum
  end

  def get_sum
    @lines.map! do |digit|
      p digit.inject(:+)
    end
    return @lines
  end


end

sum_of_digits = SumOfDigits.new
sum_of_digits.get_lines