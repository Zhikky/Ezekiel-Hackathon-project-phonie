     let phoneNumbers = document.getElementById("text2");
     
     let logo = document.getElementById("image");

     

     const Airtel = "https://upload.wikimedia.org/wikipedia/en/0/0e/Airtel_Logo.jpg";
     const Mtn = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/800px-New-mtn-logo.jpg";
     const Etisalat = "https://www.ngnews247.com/wp-content/uploads/2021/04/9mobilee-768x576-1.jpg"
     const Glo = "https://netstorage-legit.akamaized.net/images/4d3c614ef0ad2bf6.jpg?imwidth=720"

  function getNetwork(){
     let digits = phoneNumbers.value;
        // For Airtel sims
      if (digits.slice(0,4) == "0802"){
        logo.src = Airtel
      }
        else if(digits.slice(0,4) == "0808"){
        logo.src = Airtel
      }
        else if(digits.slice(0,4) == "0708"){
        logo.src = Airtel
      }
      else if(digits.slice(0,4) == "0812") {
        logo.src = Airtel
      }
      else if(digits.slice(0,4) == "0701") {
        logo.src = Airtel
      }
      else if(digits.slice(0,4) == "0902") {
        logo.src = Airtel
      }
      else if(digits.slice(0,4) == "0901") {
        logo.src = Airtel
      }
         else if(digits.slice(0,4) == "0907") {
        logo.src = Airtel
      }

    //   For Etisalat Sims
       else if(digits.slice(0,4) == "0809") {
        logo.src = Etisalat
      }
      else if(digits.slice(0,4) == "0818") {
        logo.src = Etisalat
      }
      else if(digits.slice(0,4) == "0909") {
        logo.src = Etisalat
      }
      else if(digits.slice(0,4) == "0817") {
        logo.src = Etisalat
      }
      else if(digits.slice(0,4) == "0908") {
        logo.src = Glo
      }

    //   For Mtn Sims
      else if(digits.slice(0,4) == "0803") {
        logo.src = Mtn
      }
      else if(digits.slice(0,4) == "0806") {
        logo.src = Mtn
      }
      else if(digits.slice(0,4) == "0703") {
        logo.src = Mtn
      }
      else if(digits.slice(0,4) == "0706") {
        logo.src = Mtn
      }
      else if(digits.slice(0,4) == "0813") {
        logo.src = Mtn
      }
      else if(digits.slice(0,4) == "0816") {
        logo.src = Mtn
      }
      else if(digits.slice(0,4) == "0810") {
        logo.src = Mtn
      }
      else if(digits.slice(0,4) == "0814") {
        logo.src = Mtn
      }
      else if(digits.slice(0,4) == "0903") {
        logo.src = Mtn
      }

    //   For Glo Sims
    else if(digits.slice(0,4) == "0805") {
        logo.src = Glo
      }
      else if(digits.slice(0,4) == "0807") {
        logo.src = Glo
      }
      else if(digits.slice(0,4) == "0705") {
        logo.src = Glo
      }
      else if(digits.slice(0,4) == "0815") {
        logo.src = Glo
      }
      else if(digits.slice(0,4) == "0805") {
        logo.src = Glo
      }
      else if(digits.slice(0,4) == "0811") {
        logo.src = Glo
      }
      else if(digits.slice(0,4) == "0905") {
        logo.src = Glo
      }
        else {
          logo.src = ""
      } return
    }


