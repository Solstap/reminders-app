
function calculateAge({targetDate}) {
    const birthDate = new Date(targetDate);
    const currentDate = new Date();

    //calculate age (years) current year to birth year
    const age = currentDate.getFullYear() - birthDate.getFullYear();
  
    return age;
  }

  export default calculateAge;
  
