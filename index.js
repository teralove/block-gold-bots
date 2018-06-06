module.exports = function BlockGoldBots(dispatch) {
    
    const keywords = ['M M O'];
    
    let inVelika = false;
    
    dispatch.hook('S_LOAD_TOPO', 3, (event) => {
        inVelika = event.zone == 1 ? true : false;
    });
    
    dispatch.hook('S_CHAT', 1, {order: 100}, (event) => {
        if (!inVelika) return;
        
        for (let i = 0; i < keywords.length; i++) {
            if (event.message.includes(keywords[i])) {
                return false;
            }
        }        
    });   
}