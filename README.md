# Another order manager
tech stack->
next.js
discord.js
typescript
scss

>## Function
>  
>- login features  
>- save order details  
>- display the orders  
>- send the order request to discord channel ->for booster to take the order  
>- when a booster takes the order ( by clicking TAKE button)  
>- update the order details -> to play by the booster  
>- record the booster discord id/discord tag into database if the booster are new  
>- when the order done -> click done button  
>- order status updated  
>- update the booster's balance in db -> + the order price to balance  
  
>## extra convinient life function  
>- the order's DONE button cant be clicked if theres no player take the order (player = null)  
>- jwt save login details  
  
>## bug 
>- need to have full price , price -> frontend  
>- database player_id shud change to discord_id  
>- need find a way to inner join database orderlist to playerid  
>- get the player nickname and display on frontend  
>- fix `There are already 10 instances of Prisma Client actively running.`  
>
