const app=require("./app");
const PORT=2030;
app.listen(PORT,function () {
    console.log(` back-end is running on http://localhost:${PORT}`)
})