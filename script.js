window.promises = [];

let promise1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("1");
	},1000);
});
promises.push(promise1);
let promise2=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("2");
	},2000);
});
promises.push(promise2);
let promise3=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("3");
	},3000);
});
promises.push(promise3);
let promise4=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("4");
	},4000);
});
promises.push(promise4);
let promise5=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("5");
	},5000);
});
promises.push(promise5);

const ans=Promise.any(promises);
ans.then((data)=>{
	let div=document.getElementById("output");
	div.textContent=data;
})