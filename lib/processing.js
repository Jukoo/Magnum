#!/usr/bin/env node 

const path=require("path") 

module
["exports"] =  {

    init_pathname_loader (htm_file_location , {...URL_CONF} ) {
        
        let main_path = __dirname 
        let current_dir = main_path.split("/") 
        current_dir.pop()
        main_path = current_dir.join("/")
        if ( "pathname" in  URL_CONF )  {
            if (URL_CONF["pathname"]  == "" ) 
                URL_CONF["pathname"]=path.join(main_path ,htm_file_location);  

            return {...URL_CONF} 
        }
    }
}
