class LettercasePercentage

  def initialize
    @lines = []
    @lengths = {upcase: [],
                downcase: []}
    @percentages = {upcase: [],
                    downcase: []}
    @cases = [:upcase, :downcase]
  end

   def iteration
    i = 0
    until i > 1 do
      yield i
    i += 1
    end
  end

  def get_lines
    File.open(ARGV[0]).each_line do |line|
      line.chop!
      @lines << line
    end
    find_upcase
  end

  def find_upcase
    @lines.each do |word|
      string = word.scan(/([A-Z])/)
      @lengths[:upcase] << string.length.to_f
    end
    find_downcase
  end

  def find_downcase
    @lines.each do |word|
      string = word.scan(/([a-z])/)
      @lengths[:downcase] << string.length.to_f
    end
    get_decimal_percentage(@lengths, @percentages)
  end

  def get_decimal_percentage(lengths, percentages)
    iteration do |iterator|
      j = 0
      array = []
      lengths[@cases[iterator]].each do |number|
        array << number / @lines[j].length.to_f
        j += 1
      end
      percentages[@cases[iterator]] = array
    end
    get_percents(@percentages)
  end

  def get_percents(hash)
    iteration do |iterator|
      hash[@cases[iterator]].map! do |decimal|
        decimal *= 100
      end
    end
    round_percents(@percentages)
  end

  def round_percents(hash)
    iteration do |iterator|
      hash[@cases[iterator]].map! do |percent|
        percent.round(2)
      end
    end
    return_values
  end

  def return_values
    i = 0
    @lines.each do |line|
      puts "lowercase: #{@percentages[:downcase][i]} uppercase: #{@percentages[:upcase][i]}"
      i += 1
    end
  end
end

percentage = LettercasePercentage.new
percentage.get_lines