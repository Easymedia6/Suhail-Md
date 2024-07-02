const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348156046767";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_20_28_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI3LFxuICAgICAgICA2OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzksXG4gICAgICAgIDE4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUxLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMixcbiAgICAgICAgNixcbiAgICAgICAgMjU0LFxuICAgICAgICA5MixcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE3LFxuICAgICAgICA0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNCxcbiAgICAgICAgMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5LFxuICAgICAgICA3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDMsXG4gICAgICAgIDIwLFxuICAgICAgICAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQyLFxuICAgICAgICA1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFKVXJjakptK25tSnlOMzNqcmJkK0xMcVl6clc5Y2U4T1dFSzhBWE1JWFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhHU0JtcmFPUnZhajZvWVVfSDAzTVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTMwMmRiYjUtNWI4Ny00YTlhLTkxZTQtNmZiNmIyOGNkYzU1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MCxcbiAgICAgIDY4LFxuICAgICAgMTM4LFxuICAgICAgMTcwLFxuICAgICAgMjQ2LFxuICAgICAgMTgzLFxuICAgICAgMTgyLFxuICAgICAgMTY5LFxuICAgICAgMTgwLFxuICAgICAgMjQ4LFxuICAgICAgMTQ1LFxuICAgICAgMjUsXG4gICAgICA4NixcbiAgICAgIDE0NCxcbiAgICAgIDE5OCxcbiAgICAgIDAsXG4gICAgICA4NyxcbiAgICAgIDIzOSxcbiAgICAgIDIxOCxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDExNCxcbiAgICAgIDE3NCxcbiAgICAgIDY2LFxuICAgICAgODYsXG4gICAgICAxNTQsXG4gICAgICAxNDQsXG4gICAgICAxMzAsXG4gICAgICAyMTgsXG4gICAgICAyMjEsXG4gICAgICAxODQsXG4gICAgICAxMjMsXG4gICAgICAxMzksXG4gICAgICAyNTAsXG4gICAgICA1NCxcbiAgICAgIDE1OCxcbiAgICAgIDM1LFxuICAgICAgMjEyLFxuICAgICAgMjQyLFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFRIMkg0SlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNTYwNDY3Njc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc5NDgyNTY0OTI3NTkzOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHJxeDVJREVOUEZrYlFHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwQm0wQnkrdzhqaytzUUJNY2s5ODhTckt5K0w1U0hwcWt0WUI2Y1NBQ2xZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNmWUhkT0ZUbDFROWtuNXVBdHcwcUNrMmpLaWZBZWdtZDVEQVFIdnUzWWUwQytHazAzbGRPM091VDViVkNyWElSU1hzMUlEaVI0R0NDMnRxbElXZEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1WejVZUDgzN3N2S1p6QlJYNGc3YmhhMy9aRHk5S21TQmYzVTZzejg3aVJRdGR5aHFsRXQxcHVCcEJieDJtTjBicHE4SEVDWGxabm5YSTJpN21BQ2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNTYwNDY3Njc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTU2MDQ2NzY3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTk1MjA5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVB1U1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHVTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVE1EckJHWSt2aURKY3g5VTFIZXoySlgzWmZhS0JielE4U3FyL3l4OFYrUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NDQyMzIwNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTQzNTA2NDI0MFwifSIKfQ== 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
