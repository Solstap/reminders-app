function calculateAge({ targetDate }) {
    const birthDate = new Date(targetDate);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const hasBirthdayOccurredThisYear =
        currentDate.getMonth() > birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() >= birthDate.getDate());

    if (!hasBirthdayOccurredThisYear) {
        age--;
    }

    return age;
}

export default calculateAge;