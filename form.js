function validateform()
{
    var name=document.myform.name.value;
    var email=document.myform.email.value;
    var mob=document.myform.mob.value;
    var pass=document.myform.pass.value;
    var conpass=document.myform.conpass.value;
    var valid=document.myform.terms.value;
   

    if(name==null || name=="")
    {
        alert("Name cant be blank");
        return false;
    }
    if (pass==" ")
    {
        alert("Password cant be blank");
        pass.focus();
        return false;
    }
    if(pass!=conpass)
    {
        alert("Password mismatch!");
        return false;
    }
    if (pass.length!="")
    {
        var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        if (regex.test(pass)==false)
        {
            alert("Please enter a valid password");
            return false;
        }
    }
    if(mob.length!="")
    {
        var re=/^(?=.{10})/;
        if(re.test(mob)==false)
        {
            alert("Please enter valid mobile number");
            return false;
        }
    }
    //if(!valid.checked)
   // {
     //   alert("Please select the terms and conditions");
     //   return false;
  //  }
    if (email!="")
    {
         var emre=/^(?=.*[@])/;
         if(emre.test(email)==false)
         {
            alert("Enter valid email");
            return false;
         }
    }
   

   
}
function validatelogin()
{
    var namel=document.loginform.namel.value;
    var passl=document.loginform.passl.value;
    if(namel==""||namel==null)
    {
        alert("Username cnat be blank");
        return false;
    }
    if(passl=="" || passl==null)
    {
        alert("Password cant be blank");
        return false;
    }
}