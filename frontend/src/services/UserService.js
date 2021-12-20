//register
//POST
function UserService() {
    const signUp = async (firstName, lastName, dateOfBirth, gender, adress, phoneNumber, Email, password) => {
        if (firstName == null) {
            return "firstname is empty";
        }
        if (lastName == null) {
            return "lastname is empty";
        }
        if (dateOfBirth == null) {
            return "date of birth is empty";
        }
        if (gender == null) {
            return "gender is empty";
        }
        if (adress == null) {
            return "adress is empty";
        }
        if (phoneNumber == null) {
            return "phonenumber is empty";
        }
        if (Email == null) {
            return "email is empty";
        }
        if (password == null) {
            return "password is empty";
        }

        let body = {
            first_name: firstName,
            last_name: lastName,
            dob: dateOfBirth,
            gender: gender,
            address: adress,
            phone_number: phoneNumber,
            email: Email,
            password: password,
        };

        let result = fetch("http://172.20.241.192:3000/api/auth/register", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json());
        return result;
    };

    const signIn = async (email, password) => {

        if (email == null) {
            return "please fill in your email";
        }
        if (password == null) {
            return "please fill in your password";
        }


        let body = {
            email: email,
            password: password

        };

        let result = await fetch("http://172.20.241.192:3000/api/auth/login", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json());
        return result;
    };

    const getMe = async (token) => {
        let result = await fetch("http://172.20.241.192:3000/api/user/me", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token,
            }
        }).then((res) => res.json());
        return result;
    };

    const saveChanges = async (firstName, lastName, dateOfBirth, gender, adress, phoneNumber, Email, password, token) => {
        let body = {
            first_name: firstName,
            last_name: lastName,
            dob: dateOfBirth,
            gender: gender,
            address: adress,
            phone_number: phoneNumber,
            email: Email,
            password: password,
        };

        let result = fetch("http://172.20.241.192:3000/api/user", {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        });
        return result;
    };

    const deleteUserData = async (token) => {
        let result = fetch('http://172.20.241.192:3000/api/user', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then((res) => res.json());
        return result;
    };

    const addCredits = async (token, credits) => {
        let body = { credits: credits };
        let result = fetch('http://172.20.241.192:3000/api/user/add/credits', {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then((res) => res.json());
        return result;
    };

    return { signIn, signUp, getMe, saveChanges, deleteUserData, addCredits };
}
export default UserService;