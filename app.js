const http=require("http")

http.createServer((req,res)=>{
	res.write("server started")
	res.end()
} ).listen(2000)
	

