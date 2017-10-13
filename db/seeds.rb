# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Message.destroy_all
Channel.destroy_all
User.destroy_all

elo = User.new(email: "eroyant@gmail.com", password: "123456")
elo.save!

juju = User.new(email: "julien_dasilva@gmail.com", password: "123456")
juju.save!

jeje = User.new(email: "jeremy_israel@gmail.com", password: "123456")
jeje.save!

channel = Channel.new(name: "javascript")
channel.save!

paris = Channel.new(name: "paris")
paris.save!

general = Channel.new(name: "general")
general.save!

react = Channel.new(name: "react")
react.save!


message1 = Message.new(user:elo, channel:channel, content: "{} + [] = 0 wat??????????")
message1.save!

message2 = Message.new(user:juju, channel:react, content: "\\0\/______/\\")
message2.save!

message3 = Message.new(user:jeje, channel:react, content: "test test")
message3.save!

message4 = Message.new(user:elo, channel:react, content: "fiiiiiiiiiiiire")
message4.save!
