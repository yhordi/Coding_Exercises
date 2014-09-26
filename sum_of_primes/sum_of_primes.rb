require 'prime'

class SumOfPrimes

  def initialize
    @primes = []
  end

  def is_prime?(number)
    if number.prime? == true
      @primes << number
    end
  end

  def get_prime
    i = 1
    until @primes.length == 1000 do
      is_prime?(i)
      i += 1
    end
    sum_primes
  end

  def sum_primes
    sum = @primes.reduce(:+)
    p sum
  end
end

primes_sum = SumOfPrimes.new
primes_sum.get_prime