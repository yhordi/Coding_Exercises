require 'rubygems'
require 'sinatra'
require 'HTTParty'
require 'erb'


get '/' do
  erb :index
end

get '/HTTParty' do
  @response = HTTParty.get("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=mysteamkeynotreallytho&steamids=76561197985852059")

  # redirect '/'

end