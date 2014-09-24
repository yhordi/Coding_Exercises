# Write a method that can get prime numbers
# write a method that can calculate palindromes
require 'prime'
class PrimePalindrome

  def initialize
    @primes = []
    @prime_palindromes = []
  end

  def get_prime(number)
    Prime.each(1000) do |prime|
      @primes << prime.to_s
    end
    eliminate_low_numbers
  end

  def eliminate_low_numbers
    @primes.delete_if do |number|
      number.length == 1
    end
    is_palindrome?
  end

  def is_palindrome?
    @primes.keep_if do |number|
      number == number.reverse
    end
    back_to_integers
  end

  def back_to_integers
    @primes.map! do |number|
      number.to_i
    end
    get_largest
  end

  def get_largest
    p @primes[-1]
  end
end

prime_palindrome = PrimePalindrome.new
prime_palindrome.get_prime(1000)