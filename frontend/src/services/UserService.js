function UserService() {
    const userData = async (firstName, lastName, dateOfBirth, gender, adress, phoneNumber, Email, password, confirmPassword) => {
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
        if (confirmPassword != password){
            return "password is not the same";
        }
        
            let body = {
                first_name = firstName,
                last_name = lastName,
                date_of_birth = dateOfBirth,
                gender = gender,
                adress = adress,
                phone_number = phoneNumber,
                email = Email,
                password = password,
                confirm_password = confirmPassword
            };

            let result = fetch("localhost", {
                method: "POST",
                body: body,
                headers: { "Content-Type": "application/json" }
            });
            return result;
    };
    return {userData};
}
export default UserService;