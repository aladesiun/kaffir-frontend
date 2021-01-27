export default{
    setNotification(state, data){
        state.notification.type = data.type;
        state.notification.message = data.message;
    },

    setUser(state, data){
        state.user = data; 

        var result =  encodeURIComponent(JSON.stringify(data));
        localStorage.setItem('user', result);
    },

    getUser(state){
        var data = localStorage.getItem('user');
        data = decodeURIComponent(data);
        data = JSON.parse(data);

        state.user = data;
        state.token  = data.token;

        var result =  encodeURIComponent(JSON.stringify(data));
        localStorage.setItem('user', result);
    },

    logout(state){
        window.localStorage.removeItem('user');
        state.user = {};
        state.token = null;
        window.location.href = '/login';
    }
}