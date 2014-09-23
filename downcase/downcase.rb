File.open("input.txt").each_line do |line|
  line.downcase!
  puts line
end
