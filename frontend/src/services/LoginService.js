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

            let result = fetch("localhost", {
                method: "POST",
                body: body,
                headers: { "Content-Type": "application/json" }
            });
            return result;
    };
    return {loginData};
}
export default LoginService;