
function calculateAge(birthday) {
    const birthDate = new Date(birthday);
    const currentDate = new Date();

    //calculate age (years) current year to birth year
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    //calculate age (months) difference from current month to birth month
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    // if statement to check if the birth month is later in the year than current month,
    //  "should" subtract 1 from the age if the birthday month hasnt occured during current year
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate()))
  
    return age - 1;
  };
  
