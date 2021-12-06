function LoginService() {
    const loginData = async (email, password) => {
        
        if (email == null) {
            return "please fiull in your email";
        }
        if (password == null) {
            return "please fill in your password";
        }
        
        
        let body = { 
            email: email,
            password: password
            
        };

        let result = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json());
        return result;
    };
    return {loginData};
}
export default LoginService;