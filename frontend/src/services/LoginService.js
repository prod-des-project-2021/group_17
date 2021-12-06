function LoginService() {
    const loginData = async (Email, password) => {
        
        if (Email == null) {
            return "please fiull in your email";
        }
        if (password == null) {
            return "please fill in your password";
        }
        
        
        let body = { 
            email = Email,
            password = password,
            
        };

        let result = fetch("https://localhost:3000/api/auth/login", {
            method: "POST",
            body: body,
            headers: { "Content-Type": "application/json" }
        });

        if((await result).status != 200)
            console.log("DDD");
        console.log("AAAAAA");
        return result;
    };
    return {loginData};
}
export default LoginService;