const express=require('express');
const engine=require('ejs');
const path=require('path');
const app=express();

app.set('views',path.join(__dirname,'views'));
//app.engine('ejs',engine);
app.set('view engine','ejs');
app.set('puerto',process.env.PORT || 8000);

app.use('/',require('./routes/index'))

app.listen(app.get('puerto'),()=>{
	console.log('servidor ejecutandose en el puerto',app.get('puerto'));
});

