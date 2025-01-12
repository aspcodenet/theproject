// MODULE

// publkic + private i C#

function CreateUser(fullName, phone)  {
    aaa()
    var returnObj = {
      fullName : fullName,
      phone : phone,
      contactInfo: 'Contact Info: ' + fullName + ' ' + phone
    }
    return returnObj
  }

  function aaa(){

  }

 const allUsers = [
    CreateUser("Stefan","1"),
    CreateUser("Kalle","222")
  ]

export { CreateUser, allUsers  }

// export function CreateUser(fullName, phone)  {
//     aaa()
//     var returnObj = {
//       fullName : fullName,
//       phone : phone,
//       contactInfo: 'Contact Info: ' + fullName + ' ' + phone
//     }
//     return returnObj
//   }

//   function aaa(){

//   }


//   export const allUsers = [
//     CreateUser("Stefan","1"),
//     CreateUser("Kalle","222")
//   ]


  