export default{
    setNotification(state, data){
        state.notification.type = data.type;
        state.notification.message = data.message;
    }
}