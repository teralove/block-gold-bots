module.exports = function BlockGoldBots(dispatch) {
    
    const keywords = ['M M O', 'M M 0'];

    dispatch.hook('S_CHAT', 1, (event) => {
        for (let i = 0; i < keywords.length; i++) {
            if (event.message.includes(keywords[i])) {
                return false;
            }
        }        
    });   
}