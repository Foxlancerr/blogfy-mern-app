
import bcrypt from 'bcrypt';

export const hashedPassward = async (password) => {
    return await bcrypt.hash(password, 10)
}

export const decrptPassword = async (userPassword, DbStorePassword) => {
    return await bcrypt.compare(userPassword, DbStorePassword)
}

// const hashed = await hashedPassward("kamran")
// const original = await hashedPassward("kamran",)

// console.log(hashed);
// console.log(original);