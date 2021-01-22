import axios from 'axios'

export default{
    post(context, data){
        return new Promise((resolve, reject) => {
            axios.post(context.state.endpoint + data.endpoint, data.details, {
                headers: { Authorization: 'Bearer ' + context.state.token},
            })
            .then((data)=>{
                resolve(data);
            })
            .catch((error)=>{
                console.log(error);
                // context.dispatch('handleError', error);
                reject(error);
            })
        });
    },
}