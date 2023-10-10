type User = {
    name: string;
    displayName: string | null;
};

//утверждения выбрасывающие ошибки
function checkDisplayName(
    user: User
): asserts user is User & { displayName: string } {
    if (user.displayName === null) throw new Error('Error');
}

function printDisplayName(user: User) {
    checkDisplayName(user);

    console.log(user.displayName.toLowerCase());
}
