var school=[
	{
		name:"1KTVR",
		classroomTeacher:"Vadim",
		students:[
			{name:"Eddie", lastname:"Redmayne", photo:"1.jpg"},
			{name:"Charlie", lastname:"Hunnam", photo:"2.jpeg"},
			{name:"Olivia", lastname:"Wilde", photo:"3.jpg"},
			{name:"Chris", lastname:"Hemsworth", photo:"4.jpg"},
		]	
	},
	{
		name:"2KTVR",
		classroomTeacher:"Marina",
		students:[
			{name:"Matthew", lastname:"McConauhey", photo:"5.jpg"},
			{name:"Zoe", lastname:"Saldana", photo:"6.jpg"},
			{name:"Alicia", lastname:"Vikander", photo:"7.jpg"},
			{name:"Sarah", lastname:"Millas",},
		]	
	},
];

var app = angular.module("schoolApp",[]);
app.controller("schoolCtrl", function($scope){
	$scope.title="Students List";
	$scope.school=school;
});