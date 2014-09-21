class Fizzbuzz

  def initialize
    @line_array = []
    File.open(ARGV[0]).each_line do |line|
      @line_array << line.split(" ")
    end
    lines_to_integers
  end

  def create_range(number_set)
    @range = (1..number_set).to_a
    make_fizzbuzz()
  end

  def lines_to_integers
    @line_array.each do |line|
      range_limit = line[2].to_i
      @first_number = line[0].to_i
      @second_number = line[1].to_i
      create_range(range_limit)
    end
  end

  def make_fizzbuzz
    fizzbuzz = @range.map! do |num|
      if num % @first_number == 0 && num % @second_number == 0
        num = "FB"
      elsif num % @second_number == 0
        num = "B"
      elsif num % @first_number == 0
        num = "F"
      else
        num = num
      end
    end
    print @range.join(" ")
    puts
  end

end

fizzbuzz = Fizzbuzz.new()
