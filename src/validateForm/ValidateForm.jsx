const phoneRegEx = /^\d{10}$/;

function validateForm(formData,check){
    
    const errors = {}

    if(!formData?.name){
        errors.name = "Name is required*"
    }

    if(!formData?.userName){
        errors.userName = "UserName is required*"
    }

    if(!formData?.email){
        errors.email = "Email is required*"
    }

    if(!formData?.phoneNo){
        errors.phoneNo = "Mobile is required*"
    } else if (!phoneRegEx.test(formData?.phoneNo)){
        errors.phoneNo = "Phone number must be 10 digits"
    }

    if(!check){
        errors.check = "Check this box if you want to proceed"
    }

    const isValid = Object.keys(errors).length === 0;

    return {isValid , errors}

}

export default validateForm;