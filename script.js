function fetchData(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const empData=`[{"id":1,"name":"John Smith","age":35,"contact":"+1 555-1234","zip":"10001"},{"id":2,"name":"Jane Doe","age":28,"contact":"+1 555-2345","zip":"10002"},{"id":3,"name":"Bob Johnson","age":42,"contact":"+1 555-3456","zip":"10003"},{"id":4,"name":"Samantha Lee","age":24,"contact":"+1 555-4567","zip":"10004"},{"id":5,"name":"Peter Kim","age":31,"contact":"+1 555-5678","zip":"10005"},{"id":6,"name":"Emily Chen","age":29,"contact":"+1 555-6789","zip":"10006"},{"id":7,"name":"David Patel","age":36,"contact":"+1 555-7890","zip":"10007"},{"id":8,"name":"Megan Wong","age":27,"contact":"+1 555-8901","zip":"10008"},{"id":9,"name":"Michael Chen","age":43,"contact":"+1 555-9012","zip":"10009"},{"id":10,"name":"Ashley Park","age":26,"contact":"+1 555-0123","zip":"10010"},{"id":11,"name":"James Kim","age":33,"contact":"+1 555-1234","zip":"10011"},{"id":12,"name":"Karen Lee","age":30,"contact":"+1 555-2345","zip":"10012"},{"id":13,"name":"Brian Chen","age":37,"contact":"+1 555-3456","zip":"10013"},{"id":14,"name":"Lisa Nguyen","age":25,"contact":"+1 555-4567","zip":"10014"},{"id":15,"name":"Daniel Kim","age":32,"contact":"+1 555-5678","zip":"10015"},{"id":16,"name":"Erica Chen","age":28,"contact":"+1 555-6789","zip":"10016"}]`
			resolve(JSON.parse(empData))
		},500)
	})
}

function sortAge(employees){
	return employees.sort((a,b)=>a.age-b.age)
}
async function processData(){
	try{
		const employees=await fetchData();
		const sorted=sortAge(employees);
		console.log(JSON.stringify(sorted,null,2));
	}
	catch(error){
		console.log(error)
	}
}
processData()