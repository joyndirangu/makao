const http=require("http");
const app=http.createServer( (req, res)=>{
    res.end(`
    <h1> Hello world</h1>
    `);
});
app.listen(3000, ()=>{
    console.log("app listening at port 3000");
})