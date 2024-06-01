import app from "./app.js";
import Razorpay from "razorpay"

export const instance = new Razorpay({
    
        key_id: 'rzp_test_repeCzAdhpB8Cu',
        key_secret: 'gYBnndng1V2NEiNgbSLxKsLM',
     

});

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER RUNNING AT PORT ${process.env.PORT}`);
});
