require 'rubygems'
require 'sinatra'
require 'HTTParty'

# set :public_folder, File.dirname(__FILE__) + '/public'

get '/' do
  File.open("index.html")
  # File.read(File.join('public', 'index.html'))
end

