export const cellStyle=(info:any)=>{
    const day = info.date.getDay(); 
    const today = new Date(); 
    if (day === 0) {
        info.el.style.backgroundColor = "#FFCDB2"; 
    }

    
    if (info.date.toDateString() === today.toDateString()) {
        info.el.style.backgroundColor = "#BFBBA9"; 
    }

    info.el.style.border = "1px solid #D7D3BF"; 
    info.el.style.borderRadius = "5px"; 
}