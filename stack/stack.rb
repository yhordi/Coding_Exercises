class Stack

  def initialize
    @lines = []
    @popped = []
  end

  def get_numbers
    File.open(ARGV[0]).each_line do |line|
      @lines << line
    end
    clean_up
  end

  def clean_up
    @lines.each do |line|
      if line.include? "\n"
        line.chop!
      end
    end
    make_arrays_from_strings(@lines)
  end

  def make_arrays_from_strings(strings)
    strings.map! do |string|
      string.split ' '
    end
    reverse_strings
  end

  def reverse_strings
    @lines.map do |line|
      line.reverse!
    end
    strings_to_integers
  end

  def strings_to_integers
    @lines.map! do |line|
      line.map do |i|
        i.to_i
      end
    end
    pop_every_other_index
  end

  def pop_every_other_index
    @lines.map do |line|
      i = 0
      popped_local = []
      line.map do |integer|
        if i.even?
          popped_local << line.slice(i)
        end
        i += 1
      end
      @popped << popped_local
    end
    gimme_the_goods
  end

  def gimme_the_goods
    @popped.map do |array|
      puts array.join(' ')
    end
  end

end

stack = Stack.new
stack.get_numbers()