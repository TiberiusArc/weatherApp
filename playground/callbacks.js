let getUser = (id, callback)=> {
   let user = {
       id: id,
       name: 'Vikram'
   };
   setTimeout(() => {
       callback(user);
   }, 3000)

};

getUser(31, (user) =>{
   console.log(user);
});

//
// https://maps.googleapis.com/maps/api/geocode/json?address=1301 lombard street philadelphia