class OddNumbers

  def initialize
    @range = (1..99).to_a
  end

  def puts_odds
    @range.each do |number|
      get_odds(number)
    end
  end

  def get_odds(number)
    if number.odd?
      puts number
    end
  end

end

odd_numbers = OddNumbers.new
odd_numbers.puts_odds