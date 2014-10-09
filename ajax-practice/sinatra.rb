require 'rubygems'
require 'sinatra'
require 'HTTParty'

# set :public_folder, File.dirname(__FILE__) + '/public'
response = HTTParty.get("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=mysteamkeynotreallytho&steamids=76561197985852059")

puts response
get '/' do
  File.open("index.html")

end
