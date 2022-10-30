# Another order manager

> ## tech stack

- next.js
- discord.js
- typescript
- scss

> ## Function

> - login features
> - save order details
> - display the orders
> - send the order request to discord channel ->for booster to take the order
> - when a booster takes the order ( by clicking TAKE button)
> - update the order details -> to play by the booster
> - record the booster discord id/discord tag into database if the booster are new
> - when the order done -> click done button
> - order status updated
> - update the booster's balance in db -> + the order price to balance

> ## extra convinient life function

> - the order's DONE button cant be clicked if theres no player take the order (player = null)
> - jwt save login details

> ## bug

> - need to have full price , price -> frontend
> - database player_id shud change to discord_id
> - need find a way to inner join database orderlist to playerid
> - get the player nickname and display on frontend
> - fix `There are already 10 instances of Prisma Client actively running.`

> ## Dairy (To Do for next day)

> #### 10/21/2022

> Done api/frontend of order page -> able to CRUD about orderlist at frontend  
> TODO -> need to implement discord.js to send order to discord when add an order  
> when player click the button then api PUT to update player to specific order

> #### 10/22/2022

> done discord js api,done navbar,done-> click done and auto add balance to player
> TODO ->
> bug-> discordjs trigger multiple listener and take action to button click multiple times
> -> problem : i added a variables that become true when discord login and add a listenenr
> -> so it doenst trigger second time cuz the var become true
> -> it works first -> but after i done [some others actions] calling others apit
> -> my discord login console log called again and multiple listener added ?
> need to find which action make the variables to false...
> ->found after i done order + delete order -> variables reset
> -> bug found when i click done order -> because done order fetch to player api to add balance to the player
> -> maybe the order api page reset? when i fetch to player api and back to order
> fixed -> add a express server to host discordjs
> everything done ... 30/10/2022
