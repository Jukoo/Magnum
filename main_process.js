#!/usr/bin/env node 

call_kernel: { core = require("./kernel") }  

const {
    electron:{ app ,BrowserWindow , Menu },
    url , path , 
    processing :{ init_pathname_loader}, 
    browser_win_opt  
} =core.node_core 

browser_window_options      : {bw_opt    = browser_win_opt.Bw_options }
universal_resource_locator  : {url_conf  = browser_win_opt.URL_CONF   }
renderer_process_html       : {htm_file  = browser_win_opt.htm_file   }

init_application            : {e_app     =         null               }  

console.log(init_pathname_loader(htm_file , url_conf))
const  magnum  = {
    ["main_Window" ]  ()  {
        e_app = new BrowserWindow({...bw_opt})
        ["loadURL"](url["format"](
            init_pathname_loader(htm_file ,  {...url_conf}, {...path}) 
        ))
        
    }
}


app.on("ready" , magnum.main_Window)
