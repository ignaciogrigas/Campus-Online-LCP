const express = require("express");
const router= express.Router();
const path =require("path")

router.get("/",(req,res)=> res.render("home",{
    title:"Home",
    style:"/css/home.css"
}))
router.get("/log-in",(req,res)=> res.render("log-in",{
    title:"Log In",
    style:"/css/log-in.css"
}))
router.get("/recover-password",(req,res)=> res.render("recover-password",{
    title:"recover-password",
    style:"/css/log-in.css"
}))
router.get("/expired-session",(req,res)=> res.render("expired-session",{
    title:"expired-session",
    style:"/css/log-in.css"
}))
router.get("/class",(req,res)=> res.render("class",{
    title:"class",
    style:"/css/class.css"
}))
router.get("/classes",(req,res)=> res.render("classes",{
    title:"classes",
    style:"/css/classes.css"
}))
router.get("/recorded-classes",(req,res)=> res.render("recorded",{
    title:"recorded-classes",
    style:"/css/recorded.css"
}))
router.get("/profile",(req,res)=> res.render("profile",{
    title:"profile",
    style:"/css/profile.css"
}))
router.get("/profile-edit",(req,res)=> res.render("profile-edit",{
    title:"profile-edit",
    style:"/css/profile-edit.css"
}))
router.get("/payments",(req,res)=> res.render("payments",{
    title:"payments",
    style:"/css/payments.css"
}))
router.get("/welcome-letter",(req,res)=> res.render("welcome-letter",{
    title:"welcome-letter",
    style:"/css/welcome-letter.css"
}))
router.get("/single-class",(req,res)=> res.render("single-class",{
    title:"single-class",
    style:"/css/single-class.css"
}))
router.get("/calendar",(req,res)=> res.render("calendar",{
    title:"calendar",
    style:"/css/calendar.css"
}))
router.get("/class-test",(req,res)=> res.render("class_test",{
    title:"test",
    style:"/css/class_test.css"
}))
router.get("/final-test",(req,res)=> res.render("final_test",{
    title:"final test",
    style:"/css/class_test.css"
}))
router.get("/test-results",(req,res)=> res.render("test_results",{
    title:"results",
    style:"/css/test_results.css"
}))
router.get("/register",(req,res)=> res.render("register",{
    title:"register",
    style:"/css/profile-edit.css"
}))
module.exports=router